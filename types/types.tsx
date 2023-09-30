export type TPopupOverlay = {
  onClick: () => void;
};

export type TPopup = {
  title?: string | null;
  children?: React.ReactNode;
  active: boolean;
  setActive: (value: boolean) => void;
  className?: string;
};
