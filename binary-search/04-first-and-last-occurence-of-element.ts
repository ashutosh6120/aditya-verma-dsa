// arr: 2, 4, 10, 10, 10, 18, 20
// ele: 10
// op: first occurrence -> 2
//     last occurrence  -> 4

function firstAndLastOccurrenceOfElement(arr: number[], ele: number): number[] {
  let start = 0;
  let end = arr.length - 1;
  let res = -1;

  // First occurrence
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

  const firstOccurrence = res;

  // Reset values for second binary search
  start = 0;
  end = arr.length - 1;
  res = -1;

  // Last occurrence
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

  const lastOccurrence = res;

  return [firstOccurrence, lastOccurrence];
}

console.log(
  "First and Last Occurrence:",
  firstAndLastOccurrenceOfElement([2, 4, 10, 10, 10, 18, 20], 10),
);
