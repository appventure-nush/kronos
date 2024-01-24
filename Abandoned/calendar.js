//https://www.w3schools.com/jsref/jsref_getday.asp
const date = new Date();
const selDate = new Date();
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const daylist = document.getElementById('dayList');
const monthDisplay = document.getElementById('monthDisplay')
const yearDisplay = document.getElementById('yearDisplay')
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const days = document.getElementById('days')

let getMFWD = (d) =>{ //gets the weekday of the first day of the month
    rval = new Date(d)
    rval.setDate(1)
    return rval.getDay()
}
function organizeCalendar(){
  for(let i = 0; i < getMFWD(selDate);i++){
    daylist.innerHTML += (`<li></li>`)
    
  }
  for(let j = 1; j <= getDaysInMonth(selDate);j++){
      // alert(j)
      daylist.innerHTML +=(`<li>${j}</li>`);
  }
  //inserting the month
  monthDisplay.innerHTML = months[selDate.getMonth()]
  yearDisplay.innerHTML = selDate.getFullYear();
}
function getDaysInMonth(date) { // Get the year and month from the Date object
  var year = date.getFullYear();
  var month = date.getMonth() + 1; // Month is 0-indexed, so add 1

  // Calculate the number of days in the month
  return new Date(year, month, 0).getDate();
}


function nextMonth(d){
  if (d.getMonth == 11){
    d.setMonth(0);
    d.setYear(d.getYear() + 1);
  }
  else{
    d.setMonth(d.getMonth() + 1)
  }
}
function prevMonth(d){
  if (d.getMonth == 0){
    d.setMonth(11);
    d.setYear(d.getYear() - 1);
    console.log(d.getFullYear)
  }
  else{
    d.setMonth(d.getMonth() - 1)
  }
}

function calendarNextMonth(e){
  console.log("clicked");
  nextMonth(selDate);
  daylist.innerHTML = ``;
  organizeCalendar();
}
function calendarPrevMonth(e){
  console.log("clicked");
  prevMonth(selDate);
  daylist.innerHTML = ``;
  organizeCalendar(); 
}


window.onload = function(){
  console.log('shooty')
    for(let i = 0; i < getMFWD(date);i++){
        daylist.innerHTML += (`<li></li>`)
        
    }
    organizeCalendar();
    // monthDisplay.innerText = months
}



