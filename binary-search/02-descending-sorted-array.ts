// arr: 20 17 15 14 13 12 10 9 8 4
// ele: 4

function descendingBinarySearch(arr: number[], ele: number) {
  let start = 0;
  let end = arr.length - 1;
  let mid = 0;
  while (start <= end) {
    mid = Math.floor(start + (end - start) / 2);
    if (ele == arr[mid]!) {
      return mid;
    } else if (ele < arr[mid]!) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}

console.log(
  "Descending binary search",
  descendingBinarySearch([20, 17, 15, 14, 13, 12, 10, 9, 8, 4], 4),
);
