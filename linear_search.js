// Searching

// Unsorted - Linear Search
// Sorted - Binary Search 
// => Coding Test, 
// => Viva => Order agnosting binary search

let arr = [10, 20, 5, 15, 25, 45, 100]

const target = 45


function linearSearch(arr, target){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            return `${target} found at index ${i}`
        }
    }
    return 'Not Found'
}

console.log(linearSearch(arr, target))