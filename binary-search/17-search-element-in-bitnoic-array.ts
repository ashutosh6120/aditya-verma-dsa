// Search element in Bitonic array

// arr: [1, 3, 8, 12, 4, 2]
// ele: 4
// op: 4 (we are returning the index here not element)

// same as peak element but there's more. from peak element logic get the index first
// 1, 3, 8 --> sorted in ascending  and 12, 4, 2 --> sorted in descending
// apply ascending binary search on 1,3,8 --> BS(arr, start: 0, index -1);  this will return -1
// apply descending binary search on 12, 4, 2 --> BS(arr, index, size - 1); this will return 4
// if both returns -1 then element not found

function searchElementInBiTonicArray(arr: number[], ele: number) {
  // first find the peak element index
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    // if mid element is smaller than next element, we are on the increasing side
    // so peak will be on the right side
    if (arr[mid]! < arr[mid + 1]!) {
      start = mid + 1;
    }

    // if mid element is greater than next element, we are on the decreasing side
    // so peak will be at mid or on the left side
    else {
      end = mid - 1;
    }
  }

  // when loop ends, start will point to the peak element
  let peakIndex = start;

  // now apply ascending binary search on the left side
  // arr: [1, 3, 8, 12]
  // start: 0
  // end: peakIndex
  let ascendingSearchResult = binarySearch(arr, ele, 0, peakIndex);

  if (ascendingSearchResult !== -1) {
    return ascendingSearchResult;
  }

  // if element is not found in ascending part,
  // apply descending binary search on the right side
  // arr: [12, 4, 2]
  // start: peakIndex
  // end: arr.length - 1
  let descendingSearchResult = descendingBinarySearch(
    arr,
    ele,
    peakIndex,
    arr.length - 1,
  );

  return descendingSearchResult;
}

// General binary search

// arr: 1 2 3 4 5 6 7 8 9 10
// ele: 2
// op: return the index--> 1

function binarySearch(arr: number[], ele: number, start: number, end: number) {
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

// arr: 20 17 15 14 13 12 10 9 8 4
// ele: 4

function descendingBinarySearch(
  arr: number[],
  ele: number,
  start: number,
  end: number,
) {
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
  "Search element in Bi-tonic array:",
  searchElementInBiTonicArray([1, 3, 8, 12, 4, 2], 4),
);

console.log(
  "Search element in Bi-tonic array:",
  searchElementInBiTonicArray([1, 3, 8, 12, 4, 2], 8),
);

console.log(
  "Search element in Bi-tonic array:",
  searchElementInBiTonicArray([1, 3, 8, 12, 4, 2], 7),
);
