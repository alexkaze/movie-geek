import { useEffect, useState } from 'react';

const useMatchMedia = () => {
  const mediaMobile = '(max-width: 660px)';
  const [matches, setMatches] = useState(
    window.matchMedia(mediaMobile).matches
  );

  useEffect(() => {
    window
      .matchMedia(mediaMobile)
      .addEventListener('change', e => setMatches(e.matches));
  }, []);

  return matches;
};

export default useMatchMedia;
