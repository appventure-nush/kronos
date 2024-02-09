//https://www.w3schools.com/jsref/jsref_getday.asp

let selDate = new Date();
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthDisplay = document.getElementById('monthDisplay')
const yearDisplay = document.getElementById('yearDisplay')
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// let monthlist = []
const days = document.getElementById('days')

let getMFWD = (d) =>{ //gets the weekday of the first day of the month
    let rval = new Date(d)
    rval.setDate(1)
    return rval.getDay()
}

function organizeCalendar(date){ //put everything into tables
  let weekcounter = getMFWD(date);
  let row = days.insertRow()
  row.classList.add('dayrow');
  let cell;
  let prev = new Date(date);
  prevMonth(prev)
  let minus = getDaysInMonth(prev) - getMFWD(date)


  for (let i = 0; i < getMFWD(date); i++){    
    minus++;
    cell = row.insertCell()
    cell.innerHTML = minus;
    cell.classList.add('calDay','calMinusDay')
  } 
  for(let d = 1; d <= getDaysInMonth(date);     d++) /*<-- My grade in CS (real)*/{
    if (weekcounter == 7) {
      row = days.insertRow()
      row.classList.add('dayrow');
      weekcounter = 0
    }
    weekcounter++;
    cell = row.insertCell()
    cell.innerHTML = d
    cell.classList.add('calDay')
  }
  for(let a = 1; a <= 7 - weekcounter; a++){
    cell = row.insertCell()
    cell.innerHTML = a;
    cell.classList.add('calDay','calPlusDay')//amagus
    
  }
  monthDisplay.innerHTML = months[selDate.getMonth()]
  yearDisplay.innerHTML = selDate.getFullYear();
}
function clear(){ //clears the table
  let clears = days.querySelectorAll(".dayrow")
  console.log(clears)
  console.log('dog')
  clears.forEach(element => {
    element.remove()
  })
}

function createMonthList(date){ //creates a month of dates
//there is probably a better way to do this 
//there was
// I have the stupid
  
  let minus = getDaysInMonth(prevMonth(new Date(prevDate))) + 1 - getMFWD(date)
  

  for (let i = 0; i < getMFWD(date); i++){
    monthlist.push(minus)
    minus++;  
  }
  
  for (let i = 1; i <= getDaysInMonth(date); i++){
    monthlist.push(i)
  }
  
  return monthlist;
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
  else {
    d.setMonth(d.getMonth() + 1);
  }
}

function prevMonth(d) {
  if (d.getMonth === 0) {
    d.setMonth(11);
    d.setYear(d.getYear() - 1);
    // console.log(d.getFullYear);
  }
  else {
    d.setMonth(d.getMonth() - 1);
  }
}
// function nextYear(d){
//   d.setYear(d.getYear() + 1)

// }
// function prevYear(d){
//   d.setYear(d.getYear() - 1)
// }
function calendarNextMonth(e){// on click next month
  nextMonth(selDate);
  clear();
  organizeCalendar(selDate);
}
function calendarPrevMonth(e){ //on click prev month
  prevMonth(selDate);

  clear();
  organizeCalendar(selDate); 
}
function calendarToday(e){
  selDate = new Date()//Today
  clear()
  organizeCalendar(selDate)
}
window.onload = function() {

    
    // organizeCalendar();
  organizeCalendar(selDate)
    // monthDisplay.innerText = months
}




