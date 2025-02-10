function palindrome(str){
    const length= str.length

    for(let i=0; i<length/2;i++){
        if(string[i]!==string[length-1-i]){
            return 'its not Palindrome'
        }
    }
    return 'its palindrome'
}

const string='akp'
console.log(palindrome(string))