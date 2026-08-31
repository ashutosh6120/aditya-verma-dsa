// arr: 2, 4, 10, 10, 10, 18, 20
// ele: 10
// op: 3

function firstOccurrence(arr: number[], ele: number): number {
  let start = 0;
  let end = arr.length - 1;
  let res = -1;

  while (start <= end) {
    const mid = Math.floor(start + (end - start) / 2);

    if (ele === arr[mid]!) {
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

function lastOccurrence(arr: number[], ele: number): number {
  let start = 0;
  let end = arr.length - 1;
  let res = -1;

  while (start <= end) {
    const mid = Math.floor(start + (end - start) / 2);

    if (ele === arr[mid]!) {
      res = mid;
      start = mid + 1;
    } else if (ele < arr[mid]!) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return res;
}

function countOfElementInSortedArray(arr: number[], ele: number) {
  // get first occurrence
  const first = firstOccurrence(arr, ele);

  // get last occurrence
  const last = lastOccurrence(arr, ele);

  if (first === -1) {
    return 0;
  }

  return last - first + 1;
}

console.log(
  "Count of element in sorted array: ",
  countOfElementInSortedArray([2, 4, 10, 10, 10, 18, 20], 10),
);
