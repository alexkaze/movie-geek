import styles from './Error.module.scss';

type Props = {
  children: React.ReactNode;
};

const Error = ({ children }: Props) => {
  return (
    <div className={styles.error}>
      <div className={styles.title}>Нет результатов</div>
      <div>{children}</div>
    </div>
  );
};

export default Error;
