"use strict";
//          32. Checking Usernames:
let current_users = ["Ali", "Omer", "Admin", "Ashir", "Usman"];
let new_users = ["Khalid", "Hassan", "Omer", "Hamid", "Usman"];
for (let new_user of new_users) {
    let is_already_used = current_users.some((current_user) => current_user.toLowerCase() === new_user.toLowerCase());
    if (is_already_used) {
        console.log("The person will need to enter a");
    }
    else {
        console.log("The user name is available");
    }
}
;
