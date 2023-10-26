// Only   Sorted - Binary Search
// Order Agnostic - Order doesn't matter

//Two Pointer Algorithm
let arr = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10];

const target = 90;

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let mid;
  const isAscending = arr[start] < arr[end];

  console.log(isAscending);
  while (start <= end) {
    mid =  Math.floor((start + end) / 2);
    // 3 steps
    // 1 equal
    // large
    // small
    if (arr[mid] === target) {
      return `${target} found at index ${mid}`;
    } else if (isAscending) {
      if (arr[mid] < target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    } else {
      if (arr[mid] < target) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }

  return `Not Found`;
}

console.log(binarySearch(arr, target));
