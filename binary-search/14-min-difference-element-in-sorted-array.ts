// arr: [4, 6, 10]
// key: 7

// 4-7, 6-7, 10-7 => 3,1,3 (take absolute)
// minimum difference
// so output will be 6 here

// 2 cases: if key is present - then normal binary search
// if key is not present - ???

// key not present case
// arr: [1,3, 8, 10, 15]
// ele: 12
// when you run the loop, at the end, 10 will be end, and 15 will be pointing toward start,
// and then take abs of this both  take abs(arr[start] - ele)  and take abs(arr[end] - ele) and return which is minimum among these two.
// here op will be 10

function minDifferenceElementInSortedArray(arr: number[], ele: number) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    // if key is present
    if (arr[mid] === ele) {
      return arr[mid];
    }

    if (ele < arr[mid]!) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  // if key not present case
  // take abs(arr[start] - ele)
  // take abs(arr[end] - ele)
  // among these two check which is min and return that

  const startDifference = Math.abs(arr[start]! - ele);
  const endDifference = Math.abs(arr[end]! - ele);

  if (startDifference < endDifference) {
    return arr[start];
  } else {
    return arr[end];
  }
}

console.log(
  "Min difference element in sorted array is (key is present here): ",
  minDifferenceElementInSortedArray([4, 6, 10], 6),
);

console.log(
  "Min difference element in sorted array is (key is not present here): ",
  minDifferenceElementInSortedArray([1, 3, 8, 10, 15], 12),
);
