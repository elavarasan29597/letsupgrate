// Get day 
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var newDate = new Date();
var todayName = days[newDate.getDay()];


// console.log(dayName);

window.onload = function() {
    CurrentDay();
    CurrentTime();
    DateWithFormat();
}

function CurrentDay() {
    document.getElementById('currentDay').innerHTML = "Today is   : " + todayName;
}


function CurrentTime() {

    var hours = newDate.getHours();
    var minutes = newDate.getMinutes();
    var sec = newDate.getSeconds();

    var amOrPm = " AM";
    if (hours > 12) {
        amOrPm = " PM";
        hours = hours % 12;
    }


    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    if (sec < 10) {
        sec = '0' + sec;
    }
    document.getElementById('currentTime').innerHTML = hours + amOrPm + " : " + minutes + " : " + sec;

}


function DateWithFormat() {
    var month = eval(newDate.getMonth()) + 1
    if (month < 10) {
        month = '0' + month;
    }

    document.getElementById('dateFormat1').innerHTML = newDate.getDate() + '/' + month + '/' + newDate.getFullYear();
    document.getElementById('dateFormat2').innerHTML = newDate.getDate() + '-' + month + '-' + newDate.getFullYear();
}