import { ReactNode, MouseEventHandler } from 'react';
import styles from './button.module.css';

interface ButtonProps {
  loading?: boolean;
  type: 'button' | 'submit' | 'reset';
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
  className?: string;
}

const Button = ({ loading, type, children, onClick, className }: ButtonProps) => (
  <button
    className={`${styles.button} ${className}`}
    disabled={loading}
    type={type}
    onClick={onClick}
  >
    {/* {loading ? <Loader /> : children} */}
    {children}
  </button>
);

export default Button;