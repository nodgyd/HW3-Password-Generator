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

    var passLength = getPassLength()
    // decide whether user wants to include upper case letters in password 
    var hasUpper = confirm("Would you like Upper Case Characters?!")
    var hasLower = confirm("Would you like Lower Case Characters?!")
    var hasNumber = confirm("Would you like numbers?!")
    var hasSpecial = confirm("Would you like Special Characters?!")

    // 4 positive condition
    if (hasUpper && hasLower && hasNumber && hasSpecial) {
        characters = upper.concat(lower, numbers, specialChar)
    } 
    
    var randomPass = [];
    for (var i = 0; i < passLength; i++) {
        var randomChar = characters[Math.floor(Math.random()* characters.length)]
        randomPass.push(randomChar);  
    }
    password = randomPass.join("");
    // when generating if choose length 8, gonna run for loop for 8 iterations
    
    // create prompt interaction for the number of password between 8 and 128 characters 
    //recursively gather input and validate input until valid
    function getPassLength(){
        var passLength = prompt("Input a password length between 8 and 128 characters!");
        if(passLength < 8 || passLength > 128 || isNaN(passLength)){
            alert("Please Input a number between 8 and 128!")
            return getPassLength();
        }
    }
    console.log(getPassLength())
    return(password)  
}
// function that generates 1 random character from an array of characters
