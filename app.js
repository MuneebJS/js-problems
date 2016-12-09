//show Current time with hours, mins and secs
var date = new Date(); 
var getday = date.getDay();
var hours = date.getHours();
var mins = date.getMinutes();
var secs = date.getSeconds();
var Pm;
var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
document.write("Today is : " + day[getday] + "<br>"); 

function pm() {
    hours = (hours >= 12) ? Pm = " PM " : Pm = " AM ";
    return Pm;
}
document.write("Current time is : " + hours + " " + pm() + " : " + mins + " : " + secs);

//get value from user and then divide and multiply it
var firstInput = parseInt(document.getElementById('first').value, 10);
var secondInput = parseInt(document.getElementById('second').value, 10);
var divideBtn = document.getElementById('divide');
var multiplyBtn = document.getElementById('multiply');
divideBtn.onclick = function divideValue() {
    var firstInput = parseInt(document.getElementById('first').value, 10);
    var secondInput = parseInt(document.getElementById('second').value, 10);
    document.write(firstInput / secondInput);
}
multiplyBtn.onclick = function multiplyValue() {
    var firstInput = parseInt(document.getElementById('first').value, 10);
    var secondInput = parseInt(document.getElementById('second').value, 10);
    document.write(firstInput * secondInput);
}



