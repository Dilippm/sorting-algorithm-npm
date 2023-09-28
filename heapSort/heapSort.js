// Helper function to heapify a subtree with the root at given index
function heapify(arr, n, index, isMaxHeap) {
    let largest = index; // Initialize largest as root
    const left = 2 * index + 1; // Left child
    const right = 2 * index + 2; // Right child
  
    // Compare left child with root or right child with root, depending on whether it's a Max Heap or Min Heap
    if (isMaxHeap) {
      if (left < n && arr[left] > arr[largest]) {
        largest = left;
      }
      if (right < n && arr[right] > arr[largest]) {
        largest = right;
      }
    } else {
      if (left < n && arr[left] < arr[largest]) {
        largest = left;
      }
      if (right < n && arr[right] < arr[largest]) {
        largest = right;
      }
    }
  
    // If the largest is not the root, swap the root with the largest element
    if (largest !== index) {
      [arr[index], arr[largest]] = [arr[largest], arr[index]];
  
      // Recursively heapify the affected sub-tree
      heapify(arr, n, largest, isMaxHeap);
    }
  }
  
  // Main function to perform Heap Sort
  function heapSort(arr, isMaxHeap = true) {
    const n = arr.length;
  
    // Build a heap (rearrange the array)
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapify(arr, n, i, isMaxHeap);
    }
  
    // One by one extract elements from the heap
    for (let i = n - 1; i > 0; i--) {
      // Move the current root to the end
      [arr[0], arr[i]] = [arr[i], arr[0]];
  
      // Call heapify on the reduced heap
      heapify(arr, i, 0, isMaxHeap);
    }
  
    return arr;
  }
  
  module.exports = heapSort;
  