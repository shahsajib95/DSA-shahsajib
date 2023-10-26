//  Types of two pointer

// 1 Front and Back Pointer => Condition (i < = k) Most Cases
// 2 Fast and Slow Pointer => Hare and Tortoise => Linked List => Mid Value Find
// 3 Two Pointer in two different Array

//Reverse
const arr = [5, 7, 6, 3, 10, 1];

function reverse(arr) {
  let i = 0;
  let k = arr.length - 1;

  while (i < k) {
    let temp = arr[i];
    arr[i] = arr[k];
    arr[k] = temp;
    i++; // Increment i
    k--; // Decrement k
  }
}

reverse(arr);
console.log(arr);

//Palindrome

const string = "madam";

function palindrome(string) {
  let i = 0;
  let k = string.length - 1;
  while (i < k) {
    i++;
    k--;
    if (string[i] !== string[k]) {
      return "Not Palindrome";
    }
    return "Palindrome";
  }
}

console.log(palindrome(string));
