 //using functions logic
 
 
 
 function revArray(arr){
    let array=[];
     for(let i=arr.length-1; i >=0;i--){
        array.push(arr[i]);
     }
     return array;
 }

 var numbers=[12,43,28,98];
 console.log(revArray(numbers))




//using inbult method
const arr=[12,76,'jhdw',863,'bkc']
console.log(arr.reverse())