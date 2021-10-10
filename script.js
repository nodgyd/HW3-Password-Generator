// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var characters = [];

var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
var lower = "abcdefhijklmnopqrstuvwxyz".split('');
var numbers = "1234567890".split('')
var specialChar = "!@#$%^&*()-+".split('')
//have an array - global scope to store characters

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//function that will gather user input, generate random password, IMPORTANT returns the generated password at the end
//function that gets password lenth from user
function generatePassword() {

    var length = 
    // decide whether user wants to include upper case letters in password 
    var hasUpper = confirm("Would you like Upper Case Characters?!")
    var hasLower = confirm("Would you like Lower Case Characters?!")
    var hasNumber = confirm("Would you like numbers?!")
    var hasSpecial = confirm("Would you like Special Characters?!")
    console.log=(length)
    // 4 positive condition
    if (hasUpper && hasLower && hasNumber && hasSpecial) {
        characters = characters.concat(upper, lower, numbers, specialChar)
    } 
 
    // 3 positive conditions
    if(hasUpper && hasLower && hasNumber) {
        characters = characters.concat(upper, lower, numbers)
    } else if(hasUpper && hasNumber && hasSpecial) {
        characters = characters.concat(upper, numbers, specialChar)
    } else (hasLower && hasNumber && hasSpecial) 
        characters = characters.concat(lower, numbers, specialChar)




    // function that generates 1 random character from an array of characters
    // when generating if choose length 8, gonna run for loop for 8 iterations
    var randomPass = [];
    for (var i = 0; i < length; i++) {
        var randomChar = characters[Math.floor(Math.random()* characters.length)]
        randomPass.push(randomChar);  
    }
    password = randomPass.join("");
    
    return(password) 
    
    
    function getPassLength(){
        var passLength = prompt("Input a password length between 8 and 128 characters!");
        if(passLength < 8 || passLength > 128 || isNaN(passLength)){
        alert("Please Input a number between 8 and 128!");
        }
        return(getPassLength)
    }

}
