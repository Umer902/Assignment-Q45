            //  36. T-shirt

function made_Tshirt(size:string,message:string):void{
console.log(`The size of your T-shirt is ${size} and "${message}" `);
}
made_Tshirt("Large","The shirt color is White ");

            //37. Large shirt

function make_shirt(size: string = "large", message: string = "I love TypeScript") {
console.log(`Making a ${size} shirt with the message "${message}"`);
}          // Make a large shirt with default message
make_shirt();   
// Make a medium shirt with default message
make_shirt("medium");
// Make a small shirt with a custom message
make_shirt("small", "I realiy love TypeScript!");
