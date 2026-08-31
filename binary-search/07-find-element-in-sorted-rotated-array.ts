// arr: 11, 12, 15, 18, 2, 5, 6, 8
// The given element is: 15

// first find how many times rotation
// # of rotation --> index of minimum element

// store the value of index element, then apply
// BS(arr, target, start, index -1) and return value
// BS(arr, target, index, size - 1) and return value
// if both returns -1, then element not found
// in above case example one will return 2

// Store the index of the minimum element.
// Then apply binary search on:
// 1. arr[0 ... minIndex - 1]
// 2. arr[minIndex ... size - 1]
//
// If both return -1, element is not found.

function findMinimumIndex(arr: number[]): number {
  let start = 0;
  let end = arr.length - 1;
  const n = arr.length;

  while (start <= end) {
    // Current search space is already sorted
    if (arr[start]! <= arr[end]!) {
      return start;
    }

    const mid = Math.floor(start + (end - start) / 2);

    const prev = (mid + n - 1) % n;
    const next = (mid + 1) % n;

    // Found minimum element
    if (arr[mid]! <= arr[prev]! && arr[mid]! <= arr[next]!) {
      return mid;
    }

    // Left half is sorted
    if (arr[start]! <= arr[mid]!) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
}

function binarySearch(
  arr: number[],
  ele: number,
  start: number,
  end: number,
): number {
  while (start <= end) {
    const mid = Math.floor(start + (end - start) / 2);

    if (ele === arr[mid]!) {
      return mid;
    } else if (ele < arr[mid]!) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return -1;
}

function findElementInSortedRotatedArray(arr: number[], ele: number): number {
  // Find index of minimum element
  const minIndex = findMinimumIndex(arr);

  if (minIndex === -1) {
    return -1;
  }

  // Search in first sorted part
  const firstHalf = binarySearch(arr, ele, 0, minIndex - 1);

  if (firstHalf !== -1) {
    return firstHalf;
  }

  // Search in second sorted part
  return binarySearch(arr, ele, minIndex, arr.length - 1);
}

console.log(
  "Element index:",
  findElementInSortedRotatedArray([11, 12, 15, 18, 2, 5, 6, 8], 15),
);
