"use strict";
//           29. Favorite Fruit:
let favorite_fruits = ["Manago", "Bananas", "Apples"];
if (favorite_fruits.includes("Apples")) {
    console.log("you really like Apple");
}
if (favorite_fruits.includes("Manago")) {
    console.log("you really like Manago");
}
if (favorite_fruits.includes("Orange")) {
    console.log("you really like Orange");
}
if (favorite_fruits.includes("Bananas")) {
    console.log("you really like Bananas");
}
else if (favorite_fruits.includes("Coconut")) {
    console.log("you really like Coconut");
}
else {
    console.log("Allah Khair Kare");
}
//                    OR
let favoritefruits = ["Manago", "Bananas", "Apples"];
console.log(favoritefruits);
if (favoritefruits.indexOf("Manago") !== -1) {
    console.log("you really like a Manago");
}
if (favoritefruits.indexOf("Bananas") !== -1) {
    console.log("you really like a Bananas");
}
if (favoritefruits.indexOf("Apples") !== -1) {
    console.log("you really like a Apples");
}
if (favoritefruits.indexOf("Grapes") !== -1) {
    console.log("you really like a Grapes");
}
else {
    console.log("you don't like Grapes");
}
if (favoritefruits.indexOf("Coconut") !== -1) {
    console.log("you really like a Coconut");
}
else {
    console.log("you don't like Coconut");
}
