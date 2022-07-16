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

function peopleWithAgeDrink(old) {
  let drink = "";
  if (old < 14) {
    drink = "toddy";
  } else if (old < 18) {
    drink = "coke";
  } else if (old < 21) {
    drink = "beer";
  } else if (old >= 21) {
    drink = "whisky";
  }
  return `drink ${drink}`;
}
