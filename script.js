let miles = 11636073980;

const counter = document.getElementById("miles");

setInterval(() => {
    miles += 10;
    counter.textContent = miles.toLocaleString();
}, 100);