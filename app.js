const target_date = new Date("nov 1,2022").getTime();

console.log(target_date)


let time_count = setInterval(() => {
    
var current_date = new Date().getTime()
var distance = target_date - current_date;

var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.querySelector(".day").textContent = days;
document.querySelector(".hours").textContent = hours;
document.querySelector(".minutes").textContent = minutes;
document.querySelector(".seconds").textContent = seconds;


}, 1000);