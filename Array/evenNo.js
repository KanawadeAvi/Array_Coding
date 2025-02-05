//using inbult methods

var arr=[10,23,443,43,65,43,12,20,50]
const even=arr.filter((num)=>num%2===0)
console.log(even)


//// using logic

const numbers=[12,13,15,78,31 ,36]
let Even=[];
for(let i=0;i<numbers.length;i++){
    if(numbers[i]%2===0){                //for odd numbers[i]%2!==0
        Even.push(numbers[i])
    }
}
console.log(Even)