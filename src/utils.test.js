import {createPages} from './utils';

describe('pagination', () => {
  it('working with an empty arr.length = 10', () => {
    const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    createPages(pages, 5, 1);
    expect(pages).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5]);
  });
  it('working with an empty arr', () => {
    const pages = [];
    createPages(pages, 5, 1);
    expect(pages).toStrictEqual([1, 2, 3, 4, 5]);
  });
  it('working with an last page', () => {
    const pages = [];
    createPages(pages, 10, 10);
    expect(pages).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
