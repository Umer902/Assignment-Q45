"use strict";
//41. Magicians:
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
const show_magicians1 = ["smith maker", "Alic", "John", "Eric thomas"];
show_magicians(show_magicians1);
//     42. Great Magicians
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}
function show_magicians2(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
const magicians = ["samuel", "Alic", "John", "Eric", "Boby"];
make_great(magicians);
show_magicians(magicians);
