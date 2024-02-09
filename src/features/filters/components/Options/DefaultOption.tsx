import styles from './Option.module.scss';

const DefaultOption = ({ paramIsEmpty }: { paramIsEmpty: boolean }) => {
  return (
    <li
      className={
        paramIsEmpty ? `${styles.option} ${styles.selected}` : styles.option
      }
      data-active={paramIsEmpty ? 'active' : null}
    >
      --- Не важно ---
    </li>
  );
};

export default DefaultOption;
