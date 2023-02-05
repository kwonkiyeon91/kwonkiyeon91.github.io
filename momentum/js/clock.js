const clock = document.querySelector("#clock");
const fullDate = document.querySelector("#full-date");
let dayArray = ["일", "월", "화", "수", "목", "금", "토"];

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    const year = String(date.getFullYear());
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const dates = String(date.getDate()).padStart(2, "0");
    const day = date.getDay();

    clock.innerText = `${hours}:${minutes}:${seconds}`;
    fullDate.innerText = `${year}년 ${month}월 ${dates}일 ${dayArray[day]}요일`;
}

getClock();
setInterval(getClock, 1000);