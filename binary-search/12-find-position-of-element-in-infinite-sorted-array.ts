// arr: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0........ ♾️]

// NOTE: Element is always found between start and end

// since infinite we don't know the end or size is known
// so we assume start = 0, end = 1 and check if the element is greater than arr[end] then we set start = end; and end = end * 2;
// so we jump every-time by 2.
// and then apply normal binary search as we get start and end

// arr[]: [1,2,3,4,5,6,7,8,9,10,11,.............♾️]
// ele: 7

/* start = 0;
end = 1;
while(ele > arr[end]) {
    start = end;
    end = end * 2;
}
BinarySearch(arr,start, end); */

function binarySearch(
  arr: number[],
  ele: number,
  start: number,
  end: number,
): number {
  while (start <= end) {
    const mid = Math.floor(start + (end - start) / 2);

    if (arr[mid]! === ele) {
      return mid;
    } else if (ele < arr[mid]!) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return -1;
}

function searchInInfiniteSortedArray(arr: number[], ele: number): number {
  let start = 0;
  let end = 1;

  while (ele > arr[end]!) {
    start = end;
    end = end * 2;
  }

  return binarySearch(arr, ele, start, end);
}

console.log(
  "Search in infinite sorted array:",
  searchInInfiniteSortedArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 7),
);
