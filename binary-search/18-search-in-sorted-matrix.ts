// arr[][]: 10 20 30 40
//          15 25 35 45
//          27 29 37 48
//          32 33 39 50
// m*n matrix elements

// ele: 29 (element is present)
// start at i = 0, j = n - 1;

// 2nd case (element not present)
// ele: 23
// Time complexity: O(m+n)

// checks to be done: (i>=0 && i<=m) && (j>=0 && j<=n)

function searchInSortedMatrix(arr: number[][], ele: number) {
  let m = arr.length;
  let n = arr[0]!.length;
  let i = 0,
    j = n - 1;
  // start from top-right corner
  while (i >= 0 && i < m && j >= 0 && j < n) {
    if (arr[i]![j]! == ele) {
      return [i, j];
    } else if (arr[i]![j]! > ele) {
      // current element is greater than ele so move left
      j--;
    } else if (arr[i]![j]! < ele) {
      // current element is smaller than ele so move down
      i++;
    }
  }
  return -1;
}

console.log(
  "search in sorted matrix is",
  searchInSortedMatrix(
    [
      [10, 20, 30, 40],
      [15, 25, 35, 45],
      [27, 29, 37, 48],
      [32, 33, 39, 50],
    ],
    29,
  ),
);

console.log(
  "search in sorted matrix is",
  searchInSortedMatrix(
    [
      [10, 20, 30, 40],
      [15, 25, 35, 45],
      [27, 29, 37, 48],
      [32, 33, 39, 50],
    ],
    23,
  ),
);
