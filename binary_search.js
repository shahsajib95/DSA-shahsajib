
// Only   Sorted - Binary Search 
// Order Agnostic - Order doesn't matter

let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const target = 90;

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let mid;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    console.log(mid);
    // 3 steps
    // 1 equal
    // large
    // small
    if (arr[mid] === target) {
      return `${target} found at index ${mid}`;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return `Not Found`;
}

console.log(binarySearch(arr, target)); 
