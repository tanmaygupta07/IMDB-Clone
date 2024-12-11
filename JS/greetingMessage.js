var myDate = new Date();
var hrs = myDate.getHours();

var greeting;

if (hrs < 12) {
    greeting = "⛅ Good Morning";
}
else if (hrs >= 12 && hrs <= 17) {
    greeting = "🌇 Good Afternoon";
}
else if (hrs >= 17 && hrs <= 24) {
    greeting = "🎴 Good Evening";
}

document.querySelector('.greeting-message').innerHTML = '<b>' + greeting + '</b>';