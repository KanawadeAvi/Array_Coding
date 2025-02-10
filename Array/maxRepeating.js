function maxRepeatating(arr){
    let count={},max=arr[0]

    for(let num of arr){
        count[num]=(count[num]||0)+1
        if(count[num]>count[max])max=num
    }
    return max
}

let array=[1,2,3,4,3,2,1,3,2,4]
console.log(maxRepeatating(array))