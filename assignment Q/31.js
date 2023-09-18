"use strict";
// 31. No Users: 
let username1 = ["Ali", "Omer", "Admin", "Ashir", "Usman"];
if (username1.length > 0) {
    console.log("we need to find some user");
}
else {
    console.log("Hellow user");
}
username1.splice(0, username1.length);
console.log(username1);
