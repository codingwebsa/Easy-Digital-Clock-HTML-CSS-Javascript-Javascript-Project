var hour = document.getElementById("hour");
var min = document.getElementById("minutes");
var sec = document.getElementById("seconds");

var clock = setInterval(function getTime() {
  var timeNow = new Date();

  var h =
    timeNow.getHours() < 10 ? "0" + timeNow.getHours() : timeNow.getHours();
  var m =
    timeNow.getMinutes() < 10
      ? "0" + timeNow.getMinutes()
      : timeNow.getMinutes();
  var s =
    timeNow.getSeconds() < 10
      ? "0" + timeNow.getSeconds()
      : timeNow.getSeconds();

  hour.textContent = h;
  min.textContent = m;
  sec.textContent = s;
}, 1000);
