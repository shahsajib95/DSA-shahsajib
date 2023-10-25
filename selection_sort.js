//Selection Sort Order
let arr = [5, 3, 7, 6, 10, 9, 15, 20, 18];

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i; j < arr.length; j++) {
      // find minimum value
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    //swap
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
}

selectionSort(arr);

console.log(arr);
