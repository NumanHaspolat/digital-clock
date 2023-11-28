const showTime = () => {
  let date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let session = "AM";

  const clock = document.getElementById("clock");

  if (hour == 0) {
    hour = 0;
  }
  if (hour > 12) {
    hour = hour - 12;
    session.innerText = "PM";
  }

  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = min < 10 ? "0" + sec : sec;
  clock.innerHTML = `${hour} : ${min} : ${sec} ${session}`;

  setTimeout(showTime, 1000);
};

showTime();
