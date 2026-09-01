// arr: 1,2,3,4,8,10,10,12,19
// ele: 5
// output/answer: 4

// if element is present in the array then return that element
// if not present -- ????

// floor of 5 = greatest element smaller than 5
// choices are 1,2,3,4 - among these the greatest is 4, so return 4 or 4 is the answer

function floorOfAnElementInSortedArray(arr: number[], ele: number) {
  let start = 0;
  let end = arr.length - 1;
  let res = -1;

  while (start <= end) {
    const mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] == ele) {
      return arr[mid];
    }
    if (arr[mid]! < ele) {
      res = arr[mid]!;
      start = mid + 1;
    } else if (arr[mid]! > ele) {
      end = mid - 1;
    }
  }
  return res;
}

console.log(
  "Floor of element in sorted array",
  floorOfAnElementInSortedArray([1, 2, 3, 4, 8, 10, 10, 12, 19], 5),
);
