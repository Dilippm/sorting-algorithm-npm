const mergeSort = require('./mergeSort');

describe('Merge Sort (Ascending)', () => {
  it('should sort an empty array', () => {
    const arr = [];
    const sortedArr = mergeSort(arr, true);
    expect(sortedArr).toEqual([]);
  });

  it('should sort an array with one element', () => {
    const arr = [42];
    const sortedArr = mergeSort(arr, true); 
    expect(sortedArr).toEqual([42]);
  });

  it('should sort an already sorted array', () => {
    const arr = [1, 2, 3, 4, 5];
    const sortedArr = mergeSort(arr, true); 
    expect(sortedArr).toEqual([1, 2, 3, 4, 5]);
  });

  it('should correctly sort a reversed array', () => {
    const arr = [5, 4, 3, 2, 1];
    const sortedArr = mergeSort(arr, true); 
    expect(sortedArr).toEqual([1, 2, 3, 4, 5]);
  });

  it('should correctly sort a random array', () => {
    const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
    const sortedArr = mergeSort(arr, true); 
    expect(sortedArr).toEqual([1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]);
  });
});

describe('Merge Sort (Descending)', () => {
  it('should sort an empty array in descending order', () => {
    const arr = [];
    const sortedArr = mergeSort(arr, false); 
    expect(sortedArr).toEqual([]);
  });

  it('should sort an array with one element in descending order', () => {
    const arr = [42];
    const sortedArr = mergeSort(arr, false);
    expect(sortedArr).toEqual([42]);
  });

  it('should sort an already sorted array in descending order', () => {
    const arr = [5, 4, 3, 2, 1];
    const sortedArr = mergeSort(arr, false); 
    expect(sortedArr).toEqual([5, 4, 3, 2, 1]);
  });

  it('should correctly sort a reversed array in descending order', () => {
    const arr = [1, 2, 3, 4, 5];
    const sortedArr = mergeSort(arr, false); 
    expect(sortedArr).toEqual([5, 4, 3, 2, 1]);
  });

  it('should correctly sort a random array in descending order', () => {
    const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
    const sortedArr = mergeSort(arr, false); 
    expect(sortedArr).toEqual([9, 6, 5, 5, 5, 4, 3, 3, 2, 1, 1]);
  });
});
