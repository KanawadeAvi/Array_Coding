//leap year

//using function

function leapYear(){
    return(year%4===0&&year%100!==0||year%400===0)
}

var year=2023
console.log(leapYear(year))
;;
//using if else

if(year%4===0&&year%100!==0||year%400===0){
    console .log(year,'is leap year')
}else{
    console.log(year,' is not leap year')
}

