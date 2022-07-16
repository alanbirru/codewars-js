// "use strict";
// function incrementString(strng) {
//   let num = parseInt(strng.replace(/\D/g, ""));

//   console.log(num);

//   if (isNaN(strng[strng.length - 1]) == false) {
//     num++;
//     let my_str = strng.replace(/[1-9]/g, "");
//     return my_str + num;
//   } else {
//     return strng + "1";
//   }
// }
// console.log(incrementString("alan0"));

// function peopleWithAgeDrink(old) {
//   let drink = "";
//   if (old < 14) {
//     drink = "toddy";
//   } else if (old < 18) {
//     drink = "coke";
//   } else if (old < 21) {
//     drink = "beer";
//   } else if (old >= 21) {
//     drink = "whisky";
//   }
//   return `drink ${drink}`;
// }

// function toAlternatingCase(str) {
//   let arr = [];
//   let arr_string = str.split("");

//   for (let i = 0; i < str.length; i++) {
//     if (str[i].toUpperCase() == str[i]) {
//       arr.push(str[i].toLowerCase());
//     } else if (str[i].toLowerCase() == str[i]) {
//       arr.push(str[i].toUpperCase());
//     }
//   }
//   return arr.join("");
// }
// console.log(toAlternatingCase("alan birRu"));
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {}
