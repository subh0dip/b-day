// Countdown Timer
const birthdayDate = new Date('2024-10-21T00:00:00'); // Bipasha's birthday date
const countdown = setInterval(() => {
    const now = new Date();
    const distance = birthdayDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    // Update only the days display
    document.getElementById('days').innerText = days;

    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById('countdown-timer').innerHTML = "Birthday has arrived!";
    }
}, 1000);
