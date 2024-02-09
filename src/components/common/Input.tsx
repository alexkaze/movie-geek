import { RefObject } from 'react';

import styles from './Input.module.scss';

type Props = {
  refValue?: RefObject<HTMLInputElement>;
  className?: string;
  id?: string;
  name?: string;
  value?: string;
  type?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
};

const Input = ({ className, refValue, ...props }: Props) => {
  const classes = className
    ? `${styles.input} ${className}`
    : `${styles.input}`;

  return <input ref={refValue} className={classes} {...props} />;
};

export default Input;
