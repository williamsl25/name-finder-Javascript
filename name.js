/*jshint multistr:true */

// create a for loop that starts at 0, continues until it reaches the end of text, and increments by 1 each time. 

// if statement in the body of your for loop. It should check to see whether the current letter is equal to the first letter of your name. (Capitalization counts!)

// add another for loop, this time inside the body of your if statement This loop will make sure each character of your name gets pushed to the final array.

text = "My name is Lindsay and Lind loves to go paddleboarding.  Blah blach text Lindsay Lindsay"
document.write(text)

var myName = "Lindsay";
var hits = [];

// for(var i = 0; i < text.length; i++) {
//     if (text[i] === "L"){
        
//         for(var j = i; j < (myName.length + i); j++) {
//             hits.push(text[j]);
//             }
//         } 
//     }

for (var i = 0; i < text.length; i++) {
    if (text.substring(i, myName.length + i) === myName) {
        for (var j = i; j < (myName.length + i); j++) {
            hits.push(text[j]);
        }
    }
}
  
// set up an if/else statement. If you don't have any hits, log "Your name wasn't found!" to the console. Otherwise, log the hits array to the console.    
    
if(hits.length === 0){
    console.log("Your namw was not found!")
    }
    else {
        console.log(hits);
        document.write(hits);
        }