
# Sorting Algorithms

This is a JavaScript package that provides implementations of three popular sorting algorithms: Merge Sort, Heap Sort, and Quick Sort. You can use these algorithms to efficiently sort arrays of data in both ascending and descending order.

## Installation

You can install this package via npm:

```bash
npm i @dilippm/sortify-js

# Usage

## Merge Sort
const mergeSort = require('@dilippm/sortify-js/mergeSort');

// Example usage for ascending order
const ascendingArray = [5, 3, 1, 4, 2];
const ascendingSortedArray = mergeSort(ascendingArray, true);
console.log('Ascending Sort:', ascendingSortedArray);

// Example usage for descending order
const descendingArray = [5, 3, 1, 4, 2];
const descendingSortedArray = mergeSort(descendingArray, false);
console.log('Descending Sort:', descendingSortedArray);


#Contributions
Contributions are welcome! If you have suggestions, bug reports, or want to add more sorting algorithms, please open an issue or submit a pull request.



