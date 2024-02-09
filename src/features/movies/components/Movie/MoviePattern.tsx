import RoundedBlock from '@components/ui/RoundedBlock';
import LoadingSpinner from '@components/ui/LoadingSpinner';

import styles from './MoviePattern.module.scss';

const MoviePattern = () => {
  return (
    <RoundedBlock className={styles['movie-pattern']}>
      <LoadingSpinner />
    </RoundedBlock>
  );
};

export default MoviePattern;
