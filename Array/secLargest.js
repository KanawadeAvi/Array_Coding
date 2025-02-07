function secLargest(arr) {
    let max1 = -Infinity, max2 = -Infinity;

    for (let num of arr) {
        if (num > max1) {
            max2 = max1;
            max1 = num;
        } else if (num > max2 && num < max1) {
            max2 = num;
        }
    }

    return max2 === -Infinity ? "No second largest element" : max2; //turnary operator
}

var array=[10,10,50,69,76]
console.log(secLargest(array)); 