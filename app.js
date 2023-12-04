let enterDate = document.getElementById("date")// store and access user input date 
enterDate.max = new Date().toISOString().split("T")[0]; // set limit of the calendar to only select today date and previous Dates.
let age = document.getElementById("age")
age.style.visibility = ("hidden")

function calcAge() {

    // user input date 

    let enteryear = new Date(enterDate.value)

    let inputYear = enteryear.getFullYear()
    let inputMonth = enteryear.getMonth() + 1 // add 1 to month because the month start in js with Zero(0)
    let inputDate = enteryear.getDate()

    // Today Date

    let today = new Date()
    let todayYear = today.getFullYear()
    let todayMonth = today.getMonth() + 1 // add 1 to month because the month start in js with Zero(0)
    let todayDate = today.getDate()


    let ageYear, ageMonth, ageDay

    // Year diffrence between the current year and birth year 

    ageYear = todayYear - inputYear

    // Month  diffrence between the current Month and birth Month 
    if (todayMonth >= inputMonth) {

        ageMonth = todayMonth - inputMonth
    }
    else {
        todayYear--
        ageMonth = 12 + todayMonth - inputMonth
    }

    // Day diffrence between the current day and birth day 

    if (todayDate >= inputDate) {
        ageDay = todayDate - inputDate

    }
    else {
        ageMonth--
        todayDate = (monthsDay(inputYear, inputMonth) + todayDate )- inputDate

    }

    if (ageMonth < 0) {
        ageMonth = 11;
        ageYear--
    }

    function monthsDay(Year, Month) {

        return new Date(Year, Month, 0).getDate()
    }

    // Display the age of the user after calculation

    age.style.visibility = ("visible")

    age.innerHTML = `Your are ${ageYear} years , ${ageMonth} months and ${ageDay} days old...`



}
