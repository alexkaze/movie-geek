import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

import styles from './Image.module.scss';

type Props = {
  src: string;
  alt: string;
  loading?: 'lazy';
};

const Image = ({ src, alt, loading }: Props) => {
  const { ref, inView } = useInView({
    threshold: 0.01,
    triggerOnce: true,
  });
  const [imgIsLoading, setImgIsLoading] = useState(true);

  const loadImageHandler = () => {
    setImgIsLoading(false);
  };

  const imgContainerStyles = `${styles['image-container']} ${
    imgIsLoading && styles.lazy
  }`;

  return (
    <div data-testid="image-container" ref={ref} className={imgContainerStyles}>
      {inView && (
        <img
          className={styles.img}
          src={src}
          alt={alt}
          loading={loading}
          onLoad={loadImageHandler}
        />
      )}
    </div>
  );
};

export default Image;
