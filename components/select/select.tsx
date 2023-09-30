import React, { useState, useEffect, useRef } from "react";
import type { MouseEventHandler } from "react";

import ArrowDown from "../arrow/arrow__down";
import styles from "./select.module.css";

type Option = {
  label: string;
  value: string;
};
type OptionProps = {
  option: Option;
  onClick: (label: Option["label"]) => void;
};
const OptionEl = (props: OptionProps) => {
  const {
    option: { value, label },
    onClick
  } = props;
  const optionRef = useRef<HTMLLIElement>(null);

  const handleClick = (
    clickedLabel: Option["value"]
  ): MouseEventHandler<HTMLLIElement> => () => {
    onClick(clickedLabel);
  };

  useEffect(() => {
    const option = optionRef.current;
    if (!option) return;
    const handleEnterKeyDown = (event: KeyboardEvent) => {
      if (document.activeElement === option && event.key === "Enter") {
        onClick(label);
      }
    };

    option.addEventListener("keydown", handleEnterKeyDown);
    return () => {
      option.removeEventListener("keydown", handleEnterKeyDown);
    };
  }, [label, onClick]);

  return (
    <li
      className={styles.option}
      value={value}
      onClick={handleClick(label)}
      tabIndex={0}
      data-testid={`select-option-${label}`}
      ref={optionRef}
    >
      {label}
    </li>
  );
};

type SelectProps = {
  selected: Option | null;
  options: Option[];
  placeholder?: string;
  mode?: "rows" | "cells";
  status?: "default" | "invalid";
  name?: string;
  onChange?: (selected: Option["label"]) => void;
  onClose?: () => void;
};

const Select = (props: SelectProps) => {
  const {
    mode = "rows",
    options,
    placeholder,
    status = "default",
    name,
    selected,
    onChange,
    onClose
  } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const placeholderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const { target } = event;
      if (target instanceof Node && !rootRef.current?.contains(target)) {
        isOpen && onClose?.();
        setIsOpen(false);
      }
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [onClose]);

  useEffect(() => {
    const placeholderEl = placeholderRef.current;
    if (!placeholderEl) return;

    const handleEnterKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        setIsOpen((prev) => !prev);
      }
    };
    placeholderEl.addEventListener("keydown", handleEnterKeyDown);

    return () => {
      placeholderEl.removeEventListener("keydown", handleEnterKeyDown);
    };
  }, []);

  const handleOptionClick = (label: Option["label"]) => {
    setIsOpen(false);
    onChange?.(label);
  };
  const handlePlaceHolderClick: MouseEventHandler<HTMLDivElement> = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className={styles.selectWrapper}
      ref={rootRef}
      data-is-active={isOpen}
      data-mode={mode}
      data-testid="selectWrapper"
      data-id={name}
    >
      {options.length > 1 && <div className={styles.arrow}>
        <ArrowDown />
      </div>}
      <div
        className={styles.placeholder}
        data-status={status}
        data-selected={!!selected?.label}
        onClick={handlePlaceHolderClick}
        role="button"
        tabIndex={0}
        ref={placeholderRef}
      >
        {selected?.label || placeholder}
      </div>
      {isOpen && (
        <ul className={styles.select} data-testid="selectDropdown">
          {options.map((option) => (
            <OptionEl
              key={option.label}
              option={option}
              onClick={handleOptionClick}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
