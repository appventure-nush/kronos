// https://www.w3schools.com/jsref/jsref_getday.asp

const date = new Date();
const selDate = new Date();
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const daylist = document.getElementById('dayList'); // da li??????????
const monthDisplay = document.getElementById('monthDisplay');
const yearDisplay = document.getElementById('yearDisplay');
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let getMFWD = (d) => { // gets the weekday of the first day of the month
  rval = new Date(d);
  rval.setDate(1);
  return rval.getDay();
};

function organizeCalendar() {
  for (let i = 0; i < getMFWD(selDate); i++) {
    daylist.innerHTML += `<li></li>`;
  }
  for (let j = 1; j <= getDaysInMonth(selDate); j++) {
    daylist.innerHTML += `<li>${j}</li>`;
  }
  // inserting the month
  monthDisplay.innerHTML = months[selDate.getMonth()];
  yearDisplay.innerHTML = selDate.getFullYear();
}

function getDaysInMonth(date) {
    // get the month and year from the date
    const month = date.getMonth();
    const year = date.getFullYear();
  
    // check for the number of days in the month
    switch (month) {
      case 0:  // January
      case 2:  // March
      case 4:  // May
      case 6:  // July
      case 7:  // August
      case 9:  // October
      case 11: // December
        return 31;
      case 3:  // April
      case 5:  // June
      case 8:  // September
      case 10: // November
        return 30;
      case 1:  // February
        // check for leap year
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
          return 29;
        } else {
          return 28;
        }
    }
}

function nextMonth(d) {
  if (d.getMonth === 11) {
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

function calendarNextMonth(e) {
  nextMonth(selDate);
  daylist.innerHTML = ``;
  organizeCalendar();
}

function calendarPrevMonth(e) {
  prevMonth(selDate);
  daylist.innerHTML = ``;
  organizeCalendar(); 
}

window.onload = function() {
  console.log("shooty");
  for(let i = 0; i < getMFWD(date);i++){
    daylist.innerHTML += `<li></li>`; // da
  }
  organizeCalendar();
  // monthDisplay.innerText = months;
}