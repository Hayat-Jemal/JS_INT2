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
//   Question 3:
//   Given an array of numbers, return an array which contains all the even numbers in the original array, which also have even indices.
// var arr = [4, 5, 7, 8, 14, 45, 76];

// let array = [1,3,2,6,4,8];
// for (let i = 0; i < array.length; i++) {
//   if (i % 2 == 0 && array[i] % 2 == 0) {
//     console.log(array[i]);
//   }
// }
function even(array) {
  getArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i % 2 == 0 && array[i] % 2 == 0) {
      getArray.push(array[i]);
    }
  }
  return getArray;
}
// console.log=array[1, 3, 2, 6, 4, 8];
console.log(even([1, 3, 2, 6, 4, 8])); // 2,4
//   getOnlyEvens([0, 1, 2, 3, 4]) âžž [0, 2, 4]
console.log(even([0, 1, 2, 3, 4]));
//   getOnlyEvens([1, 2, 3, 4, 5]) âžž []
console.log(even([1, 2, 3, 4, 5]));
// Question 4 to 7 are Entry exam questions for a masters program at MUM

// Question 4: 
//   Write a function that takes an array of integers as an argument and returns a value based on the sums of the even and odd numbers in the array. Let X = the sum of the odd numbers in the array and let Y = the sum of the even numbers. The function should return X - Y

  // The signature of the function is:
  // function f(a)
function f(a) {
  let r = 0;
  for (i = 0; i < a.length; i++) {
    if (a[i] % 2 === 1) {
      r = r + a[i];
    }
  }
  let re = 0;
  for (i = 0; i < a.length; i++) {
    if (a[i] % 2 === 0) {
      re = re + a[i];
    }
  }
  return r - re;
}
console.log(f([1]));
console.log(f([1, 2]));
console.log(f([1, 2, 3]));
console.log(f([1, 2, 3, 4]));
console.log(f([3, 3, 4, 4]));
console.log(f([3, 2, 3, 4]));
console.log(f([4, 1, 2, 3]));
console.log(f([1, 1]));
console.log(f([]));

// //   Examples
// //   if input array is {1}	return 1
// //   if input array is {1, 2}	return -1
// //   if input array is {1, 2, 3} return	2
// //   if input array is {1, 2, 3, 4} return	-2
// //   if input array is {3, 3, 4, 4} return	-2
// //   if input array is {3, 2, 3, 4} return	0
// //   if input array is {4, 1, 2, 3} return	-2
// //   if input array is {1, 1} return	2
// //   if input array is {} return	0
// Question 5:
//   Write a function that takes a positive integer and returns the factorial of the number
//   Notes
//   The factorial of 0 is 1.
//   The factorial of any positive integer x is x * (x - 1) * (x - 2) * . . . . . . * 1 (e.g. factorial of 4 is 4 * 3 * 2 * 1 = 24)  
function factoralize(p) {
  for (i = p - 1; i >= 1; i--) {
    p = p * i;
  }
  return p;
}
console.log(factoralize(4));
console.log(factoralize(10));

// 2nd method
// function factoralize(p) {
//   let f = p
//   if (p === 0 && p === 1) {
//     return 1;
//   }
//   while (p > 1) {
//     p--;
//     f = f * p;
//   }
//   return f 
// }
// console.log(factoralize(4))
// // Question 6: 
// //   Consider an array A with n of positive integers. An integer idx is called a POE (point of equilibrium) of A, if A[0] + A[1] + â€¦ + A[idx â€“ 1] is equal to A[idx + 1] + A[idx + 2] + â€¦ + A[n â€“ 1]. Write a function to return POE of an array, if it exists and -1 otherwise.
// function equiTaster(a) {
//   for (e = 1; e < a.length - 1; e++) {
//     var left = 0;
//     for (i = 0; i < e; i++) {
//       left = left + a[i];
//     }
//     var right = 0;
//     for (i = e + 1; i < a.length; i++) {
//       right = right + a[i];
//     }
//     if (left == right) {
//       return e;
//     }
//     if (e == a.length - 2) {
//       return -1;
//     }
    
//   }
// }