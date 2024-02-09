const initialMoviesArr = [
  {
    id: '1',
    data: {},
  },
];

for (let i = 2; i < 19; i++)
  initialMoviesArr.push({
    id: String(i),
    data: {},
  });

export default initialMoviesArr;
