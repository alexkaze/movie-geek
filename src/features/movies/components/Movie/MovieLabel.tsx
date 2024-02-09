import styles from './Movie.module.scss';

type Props = {
  label: string;
  data: { [prop: string]: string }[];
};

const MovieLabel = ({ label, data }: Props) => {
  const dataName = label === 'Страна' ? 'country' : 'genre';

  const formatData = <T extends { [prop: string]: string }>(
    data: T[],
    dataName: string
  ): string =>
    data.map((obj: { [prop: string]: string }) => obj[dataName]).join(', ');

  return (
    <p className={styles['movie__text']}>
      <span className={styles['movie__label']}>{label}:</span>{' '}
      {formatData(data, dataName) || '-'}
    </p>
  );
};

export default MovieLabel;
