function quickSort(arr, ascending = true) {
    if (arr.length <= 1) return arr;
  
    const pivot = arr[arr.length - 1]; // Choose the last element as the pivot
    const left = [];
    const right = [];
  
    for (let i = 0; i < arr.length - 1; i++) {
      if ((ascending && arr[i] < pivot) || (!ascending && arr[i] > pivot)) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  
    return [...quickSort(left, ascending), pivot, ...quickSort(right, ascending)];
  }
  
  module.exports = quickSort;
  