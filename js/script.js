// Question 2:
//   Write a function that takes the number of seconds and returns the digital format clock time as a string. Time should be counted from 00:00:00.
// 5025 / 3600
//   Examples
//   digitalClock(5025) âžž "01:23:45"
//   // 5025 seconds is 1 hour, 23 mins, 45 secs.
// function format(time) {
//   // Hours, minutes and seconds
//   var hrs = ~~(time / 3600);
//   var mins = ~~((time % 3600) / 60);
//   var secs = ~~time % 60;

//   // Output like "1:01" or "4:03:59" or "123:03:59"
//   var ret = "";
//   if (hrs > 0) {
//     ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
//   }
//   ret += "" + mins + ":" + (secs < 10 ? "0" : "");
//   ret += "" + secs;
//   return ret;
// }
// console.log(format(5025));
// // console.log(JSON.stringify(format(5025)));
// //   digitalClock(61201) âžž "17:00:01"
// //   // No AM/PM. 24h format.
// console.log(format(61201));
// //   digitalClock(87000) âžž "00:10:00"
// //   // It's 00:10 next day.
// console.log(format(87000));

function seconds2HMS(value) {
  // value = 5025;
  const sec = parseInt(value);
  let days = Math.floor(sec / 86400); //0.058 ~ 0
  let hours = Math.floor((sec - days * 86400) / 3600); //1.39 ~ 1
  // console.log(hours);
  let minutes = Math.floor((sec - days * 86400 - hours * 3600) / 60); // 23.75 ~ 23
  let seconds = sec - days * 86400 - hours * 3600 - minutes * 60; // 45

  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;

  return days + "day(s)" + " " + " " + hours + ":" + minutes + ":" + seconds;
}
console.log(seconds2HMS(5025));
console.log(seconds2HMS(98000));
console.log(seconds2HMS(61201));
console.log(seconds2HMS(864000));

function SplitTime(numberOfHours) {
  var Days = Math.floor(numberOfHours / 24);
  var Remainder = numberOfHours % 24;
  var Hours = Math.floor(Remainder);
  var Minutes = Math.floor(60 * (Remainder - Hours));
  return { Days: Days, Hours: Hours, Minutes: Minutes };
}
var hours = 27.3;
var timeResult = SplitTime(hours);
console.log(
  "27.3 hours translate to  " +
    timeResult.Days +
    "Days " +
    timeResult.Hours +
    "Hours and " +
    timeResult.Minutes +
    "Minutes."
);
// Question 2:
//   Write a function that takes the number of seconds and returns the digital format clock time as a string. Time should be counted from 00:00:00.
// 5025 / 3600
//   Examples
//   digitalClock(5025) âžž "01:23:45"
//   // 5025 seconds is 1 hour, 23 mins, 45 secs.
// function format(time) {
//   // Hours, minutes and seconds
//   var hrs = ~~(time / 3600);
//   var mins = ~~((time % 3600) / 60);
//   var secs = ~~time % 60;

//   // Output like "1:01" or "4:03:59" or "123:03:59"
//   var ret = "";
//   if (hrs > 0) {
//     ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
//   }
//   ret += "" + mins + ":" + (secs < 10 ? "0" : "");
//   ret += "" + secs;
//   return ret;
// }
// console.log(format(5025));
// // console.log(JSON.stringify(format(5025)));
// //   digitalClock(61201) âžž "17:00:01"
// //   // No AM/PM. 24h format.
// console.log(format(61201));
// //   digitalClock(87000) âžž "00:10:00"
// //   // It's 00:10 next day.
// console.log(format(87000));

function SplitTime(numberOfHours) {
  var Days = Math.floor(numberOfHours / 24);
  var Remainder = numberOfHours % 24;
  var Hours = Math.floor(Remainder);
  var Minutes = Math.floor(60 * (Remainder - Hours));
  return { Days: Days, Hours: Hours, Minutes: Minutes };
}
var hours = 27.3;
var timeResult = SplitTime(hours);
console.log(
  "27.3 hours translate to  " +
    timeResult.Days +
    "Days " +
    timeResult.Hours +
    "Hours and " +
    timeResult.Minutes +
    "Minutes."
);