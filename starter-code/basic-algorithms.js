// Names and Input
var hacker1 = "Kenneth";
console.log("Driver's name is " + hacker1);
var hacker2 = prompt("What is the navigator's name?");
console.log("The navigator's name is " + hacker2);


//Conditionals
if (hacker1.length > hacker2.length){
  console.log(`The Driver has the longest name, it has ${hacker1.length} characters`);
}
  else if (hacker1.length < hacker2.length) {
    console.log(`Yo, navigator got the longest name, it has ${hacker2.length} characters`);
  }
  
  else {
    console.log(`Wow, you both got equally long names, ${hacker2.length} characters!!`);
  
}
var spacedName = [];
var spacedName2 = "";
var reverseName = "";
for (i=0; i < hacker1.length; i++ ) {
    spacedName[i] = hacker1[i];
    
}

console.log(spacedName.join(" "));

//Different Way

for (i=0; i < hacker1.length; i++ ) {
    spacedName2 += hacker1[i] + " ";
    
}

console.log(spacedName2.toUpperCase());


for (i = hacker2.length - 1; i >= 0; i--){
  reverseName += hacker2[i] + " ";
}

console.log(reverseName);

resultToCheck = hacker1.localeCompare(hacker2);

if (resultToCheck == 0) {
  
  console.log("What?! You both got the same name?")

} else if (resultToCheck == 1){
  console.log("Yo, the navigator goes first definitely");
  
} else if (resultToCheck == -1)  {
    console.log("The driver's name goes first");
}

//Palindrome


function palindrome(userInput) {
 var re = /[\W_]/g;
 userInput = userInput.toLowerCase().replace(re, '');
 var length = userInput.length;
 for (var i = 0; i < length/2; i++) {
   if (userInput[i] !== userInput[length - 1 - i]) {
       console.log(userInput + " is not a palindrome.");
       return;
   }
 }
 console.log(userInput + " is a palindrome");
}
palindrome(prompt("Type a palindrome"));


// Lorem ipsum generator


var loremIpsumParagraphs = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam efficitur nunc feugiat leo porta accumsan sit amet quis elit. Phasellus ac massa id ligula aliquam dignissim. Donec lobortis at est a feugiat. In hac habitasse platea dictumst. Quisque non magna eget justo maximus laoreet in eu purus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque ultricies augue eleifend sem consequat, vel dictum leo lacinia.Aenean efficitur dui sit amet scelerisque consectetur. Curabitur ut lorem nec nisl lacinia egestas. Proin mattis dui ex, eget laoreet lectus tempus sit amet. Nulla sit amet orci quis libero hendrerit aliquam. Maecenas condimentum mauris porttitor posuere gravida. Morbi convallis ut ex quis mollis. Cras erat odio, fermentum ac odio a, maximus aliquet dolor. Vestibulum in massa nec arcu fringilla laoreet ut sagittis diam. Cras imperdiet lobortis bibendum. Donec risus felis, lacinia in semper nec, blandit sed nulla. Maecenas rhoncus sem non libero euismod lacinia
Nulla viverra mauris suscipit tristique efficitur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed nisl mauris, euismod eu consequat at, tempus ornare massa. Donec non tempus turpis. Sed sed eleifend mauris, accumsan consequat purus. Sed commodo ultricies lorem, non efficitur sapien lacinia vitae. Aenean pulvinar ante scelerisque, maximus purus et, tempus felis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce elementum blandit libero sit amet imperdiet. Aliquam consectetur arcu sit amet nunc dignissim venenatis. Sed fringilla rhoncus libero id convallis. Nullam pulvinar dictum nisi ut pellentesque."







