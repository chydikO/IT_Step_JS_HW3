"use strict";
//Task 1
const num1 = +prompt("Enter the first number: ");
const num2 = +prompt("Enter the second number: ");
compareTwoNumber(num1, num2);
function compareTwoNumber(num1, num2){
    if (num1 < num2){
        alert('-1');
    } else if (num1 == num2){
        alert('0');
    } else alert('1');
}

//Task 2
const numForFactorial = +prompt("Enter the number for factorial: ");
function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
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
console.log(side2)
console.log((side2 ? side1 : side2));
if (side2 === "") {
    side2 = side1;
}
areaOfRectangle(side1, side2);
function areaOfRectangle(param1, param2){
    return (param1 * param2);
}
alert(`Side1 = ${side1} Side2 = ${side2} Area is ${areaOfRectangle(side1, side2)}`);

//Task 5
var n = prompt("Enter number: ")
perfect(n);
function perfect(n){
    let sum = 0;
    for(let i=1;i<=n;i++){
        if(n%i==0){
            sum +=i;
        }
    }
    if(sum==2*n){
        alert("The number "+n+" is perfect")
    }else alert("The number "+n+" is not perfect")
}

//Task 6
var start = +prompt("Enter the first number: ")
var end = +prompt("Enter the second number: ")
searcher(start,end)
function searcher(start,end){
    for(let j=start;j<=end;j++){
        (perfect(j))
    }
}

//Task 7
var hour = prompt("Enter hours")
var minute = prompt("Enter minute")
var secunde = prompt("Enter secundes")
builder(hour,minute,secunde);
function builder(hour,minute,secunde){
    if(hour>=0||hour<=24||minute>=0||minute<=59||secunde>=0||secunde<=59){
        if(hour==""){
            hour="00";
        }
        if(minute==""){
            minute="00";
        }
        if(secunde== ""){
            secunde="00";
        }
        alert(hour+" : "+minute+" : "+ secunde)
    }
    else alert("Time was entered not correct")
}

//Task 8
var hour2 = +prompt("Enter hours")
var minute2 = +prompt("Enter minute")
var secunde2 = +prompt("Enter secundes")
converter(hour2,minute2,secunde2);
function converter(hour2,minute2,secunde2){
    return secunde2+(minute2*60)+(hour2*60*60);
}


//Task 9
var hour1 = +prompt("Enter hours");
var minute1 = +prompt("Enter minute");
var secunde1 = +prompt("Enter secundes");
var time0 = converter(hour1,minute1,secunde1);
inverter(time0);

function inverter(time0){
    if(time0>=3600){
        hour1 = time0/3600
        time0 = time0%3600
        if((hour1)>23){
            if((hour1)==24){
                hour1="00";
            }else{hour1=hour1%24}
        }
    }
    if(time0>=60){
        minute1=time0/60;
        secunde1=time0%60;
    }else{minute1='00'; secunde1 = time0;}
    if(secunde1==0){
        secunde1="00";
    }
    alert(parseInt(hour1)+" : "+parseInt(minute1)+" : "+parseInt(secunde1))
}
//Task 10
var hourStart = +prompt("Enter start hours")
var minuteStart = +prompt("Enter start minute")
var secundeStart = +prompt("Enter start secundes")
var hourEnd = +prompt("Enter end hours")
var minuteEnd = +prompt("Enter end minute")
var secundeEnd = +prompt("Enter end secundes")
var time = 0;
var time1 = 0;
var time2 = 0;
dataConcertor(hourStart,minuteStart,secundeStart,hourEnd,minuteEnd,secundeEnd);
function dataConcertor(hourStart,minuteStart,secundeStart,hourEnd,minuteEnd,secundeEnd){
    time1 = converter(hourStart,minuteStart,secundeStart)
    time2 = converter(hourEnd,minuteEnd,secundeEnd)
    if(time1>=time2){time = time1 - time2;}
    else {time = time2 - time1;}
    inverter(time)
}