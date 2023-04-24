// console.log("Saurav");
// console.log("Verma");
// console.log(40 - 52 - 96 * 8);

// let firstName = "Saurav";
// let lastName = "Verma";

// console.log("My name is " + firstName + " " + lastName + ".");

// console.log(true);
// let javascriptIsFun = true;
// console.log(typeof javascriptIsFun);
// console.log(typeof "javascriptIsFun");
// console.log(typeof 265);
// console.log(typeof false);

// let year;
// console.log(year);
// console.log(typeof year);

// function ticketStatus(tickets, ticketId) {
//   let response =
//     tickets[ticketId] === null
//       ? "not sold"
//       : tickets[ticketId] === undefined
//       ? "unknown ticket id"
//       : `sold to ${tickets[ticketId]}`;
//   return response;
// }

// const tickets = {
//   "0H2AZ123": null,
//   "23LA9T41": "Verena Nardi",
// };

// console.log(ticketStatus(tickets, "RE90VAW7"));
// // => 'unknown ticket id'

// console.log(ticketStatus(tickets, "0H2AZ123"));
// // => 'not sold'

// console.log(ticketStatus(tickets, "23LA9T41"));
// // // => 'sold to Verena Nardi'

// function twoSum(array1, array2) {
//   console.log(Number(array1.join("")) + Number(array2.join("")));
// }
// twoSum([1, 2, 3], [0, 7]);

// function luckyNumber(value) {
//   let str = String(value);
//   console.log(str);
// }
// luckyNumber(1441);
// // luckyNumber(15651);
// // //=>  true

// luckyNumber(123);
//=> false

// function errorMessage(input) {
//   if (input) {
//     if (input > 0) {
//       return "";
//     } else {
//       return "Must be a number besides 0";
//     }
//   } else {
//     return "Required field";
//   }
// }

// console.log(errorMessage("123"));
// // => ''

// console.log(errorMessage(""));
// // => 'Required field'

// console.log(errorMessage("abc"));
// // => 'Must be a number besides 0'

// function costOf(sign, currency) {
//   return `Your sign costs ${(20 + sign.length * 2).toFixed(2)} ${currency}.`;
// }
// console.log(costOf("Happy Birthday Rob!", "dollars"));

// function cookingStatus(remainingTime) {
//   if (remainingTime === undefined) {
//     return "You forgot to set the timer.";
//   } else if (remainingTime === 0) {
//     return "Lasagna is done";
//   } else {
//     return "Not done, please wait.";
//   }
// }
// console.log(cookingStatus(12));
// console.log(cookingStatus(42));
// console.log(cookingStatus(8.5));
// console.log(cookingStatus(0.1));
// // => 'Not done, please wait.'

// console.log(cookingStatus(0));
// console.log(cookingStatus(0));
// console.log(cookingStatus(0));
// console.log(cookingStatus());
// // => 'You forgot to set the timer.'

// const addSecretIngredient = function (friendsRecepie, ownRecepie) {
//   ownRecepie.push(friendsRecepie[friendsRecepie.length - 1]);
//   console.log(ownRecepie);
// };

// const friendsList = ["noodles", "sauce", "mozzarella", "kampot pepper"];
// const myList = ["noodles", "meat", "sauce", "mozzarella"];

// addSecretIngredient(friendsList, myList);
const recipe = {
  noodles: 200,
  sauce: 0.5,
  mozzarella: 1,
  meat: 100,
};

function scaleRecipe(recepie, portion) {
  const result = {};

  for (let [key, value] of Object.entries(recepie)) {
    result[key] = value * (portion / 2);
  }

  return result;
}
const recipe1 = {
  sauce: 0.5,
  noodles: 250,
  meat: 150,
  tomatoes: 3,
  onion: 0.5,
};
const expected1 = {
  sauce: 1.5,
  noodles: 750,
  meat: 450,
  tomatoes: 9,
  onion: 1.5,
};
console.log(scaleRecipe(recipe1, 6));
const recipe2 = {
  sauce: 0.6,
  noodles: 300,
  carrots: 1,
  mozzarella: 0.5,
  ricotta: 50,
  béchamel: 0.1,
  tofu: 100,
};
const expected2 = {
  sauce: 0.9,
  noodles: 450,
  carrots: 1.5,
  mozzarella: 0.75,
  ricotta: 75,
  béchamel: 0.15,
  tofu: 150,
};
console.log(scaleRecipe(recipe2, 3));
