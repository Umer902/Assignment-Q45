"use strict";
//43. Unchanged Magicians
Object.defineProperty(exports, "__esModule", { value: true });
function make_great(magicians) {
    const greatMagicians = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push("the Great " + magicians[i]);
    }
    return greatMagicians;
}
function show_magicians(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
const magicians = ["samuel", "Alic", "John", "Eric", "Boby"];
const greatMagicians = make_great(magicians);
show_magicians(magicians);
show_magicians(greatMagicians);
