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
