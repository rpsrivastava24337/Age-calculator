let userInput = document.getElementById("date")// store and access user input date 
userInput.max = new Date().toISOString().split("T")[0]; // set limit of the calendar to only select today date and previous Dates.
let age = document.getElementById("age")
age.style.visibility = ("hidden")

function calcAge() {

    // user input date 

    let birthDate = new Date(userInput.value)

    let yearOfBirth = birthDate.getFullYear()
    let monthOfBirth = birthDate.getMonth() + 1 // add 1 to month because the month start in js with Zero(0)
    let dateOfBirth = birthDate.getDate()

    // Today Date

    let today = new Date()
    let y2 = today.getFullYear()
    let currentMonth = today.getMonth() + 1 // add 1 to month because the month start in js with Zero(0)
    let currentDate = today.getDate()


    let y3, m3, ageDate

    // Year diffrence between the current year and birth year 

    y3 = y2 - yearOfBirth

    // Month  diffrence between the current Month and birth Month 
    if (currentMonth >= monthOfBirth) {

        m3 = currentMonth - monthOfBirth
    }
    else {
        y3-- 
        m3 = 12 + currentMonth - monthOfBirth
    }

    // Day diffrence between the current day and birth day 

    if (currentDate >= dateOfBirth) {
        ageDate = currentDate - dateOfBirth

    }
    else {
        m3--
        ageDate = monthsDay(yearOfBirth, monthOfBirth) + currentDate - dateOfBirth

    }

    if (m3 < 0) {
        m3 = 11;
        y3--
    }

    function monthsDay(Year, Month) {

        return new Date(Year, Month, 0).getDate()
    }

    // Display the age of the user after calculation

    age.style.visibility = ("visible")

    age.innerHTML = `Your are ${y3} years , ${m3} months and ${ageDate} days old...`



}
