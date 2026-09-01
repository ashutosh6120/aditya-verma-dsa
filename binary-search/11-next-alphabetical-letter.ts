// [a, c, f, h]
// key: f
// op: h

// NOTE: even if key is present return next letter

// Same as Ceil of element in sorted order just tiny variation

function nextAlphabeticalLetter(arr: string[], ele: string) {
  let start = 0;
  let end = arr.length - 1;
  let res = "#";
  while (start <= end) {
    const mid = Math.floor(start + (end - start) / 2);

    if (arr[mid]! === ele) {
      start = mid + 1;
    } else if (arr[mid]! < ele) {
      // key is greater
      start = mid + 1;
    } else {
      // key is smaller
      res = arr[mid]!;
      end = mid - 1;
    }
  }

  return res;
}

console.log(
  "Next alphabetical letter",
  nextAlphabeticalLetter(["a", "c", "f", "h"], "f"),
);
