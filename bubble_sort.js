let arr = [5, 3, 7, 6, 10, 9, 15, 20, 18];

function bubbleSort(arr) {
  //Ascending Order
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
}

bubbleSort(arr);

console.log(arr);
