"use strict";
//44. Sandwich
function makeSandwich(...items) {
    console.log(`Making a sandwich with: ${items.join(", ")}`);
}
makeSandwich("Chicken Cheese", "Egg", "Mayones");
makeSandwich("Bread", "Vegetables", "Mayones ", "Mozila Cheese");
makeSandwich("Roast Beef", "Grilles Chicken");
