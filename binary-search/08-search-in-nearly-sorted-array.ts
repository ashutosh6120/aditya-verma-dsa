// arr: 5, 10, 30, 20, 40

// nearly sorted array means -- any element if it is supposed to be at iᵗʰ index, it can be at i-1 or i+1 index

// nearly sorted arr = ith  -- i-1
//                          -- i
//                          -- i+1

// check for if ele==arr[mid] || ele==arr[mid-1] || ele==arr[mid+1]

// edge case-- if mid is at start or end, then it becomes -1 or segmentation fault or out of bound case
// so check mid-1>=start and  mid+1<=end

function searchInNearlySortedArray(arr: number[], ele: number) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (ele == arr[mid]!) {
      return mid;
    }

    if (mid - 1 >= start && arr[mid - 1] == ele) {
      return mid - 1;
    }

    if (mid + 1 <= end && arr[mid + 1] == ele) {
      return mid + 1;
    }

    if (ele < arr[mid]!) {
      end = mid - 2; // note as we are checking above mid-1 so we have to add as mid-2
    } else {
      start = mid + 2;
    }
  }

  return -1;
}

console.log(
  "Search in nearly Sorted array",
  searchInNearlySortedArray([5, 10, 30, 20, 40], 20),
);
