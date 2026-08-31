// arr: 2, 5, 6, 8, 11, 12, 15, 18. --> un-rotated
// arr: 11, 12, 15, 18, 2, 5, 6, 8  --> rotated

// # of times array rotated = index of minimum element

// mid -> both of neighbors to be small so that will be min ele
// compare arr[mid-1] < arr[mid] < arr[mid+1]

// Note-> min ele in unsorted array always

// prev --> (mid + N - 1) % N;
// next --> (mid + 1) % N;
// Modulo N bcz, should not go out of bound fpr last element or first element

function howManyTimesArraySorted(arr: number[]): number {
  let start = 0;
  let end = arr.length - 1;
  const n = arr.length;

  while (start <= end) {
    // If current search space is already sorted,
    // start is the minimum element.
    if (arr[start]! <= arr[end]!) {
      return start;
    }

    const mid = Math.floor(start + (end - start) / 2);

    const prev = (mid + n - 1) % n;
    const next = (mid + 1) % n;

    // arr[mid] is smaller than both neighbors
    if (arr[mid]! <= arr[prev]! && arr[mid]! <= arr[next]!) {
      return mid;
    }

    // Left half is sorted, so minimum is on the right
    if (arr[start]! <= arr[mid]!) {
      start = mid + 1;
    }
    // Otherwise, minimum is on the left
    else {
      end = mid - 1;
    }
  }

  return -1;
}

console.log(
  "How many times array sorted: ",
  howManyTimesArraySorted([11, 12, 15, 18, 2, 5, 6, 8]),
);
