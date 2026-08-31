// General binary search

// arr: 1 2 3 4 5 6 7 8 9 10
// ele: 2
// op: return the index--> 1

function binarySearch(arr: number[], ele: number) {
  let start = 0;
  let end = arr.length - 1;
  let mid = 0;
  while (start <= end) {
    mid = Math.floor(start + (end - start) / 2);
    if (ele == arr[mid]!) {
      return mid;
    } else if (ele < arr[mid]!) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}

console.log("Binary search:", binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));
