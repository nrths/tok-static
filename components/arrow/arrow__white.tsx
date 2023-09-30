import styles from './arrow__white.module.css';

const ArrowWhite = (props: {
  disabled?: boolean;
  left?: boolean;
  onClick: (e: any) => void;
  className?: string;
}): JSX.Element => {
//   const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    
    <svg
      onClick={props.onClick}
      className={props.left ? `${styles.arrow} ${styles.arrow__left}` : `${styles.arrow} ${styles.arrow__right}`}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 9 16'
      fill='currentColor'
    >
      {props.left && (
        <path
          d='M8 1L1.56569 7.43431C1.25327 7.74673 1.25327 8.25327 1.56569 8.56569L8 15'
          stroke='#fff'
          strokeLinecap='round'
        />
      )}
      {!props.left && (
        <path
          d='M1 15L7.43431 8.56569C7.74673 8.25327 7.74673 7.74673 7.43431 7.43431L1 1'
          stroke='#fff'
          // strokeLinecap='round'
          fillRule='evenodd'
        />
      )}
    </svg>

  );
};

export default ArrowWhite;
