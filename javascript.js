document.addEventListener("DOMContentLoaded", function () {
    const months = [
        "January", "February", "March", "April", "May",
        "June", "July", "August", "September", "October",
        "November", "December"
    ];

    const daysOfTheWeek = [
        "Sunday", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday"
    ];

    const escapes = document.querySelector('.escapes');
    const items = document.querySelectorAll('.deadline-format h4');

    // Correct future date: April 24, 2025, at 8:00 AM
    let futureDate = new Date(2025, 3, 24, 8, 0, 0);

    //The code for making the timer accurate
    const year = futureDate.getFullYear();
    const hours = futureDate.getHours();
    const minutes = futureDate.getMinutes();
    const seconds = futureDate.getMinutes();

    let month = futureDate.getMonth();
    month = months[month];
    const date = futureDate.getDate();

    const weekday = daysOfTheWeek[futureDate.getDay()];
    
    // Had trouble with the text but all I had to do was edit this code
    escapes.textContent = `He escapes on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}${seconds} AM`;

    // Future time in ms
    const futureTime = futureDate.getTime();

    function getRemainingTime() {
        const today = new Date().getTime();
        const t = futureTime - today;

        // Values in ms
        const oneDay = 24 * 60 * 60 * 1000;
        const oneHour = 60 * 60 * 1000;
        const oneMinute = 60 * 1000;

        // Calculating all values
        let days = Math.floor(t / oneDay);
        let hours = Math.floor((t % oneDay) / oneHour);
        let minutes = Math.floor((t % oneHour) / oneMinute);
        let seconds = Math.floor((t % oneMinute) / 1000);

        // Set values array
        const values = [days, hours, minutes, seconds];

        items.forEach(function (item, index) {
            item.innerHTML = values[index];
        });

        // If the countdown is over, display message
        if (t <= 0) {
            clearInterval(countdown);
            escapes.textContent = "He is coming! Hide!";
            items.forEach(item => item.innerHTML = '0');
        }
    }

    // Initial call
    getRemainingTime();

    // Update every second
    const countdown = setInterval(getRemainingTime, 1000);
});