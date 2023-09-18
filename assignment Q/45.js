"use strict";
//45. Cars
function make_car1(manufacturer, model, ...options) {
    const car = { manufacturer, model };
    for (const [key, value] of options) {
        car: String = value;
    }
    return car;
}
const car3 = make_car1("Toyota", "Fortuner", ["color", "Black"], ["transmission", "automatic"]);
console.log(car1);
const car4 = make_car1("Honda", "City", ["color", "white"], ["transmission", "automatic"]);
console.log(car4);
