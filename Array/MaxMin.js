

function max(arr){
    let max=arr[0]
    for(let num of arr ){
        if(num > max){      // for min <
            max=num
        }
    }
    return max
}


var array=[32,12,32,43,44]
console.log(max(array))





// using inbult methods
  
  console.log(Math.max(...array) )  /// use of spread operator
  console.log(Math.min(...array) )
  