var calendarBody = document.querySelector('#calendar tbody');
var currentDate = new Date();
var currentDay = currentDate.getDate();

// Adjust the month and year as needed
var year = currentDate.getFullYear();
var month = currentDate.getMonth() + 1; // Note: JavaScript months are zero-based
function generateCalendar() {
    console.log('shooty')

    // Clear existing content
    calendarBody.innerHTML = '';

    // Get the last day of the month
    var lastDay = new Date(year, month, 0).getDate();

    // Initialize variables
    var dayCounter = 1;
    var tableRow = calendarBody.insertRow();

    // Loop through the days of the month
    
    for (var i = 1; i <= lastDay; i++) {
        var tableCell = tableRow.insertCell();

        // Check if it's a new week (Sunday)
        if (i !== 1 && new Date(year, month - 1, i).getDay() === 0) {
            tableRow = calendarBody.insertRow();
            dayCounter = 1;
        }

        // Add day to the cell
        tableCell.textContent = i;

        // Highlight today's date
        if (i === currentDay) {
            tableCell.classList.add('today');
        }

        dayCounter++;
    }
}

// Call the function to generate the calendar
generateCalendar();