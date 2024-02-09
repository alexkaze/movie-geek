const getPagesArr = (pagesQty: number, activePage: number, perPage: number) => {
  return Array.from({ length: perPage }, (_, i) => {
    const index = i + 1;
    let page: number | string;
    const pagesLeft = pagesQty - activePage;

    if (pagesQty <= 7) page = index;

    if (pagesQty > 7) {
      if (activePage < 5) {
        if (index < 6) page = index;
        if (index === 6) page = '...';
        if (index === 7) page = pagesQty;
      }

      if (activePage > 4) {
        if (index === 1) page = index;
        if (index === 2) page = '...';

        if (pagesLeft > 3) {
          if (index === 3) page = activePage - 1;
          if (index === 4) page = activePage;
          if (index === 5) page = activePage + 1;
          if (index === 6) page = '...';
          if (index === 7) page = pagesQty;
        }

        if (pagesLeft < 4) {
          if (index === 3) page = pagesQty - 4;
          if (index === 4) page = pagesQty - 3;
          if (index === 5) page = pagesQty - 2;
          if (index === 6) page = pagesQty - 1;
          if (index === 7) page = pagesQty;
        }
      }
    }

    return page!;
  });
};

export default getPagesArr;
