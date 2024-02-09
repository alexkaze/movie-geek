import { RefObject } from 'react';

import styles from './RoundedBlock.module.scss';

type Props = {
  children: React.ReactNode;
  refValue?: RefObject<HTMLDivElement>;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  onAnimationEnd?: React.AnimationEventHandler;
};

const RoundedBlock = ({ children, refValue, className, ...props }: Props) => {
  const classes = className
    ? `${styles['rounded-block']} ${className}`
    : styles['rounded-block'];

  return (
    <div
      data-testid="rounded-block"
      ref={refValue}
      className={classes}
      {...props}
    >
      {children}
    </div>
  );
};

export default RoundedBlock;
