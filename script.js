// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Setting arrays 
var charUpp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charLower = "abcdefghijklmnopqrstuvwxyz";
var number = "1234567890";
var specChar = "!#$%&\()*+,-./:;<=>?@^[\\]^_`{|}~";

var charUppArr = charUpp.split("");
var charLowerArr = charLower.split("");
var numberArr = number.split("")
var specCharArr = specChar.split("");

// Variable Declaration 
var passwordLength = "";
var confirmCharUpp;
var confirmCharLower;
var confirmNumber;
var confirmSpecChar;

// setting function to call the input prompts - password length & character types

// Input prompts to confirm number of characters in password - setting between 8 - 128
var passwordLength = prompt("Please select how many characters you would like in your password \n Password should be between 8 and 128 Characters");

// validate password inputs
if (passwordLength < 8 || passwordLength > 128) {
    alert("You have not selected the right parameters, please select between 8 and 128 characters.");
    var passwordLength = prompt("Please select how many characters you would like in your password \n Password should be between 8 and 128 Characters");
}
if (isNaN(passwordLength)) {
    alert("You have not selected the right parameters, please select between 8 and 128 characters.");
    var passwordLength = prompt("Please select how many characters you would like in your password \n Password should be between 8 and 128 Characters");
}
else (alert("Your password will contain " + passwordLength + " characters."));

// Input prompts for password character types
var userLowerChar = confirm("Do you want your password to include lowercase characters?");
var userUpperChar = confirm("Do you want your password to include uppercase characters?");
var userNumber = confirm("Do you want your password to include numeric characters?");
var userSpecChar = confirm("Do you want your password to include special characters?");

// Now validate those inputs
if (userLowerChar === false && userUpperChar === false && userNumber === false && userSpecChar === false) {
    alert("Please select at least one character type for your password");
    var userLowerChar = confirm("Do you want your password to include lowercase characters?");
    var userUpperChar = confirm("Do you want your password to include uppercase characters?");
    var userNumber = confirm("Do you want your password to include numeric characters?");
    var userSpecChar = confirm("Do you want your password to include special characters?");
}
}

// setting function to generate password

function generatePassword() {

    // Function to get random item from the array
    function getRandom(arr) {
        var arrLen = arr.length;
        var randomIndex = Math.floor(Math.random() * arrLen);
        return arr[randomIndex];
    }

    //   For loop to get number of characters for password length 
    for (var i = 0; i < passwordLength; i++) {
        if (userLowerChar) {
            var charLowerRandom = getRandom(charLowerArr);
        }
        if (userUpperChar) {
            var charUpperRandom = getRandom(charUppArr);
        }
        if (userNumber) {
            var numberRandom = getRandom(numberArr);
        }
        if (userSpecChar) {
            var specCharRandom = getRandom(specCharArr);
        }
    }
    // Setting amount of chars in password depending on character types selected
    var possiblePassWd = [];

    if (userLowerChar) {
        possiblePassWd = possiblePassWd.concat(charLowerArr);
    }
    if (userUpperChar) {
        possiblePassWd = possiblePassWd.concat(charUppArr);
    }
    if (userNumber) {
        possiblePassWd = possiblePassWd.concat(numberArr);
    }
    if (userSpecChar) {
        possiblePassWd = possiblePassWd.concat(specCharArr);
    }

    // Loop to get length of password as selected by user inputs
    for (var i = 0; i < passwordLength; i++) {
        console.log(getRandom(possiblePassWd));
    }
}
