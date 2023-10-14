import { MouseEventHandler } from "react";

interface ArrowProps {
    onClick: MouseEventHandler<SVGSVGElement> | undefined;
    className?: string;
  }
  
  const ArrowDown = ({ onClick }: ArrowProps): JSX.Element => {

  return (
    <svg
      onClick={onClick}
      style={{ cursor: 'pointer' }}
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='9'
      viewBox='0 0 16 9'
      fill='none'
    >
      <path
        d='M1 1L7.64645 7.64645C7.84171 7.84171 8.15829 7.84171 8.35355 7.64645L15 1'
        stroke='#838383'
        strokeLinecap='round'
      />
    </svg>
  );
};

export default ArrowDown;
