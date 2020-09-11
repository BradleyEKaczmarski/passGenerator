//  strings to pull from
var lowerCharacters = "abcdefghijklmnopqrstuvwxyz";
var upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericCharacters = "0123456789";
var specialCharacters = "!#$%&'()*+,-./:;<=>?@[]^_`{}~";

// combining
var combinedCharacters = lowerCharacters.concat(upperCharacters, numericCharacters, specialCharacters);


// password length prompt
var userInput = parseInt(prompt(
    "How many characters would you like your password to contain?"
    ));


// confirm boxes
var lowercase = confirm('Click OK to confirm using lowercase characters');
var uppercase = confirm('Click OK to confirm using uppercase characters');
var numbers = confirm('Click OK to confirm using numbers');
var special = confirm('Click OK to confirm using special characters');

function userLength(){

    // confirm it is a number 
    if (isNaN(userInput) === true) {
        alert("Password length must be provided as a number");
        return;
    }

    // at lest 8 characters long
    if (userInput < 8) {
        alert("Password length must be at least 8 characters");
        return;
    }

    // less than 128 characters long
    if (userInput > 128) {
        alert("Password length must less than 129 characters");
        return;
    }

    if (lowercase){
        combinedCharacters += lowerCharacters;
    }
    if (uppercase){
        combinedCharacters += upperCharacters;
    }
    if (numbers){
        combinedCharacters += numericCharacters;
    }
    if (special){
        combinedCharacters += specialCharacters;
    }

      // which characters not to use
      // this is where my combinedCharacters string isn't working and I'm not sure what to do
    if (
        lowerCharacters === false &&
        upperCharacters === false &&
        numericCharacters === false &&
        specialCharacters === false 
    ) {
        alert("Must select at least one character type");
        return;
    }

}

// random letter
function randomLetter (arr) {
    let letter = arr[Math.floor(Math.random() * arr.length)];
    return letter;
}

// letter loop 
function generate (arr) {
    userLength();
    var password = " ";
    for(var i = 0; i < userInput; i++) {
        password += randomLetter(arr);
    }
    return password;
}

// passtextbox
var box = document.getElementById('passTextBox');

// when clicked send to passtextbox
generateBtn.onclick = function(){
    var pass = generate(combinedCharacters);
    box.textContent = pass;
}
