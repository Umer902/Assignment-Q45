"use strict";
//       30. Hello Admin:
let username = ["Ali", "Omer", "Admin", "Ashir", "Usman"];
for (let x = 0; x < username.length; ++x) {
    if (username[x] === "Admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello", `${username[x]}`, ", thank you for logging in again.");
    }
}
