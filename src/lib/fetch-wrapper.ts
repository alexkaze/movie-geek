const fetchWrapper = async (url: string) => {
  return await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export default fetchWrapper;
