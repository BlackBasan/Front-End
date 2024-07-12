
const hourEl = document.querySelector("#clock li:nth-child(1)");
const secondEl = document.querySelector("#clock li:nth-child(2)");
const minuteEl = document.querySelector("#clock li:nth-child(3)");


setInterval(()=>{

    let now = new Date();
    const hour = now.getHours();
    const minutes = now.getMinutes();


    hourEl.innerHTML = hour.toString().length ===1 ? `0${hour}`: hour;
    minuteEl.innerHTML = minutes.toString().length===1 ? `0${minutes}`: minutes;

    secondEl.classList.toggle("second")

}, 1000)