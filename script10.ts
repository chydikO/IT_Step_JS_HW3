//Task 10
const hourStart = +prompt("Enter start hours");
const minuteStart = +prompt("Enter start minute");
const secondsStart = +prompt("Enter start secundes");
const hourEnd = +prompt("Enter end hours");
const minuteEnd = +prompt("Enter end minute");
const secondsEnd = +prompt("Enter end secundes");


console.log(differenceBetweenDate(hourStart,minuteStart,secondsStart,hourEnd,minuteEnd,secondsEnd));

function inverter(time0) {
    let hour1;
    let minute1;
    let seconds1;

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
    if ( seconds1 === 0){
        seconds1 = "00";
    }
    alert(parseInt(hour1) + " : " + parseInt(minute1) + " : " + parseInt(seconds1))
}

function converter(hour2,minute2,seconds2){
    return seconds2 + (minute2 * 60) + (hour2 * 60 * 60);
}

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