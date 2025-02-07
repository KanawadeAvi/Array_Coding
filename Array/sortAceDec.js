function sortAscending(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {   // < for decending order
                // Swap values
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

// Example:
let arr = [5, 2, 9, 1, 7];
console.log("Ascending:", sortAscending(arr));


//using inbult Methods

console.log(arr.sort())  // by  default Ascending
console.log(arr.sort((a,b) => b-a))  // for Descending