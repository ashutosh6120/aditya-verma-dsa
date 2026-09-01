// binary search on answer
// sorted -> BS always
// unsorted -> if arr is unsorted then we can still apply BS

// NOTE: BS can be applied on any function that is monotonically increasing or decreasing

// arr: [5, 10, 20, 15]
// find index of peak element
// op: 2
// notice the array is unsorted here

// PEAK: an element is considered a peak ele if it's value is greater than beside the left and right values
// if mid, then check (mid-1) and (mid+1)

// arr: 10, 20, 15, 2, 23, 90, 67
// here there are 2 peak elements at index -->1 , 5 we can return any one

// arr: 10, 20, 30, 40, 50 ---> peak ele: 50
// arr: 50, 40, 30, 20, 10 ---> peak ele: 50
// here we will have only one comparison for start and end

// (arr[mid] > arr[mid-1]) && (arr[mid]>arr[mid+1])
// once you find mid, we need to know which way to traverse left or right
// 5, 10, 20, 15 here 10 is the mid and if we compare with its neighbors which is 5 and 20.
//  Left side is not promising, as 5 < 10 so 5 cannot be peak element.
// 10 < 20 promising to check the right side
// if mid-1 > mid then left side check
// if mid+1 > mid then right side check

function peakElement(arr: number[]) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (mid > 0 && mid < arr.length - 1) {
      if (arr[mid]! > arr[mid - 1]! && arr[mid]! > arr[mid + 1]!) {
        return mid;
      } else if (arr[mid - 1]! > arr[mid]!) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    // edge case: mid is at the first element there is no element on the left side of mid
    // so we only compare arr[0] with arr[1]
    // if arr[0] > arr[1], then arr[0] is a peak
    // otherwise arr[1] is a peak
    else if (mid == 0) {
      if (arr[0]! > arr[1]!) {
        return 0;
      } else {
        return 1;
      }
    }
    // edge case: mid is at the last element there is no element on the right side of mid
    // so we only compare the last element with the previous element
    // if the last element is greater, then it is a peak
    // otherwise the previous element is a peak
    else if (mid == arr.length - 1) {
      if (arr[arr.length - 1]! > arr[arr.length - 2]!) {
        return arr.length - 1;
      } else {
        return arr.length - 2;
      }
    }
  }
}

console.log("Peak element is: ", peakElement([5, 10, 20, 15]));
console.log("Peak element is: ", peakElement([10, 20, 15, 2, 23, 90, 67]));
