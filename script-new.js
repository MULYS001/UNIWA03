// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button

// Write password to the #password input
function writePassword() {
    userPrompts();
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.textContent = password;
}
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
var passwordLength;
var userLowerChar;
var userUpperChar;
var userNumber;
var userSpecChar;
var userPassword = "";

// setting function to call the input prompts - password length & character types
function userPrompts() {
    // Input prompts to confirm number of characters in password - setting between 8 - 128
    passwordLength = parseInt(prompt("Please select how many characters you would like in your password \n Password should be between 8 and 128 Characters"));

    // validate password inputs
    if (passwordLength < 8 || passwordLength > 128) {
        alert("You have not selected the right parameters, please select between 8 and 128 characters.");
        passwordLength = prompt("Please select how many characters you would like in your password \n Password should be between 8 and 128 Characters");
    }
    if (isNaN(passwordLength)) {
        alert("You have not selected the right parameters, please select between 8 and 128 characters.");
        passwordLength = prompt("Please select how many characters you would like in your password \n Password should be between 8 and 128 Characters");
    }
    else (alert("Your password will contain " + passwordLength + " characters."));

    // Input prompts for password character types
    userLowerChar = confirm("Do you want your password to include lowercase characters?");
    userUpperChar = confirm("Do you want your password to include uppercase characters?");
    userNumber = confirm("Do you want your password to include numeric characters?");
    userSpecChar = confirm("Do you want your password to include special characters?");

    // Now validate those inputs
    if (userLowerChar === false && userUpperChar === false && userNumber === false && userSpecChar === false) {
        alert("Please select at least one character type for your password");
        userLowerChar = confirm("Do you want your password to include lowercase characters?");
        userUpperChar = confirm("Do you want your password to include uppercase characters?");
        userNumber = confirm("Do you want your password to include numeric characters?");
        userSpecChar = confirm("Do you want your password to include special characters?");
    }
}

// setting function to generate password
function generatePassword() {
    console.log(passwordLength)
    // finding characters in password
    let selectedCharsArr = [];

    // selecting arrays to use
    if (userLowerChar) {
        selectedCharsArr = selectedCharsArr.concat(charLowerArr)
    }
    if (userUpperChar) {
        selectedCharsArr = selectedCharsArr.concat(charUppArr)
    }
    if (userNumber) {
        selectedCharsArr = selectedCharsArr.concat(numberArr)
    }
    if (userSpecChar) {
        selectedCharsArr = selectedCharsArr.concat(specCharArr)
    }
    var userPassword = "";

    // looping to get password length
    for (var i = 0; i < passwordLength; i++) {
        userPassword += selectedCharsArr[Math.floor(Math.random() * selectedCharsArr.length)]
    }

    console.log(userPassword)
    return userPassword;
}

generateBtn.addEventListener("click", writePassword);