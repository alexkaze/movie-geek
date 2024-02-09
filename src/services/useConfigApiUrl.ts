import { useLocation } from 'react-router-dom';

import { API_URL } from '@config/env-config';

const useConfigApiUrl = () => {
  const location = useLocation();

  const path = location.pathname || '';
  const params = location.search || '';

  const currentApiUrl = API_URL + path + params;

  return currentApiUrl;
};

export default useConfigApiUrl;
