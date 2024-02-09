import RoundedBlock from '@components/ui/RoundedBlock';

import MoviesService from '../services/MoviesService';

import styles from './MoviesLayout.module.scss';

type Props = {
  children: React.ReactNode;
};

const MoviesLayout = ({ children }: Props) => {
  return (
    <RoundedBlock data-testid="movies-page" className={styles['movies-layout']}>
      <MoviesService>{children}</MoviesService>
    </RoundedBlock>
  );
};

export default MoviesLayout;
