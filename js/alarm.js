//===========================Alarm=====================
let textDayName = document.getElementById("day-name");
let textDayNum = document.getElementById("day-num");
let textMonth = document.getElementById("month");
let textYear = document.getElementById("year");
let textHour = document.getElementById("hour");
let textMinute = document.getElementById("minute");
let textSecond = document.getElementById("second");
let textPeriod = document.getElementById("period");
let alarmTime,
  isRinging = false;
let ringTone = new Audio("../media/morning_flower.mp3");
function showTime() {
  let now = new Date(),
    dayName = now.getDay(),
    dayNum = now.getDate(),
    month = now.getMonth(),
    year = now.getFullYear(),
    hour = now.getHours(),
    minute = now.getMinutes(),
    second = now.getSeconds(),
    period = "AM";
  if (hour == 0) {
    hour = 12;
  } else if (hour > 12) {
    hour = hour - 12;
    period = "PM";
  }
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  if (second < 10) {
    second = "0" + second;
  }
  let idArray = [textDayName, textMonth, textDayNum, textYear, textHour, textMinute, textSecond, textPeriod],
    week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    monthArray = ["January", "February", "march", "April", "May", "June", "July", "Augest", "Septemper", "October", "November", "December"],
    valueArray = [week[dayName], monthArray[month], dayNum, year, hour, minute, second, period];
  for (let i = 0; i < idArray.length; i++) {
    idArray[i].firstChild.nodeValue = valueArray[i];
  }
  if (alarmTime == `${hour} : ${minute} : ${period}`) {
    ringTone.play();
    ringTone.loop = true;
  }
}
window.onload = function () {
  setInterval(showTime, 1000);
};
//===================================== Alarm ============================
let selectMenu = document.querySelectorAll("select");
let alarmButton = document.querySelector(".set-button button");
let content = document.querySelector(".content");
for (let i = 12; i > 0; i--) {
  if (i < 10) {
    i = "0" + i;
  } else {
    i = i;
  }
  let newOption = new Option(`${i}`, `${i}`);

  selectMenu[0].add(newOption, undefined);
  // let option = `<option value="${i}">${i}</option>`;
  // selectMenu[0].firstElementChild.insertAdjacentElement("afterend", option);
  // console.log(option);
}
for (let i = 59; i >= 0; i--) {
  if (i < 10) {
    i = "0" + i;
  } else {
    i = i;
  }
  let newOption = new Option(`${i}`, `${i}`);

  selectMenu[1].add(newOption, undefined);
  //   let option = `<option value="${i}">${i}</option>`;
  //   selectMenu[1].firstElementChild.insertAdjacentElement("afterend", option);
  //   console.log(option);
}
for (let i = 2; i > 0; i--) {
  let ampm = i == 1 ? "AM" : "PM";

  let newOption = new Option(`${ampm}`, `${ampm}`);

  selectMenu[2].add(newOption, undefined);
  // let option = `<option value="${ampm}">${ampm}</option>`;
  // selectMenu[2].firstElementChild.insertAdjacentElement("afterend", option);
  // console.log(option);
}
function setAlarm() {
  if (isRinging) {
    alarmTime = "";
    ringTone.pause();
    content.classList.remove("disabled");
    alarmButton.innerHTML = "Set Alarm";
    return (isRinging = false);
  }
  let time = `${selectMenu[0].value} : ${selectMenu[1].value} : ${selectMenu[2].value}`;
  if (time.includes("hour") || time.includes("minute") || time.includes("AM/PM")) {
    alert("Please Enter Valid Time");
  } else {
    content.classList.add("disabled");

    alarmButton.innerHTML = "Clear Alarm";
  }
  isRinging = true;
  alarmTime = time;

  console.log(time);
}
alarmButton.addEventListener("click", setAlarm);
//==========================show/hide Button ================
let showHideButton = document.querySelector(".show");
let alarm = document.querySelector(".alarm");

function showHide() {
  if (isRinging) {
    alarm.classList.remove("active");
    showHideButton.classList.remove("slide");
    return (isRinging = false);
  }
  isRinging = true;
  alarm.classList.add("active");
  showHideButton.classList.add("slide");
}

showHideButton.addEventListener("click", showHide);
