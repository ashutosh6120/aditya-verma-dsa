// Bi-Tonic array (means find maximum element)
// arr: [1, 3, 8, 12, 4, 2]
// op: 12
// Bi-tonic -> monotonically increasing and then monotonically decreasing
// NOTE: There will be only one PEAK ELEMENT!!!!

function findMaximumInBiTonicArray(arr: number[]) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    // if mid element is smaller than the next element, we are on the increasing side of the bi-tonic array
    // so the peak element must be on the right side
    if (arr[mid]! < arr[mid + 1]!) {
      start = mid + 1;
    }

    // if mid element is greater than the next element, we are on the decreasing side
    // so the peak element is at mid or on the left side
    else {
      end = mid - 1;
    }
  }

  // when the loop ends, start will point to the peak element
  return arr[start];
}

console.log(
  "Maximum element in bi-tonic array is: ",
  findMaximumInBiTonicArray([1, 3, 8, 12, 4, 2]),
);
