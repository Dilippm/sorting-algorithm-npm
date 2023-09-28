
function mergeSort(arr, ascending = true) {
    if (arr.length <= 1) return arr;
  
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
  
    return merge(
      mergeSort(left, ascending),
      mergeSort(right, ascending),
      ascending
    );
  }
  
  function merge(left, right, ascending) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    while (leftIndex < left.length && rightIndex < right.length) {
      if ((ascending && left[leftIndex] < right[rightIndex]) ||
          (!ascending && left[leftIndex] > right[rightIndex])) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
  }
  
  module.exports = mergeSort;
  
  