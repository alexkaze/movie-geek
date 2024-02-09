import styles from './Button.module.scss';

type Props = {
  className?: string;
  text?: string;
  type?: 'submit' | 'reset' | 'button';
  disabled?: boolean;
  onClick?: () => void;
};

const Button = ({ className, type, text, disabled, ...props }: Props) => {
  const classes = className ? `${styles.btn} ${className}` : `${styles.btn}`;

  return (
    <button
      className={classes}
      type={type || 'button'}
      disabled={disabled}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
