// arr: 1,2,3,4,8,10,10,12,19
// ele: 5
// op: 8

// ceil of 5 = smallest element which is greater than 5
// choices are 8,10,10,12,19 - among these the smallest is 8, return that as answer

function ceilOfAnElementInSortedArray(arr: number[], ele: number) {
  let start = 0;
  let end = arr.length - 1;
  let res = -1;

  while (start <= end) {
    const mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] == ele) {
      return arr[mid];
    }
    if (arr[mid]! < ele) {
      start = mid + 1;
    } else if (arr[mid]! > ele) {
      res = arr[mid]!;
      end = mid - 1;
    }
  }
  return res;
}

console.log(
  "Ceil of element in sorted array",
  ceilOfAnElementInSortedArray([1, 2, 3, 4, 8, 10, 10, 12, 19], 5),
);
