
// pattern
// let n= 5;
// for(let i=0; i<=n; i++){
//     let stars=''
//     for (let j=0;j<=i;j++){
//         stars+='*'
//     }
//     console.log(stars)
// }



//parymid pattern



let p = 5;

for (let i = 1; i <= p; i++) {
    let spaces = ' '.repeat(p - i);  // Corrected 't' to 'p'
    let stars = '*'.repeat(2 * i - 1);
    console.log(spaces + stars + spaces);
}
