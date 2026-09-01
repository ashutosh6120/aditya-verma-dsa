// arr: 00000000000000001111111111...............♾️

// This problem is variation of 2 problems
// first occurrence of an element and Infinite sorted array

function firstOccurrence(
  arr: number[],
  ele: number,
  start: number,
  end: number,
): number {
  let res = -1;

  while (start <= end) {
    const mid = Math.floor(start + (end - start) / 2);

    if (arr[mid]! === ele) {
      res = mid;
      end = mid - 1;
    } else if (ele < arr[mid]!) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return res;
}

function firstOccurrenceInInfiniteSortedArray(
  arr: number[],
  ele: number,
): number {
  let start = 0;
  let end = 1;

  // Find the range where the element can exist
  while (ele > arr[end]!) {
    start = end;
    end = end * 2;
  }

  // Apply first occurrence binary search
  return firstOccurrence(arr, ele, start, end);
}

console.log(
  "First occurrence in infinite sorted array:",
  firstOccurrenceInInfiniteSortedArray(
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
    1,
  ),
);
