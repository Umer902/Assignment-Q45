"use strict";
//      33. Ordinal Numbers: 
let special = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let b = 0; b < special.length; b++) {
    let ordinal;
    if (b + 1 === 1) {
        ordinal = "st";
    }
    else if (b + 1 === 2) {
        ordinal = "nd";
    }
    else if (b + 1 === 3) {
        ordinal = "rd";
    }
    else {
        ordinal = "th";
    }
    console.log(`${b + 1}${ordinal}`);
}
;
