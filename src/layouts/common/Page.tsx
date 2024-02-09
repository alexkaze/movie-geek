import styles from './Page.module.scss';

type Props = {
  children: React.ReactNode;
};

const Page = ({ children }: Props) => {
  return <div className={styles.page}>{children}</div>;
};

export default Page;
