let guestlist = ["Naveed","Sajjad","Ibrahim"]
for(let i=0; i<guestlist.length; i++){
let invitationmessage = "Dear " + guestlist[i] + ", you are cordially invited to dinner!"
console.log(invitationmessage)
} 
let notatdinner = "Mr. Naveed";
//let newinvitation1 = guestlist.shift()
let newinvitation = guestlist.slice(0,1)
console.log(newinvitation + " kindly come at my dinner becasuse some special person i.e Mr. sajjad & Mr. ibrahim come at dinner so these persons are also inviting to dinner!");

// 16. Stating the name of guest who can't make it
//console.log(notatdinner);
console.log(notatdinner + " can't make it to dinner.");

let newguest = "Ashir Ali"; 
guestlist.shift()
guestlist.unshift(newguest)
console.log(newguest + " you are cordially invited to dinner! ");
let newguestlist = guestlist.slice(0)
console.log(newguestlist);

for (let i = 0; i < guestlist.length; i++) {
     let invitation = "Dear my friend" + guestlist[i] + "  you are special invition to dinner in my home at 9'0 cloclk!";
     console.log(invitation);
 }
        // 16. More Guests: 

guestlist.splice(2,0,"Bilal","Amir Mehmood","Ahmed Faraz");
console.log(guestlist);

for (let k = 0; k < guestlist.length; k++){
let bigdinner = "Lovly Friend " + guestlist[k] + " i hope you are good, i inform you that comming Saturday, i have planned a big dinner at my home, you are also inviting to dinner";
console.log(bigdinner);
}
guestlist.unshift("Murtaza jan");
console.log ( guestlist)
guestlist.splice(4,0,"Shabbir");
console.log ( guestlist);
let newadd = "Rehman"
//guestlist.append(newadd);
    
for (let j = 0; j < guestlist.length; j++){
let addnewlist = " Dear " + guestlist[j] + " you are cordially invited to dinner! "
console.log(addnewlist);
}
        // 17. shrinking guestlist

guestlist.splice(1,2);
console.log(guestlist);
 
for (let m = 0; m <guestlist.length; m++){
        let onlytwoguest =`${guestlist[m]} My Friend you have not come in time, in this situation only two seats are available for dinner.` 
        console.log (onlytwoguest);
}
        
let A = guestlist.pop()
console.log(A + " you’re sorry you can’t invite them to dinner. ");

let B = guestlist.pop()
console.log(B + " you’re sorry you can’t invite them to dinner. ");

let C = guestlist.pop()
console.log(C + " you’re sorry you can’t invite them to dinner. ");

let D = guestlist.pop()
console.log(D + " you’re sorry you can’t invite them to dinner. ");


console.log (guestlist)

for (let u = 0; u < guestlist.length; u ++){
        console.log(`${guestlist[u]} letting them know they’re still invited. `)
}
guestlist.shift()

console.log(guestlist)

let remove2nd = guestlist.shift()

console.log(remove2nd)
console.log(guestlist)
