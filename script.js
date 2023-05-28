"use strict";
//Task 1
const num1 = +prompt("Enter the first number: ");
const num2 = +prompt("Enter the second number: ");
compareTwoNumber(num1, num2);
function compareTwoNumber(num1, num2){
    if (num1 < num2){
        alert('-1');
    } else if (num1 === num2){
        alert('0');
    } else alert('1');
}

//Task 2
const numForFactorial = +prompt("Enter the number for factorial: ");
function factorial(n) {
    return (n !== 1) ? n * factorial(n - 1) : 1;
}
alert(`Factorial ${numForFactorial} = ${factorial(numForFactorial)}`);

//Task 3
const number1 = +prompt("Enter the first number: ");
const number2 = +prompt("Enter the second number: ");
const number3 = +prompt("Enter the third number: ");
mergeThreeNumber(number1, number2, number3);
function mergeThreeNumber(n1, n2, n3){
    return (n1 * 100 + n2 * 10 + n3);
}
alert(`Merge three numbers: ${number1}  ${number2} ${number3} = ${mergeThreeNumber(number1, number2, number3)}`);

//Task 4
const side1 = +prompt("Enter the first side: ");
let side2 = prompt("Enter the second side: ");

if (side2 === "") {
    side2 = side1;
}
areaOfRectangle(side1, side2);
function areaOfRectangle(param1, param2){
    return (param1 * param2);
}
alert(`Side1 = ${side1} Side2 = ${side2} Area is ${areaOfRectangle(side1, side2)}`);

//Task 5
const num = +prompt("Enter number: ");
perfect(num);

function perfect(num) {
    let sum = 0;
    for(let i = 1; i <= num; i++) {
        if(num % i === 0) {
            sum +=i;
        }
    }
    if(sum === 2 * num) {
        alert("The number " + num +" is perfect")
    } else alert("The number " + num + " is not perfect")
}

//Task 6
const start = +prompt("Enter the first number: ");
const end = +prompt("Enter the second number: ");
searcher(start,end)
function searcher(start,end){
    for(let j=start;j<=end;j++){
        (perfect(j))
    }
}

//Task 7
const hour = prompt("Enter hours");
const minute = prompt("Enter minute");
const seconds = prompt("Enter secundes");
builder(hour,minute,seconds);
function builder(hour,minute,seconds){
    if ( hour >= 0 || hour <= 24 || minute >= 0 || minute <= 59 || seconds >= 0 || seconds <= 59){
        if (hour === "") {
            hour="00";
        }
        if (minute === "") {
            minute="00";
        }
        if (seconds === "") {
            seconds = "00";
        }
        alert(hour+" : " + minute + " : " + seconds)
    }
    else alert("Time was entered not correct")
}

//Task 8
const hour2 = +prompt("Enter hours");
const minute2 = +prompt("Enter minute");
const seconds2 = +prompt("Enter secundes");

converter(hour2,minute2,seconds2);
function converter(hour2,minute2,seconds2){
    return seconds2 + (minute2 * 60) + (hour2 * 60 * 60);
}


//Task 9
let hour1 = +prompt("Enter hours");
let minute1 = +prompt("Enter minute");
let seconds1 = +prompt("Enter seconds");
const time0 = converter(hour1, minute1, seconds1);
inverter(time0);

function inverter(time0){
    if (time0 >= 3600) {
        hour1 = time0 / 3600
        time0 = time0 % 3600
        if((hour1) > 23) {
            if((hour1) === 24) {
                hour1 = "00";
            }else{hour1=hour1%24}
        }
    }
    if (time0 >= 60) {
        minute1 = time0 / 60;
        seconds1 = time0 % 60;
    } else {
        minute1 ='00';
        seconds1 = time0;
    }
    if (seconds1 === 0){
        seconds1 = "00";
    }
    alert(parseInt(hour1) + " : " + parseInt(minute1) + " : " + parseInt(seconds1))
}
//Task 10
const hourStart = +prompt("Enter start hours");
const minuteStart = +prompt("Enter start minute");
const secondsStart = +prompt("Enter start secundes");
const hourEnd = +prompt("Enter end hours");
const minuteEnd = +prompt("Enter end minute");
const secondsEnd = +prompt("Enter end secundes");

function differenceBetweenDate(hourStart, minuteStart, secondsStart, hourEnd, minuteEnd, secondsEnd) {
        let result;
        let time1 = converter(hourStart,minuteStart,secondsStart)
        let time2 = converter(hourEnd,minuteEnd,secondsEnd)
        if(time1 >= time2) {
            result = time1 - time2;
        } else {
            result = time2 - time1;
        }
        inverter(result)
}