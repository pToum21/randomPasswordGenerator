// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordArr = [];

// Arrays
const numbers = '0123456789'.split('');
const upperCaseAlphebet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const lowerCaseAlphebet = 'abcdefghijklmnopqrstuvwxyz'.split('');
const specialCharacters = '!#$%&*+-.<=>?^_{|}~'.split('');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button



function generatePassword() {
  let passwordLength = prompt('Enter length of password you want, Must be more then 8 characters and less then 128')
  while (passwordLength > 128 || passwordLength < 8) {

    alert('Your password is the wrong amount of Characters!');
    passwordLength = prompt('Enter length of password you want, Must be more then 8 characters and less then 128')

    // return (False);
  }

  let chooseNumbers = confirm('Would you like to use numbers in you password?');
  let chooseUpperCaseLetters = confirm('Would you like to use uppercase letters in you password?');
  let chooseLowerCaseLetters = confirm('Would you like to use lowercase letters in you password?');
  let chooseSpecialCharacters = confirm('Would you like to use special characters in you password?');

  while (!chooseNumbers && !chooseLowerCaseLetters && !chooseUpperCaseLetters && !chooseSpecialCharacters) {
    alert('You must select a parameter!');
    chooseNumbers = confirm('Would you like to use numbers in you password?');
    chooseUpperCaseLetters = confirm('Would you like to use uppercase letters in you password?');
    chooseLowerCaseLetters = confirm('Would you like to use lowercase letters in you password?');
    chooseSpecialCharacters = confirm('Would you like to use special characters in you password?');
  }

  let newPassWordArr = [];

  if (chooseNumbers) {
    newPassWordArr = newPassWordArr.concat(numbers);
  }
  if (chooseUpperCaseLetters) {
    newPassWordArr = newPassWordArr.concat(upperCaseAlphebet);
  }
  if (chooseLowerCaseLetters) {
    newPassWordArr = newPassWordArr.concat(lowerCaseAlphebet);
  }
  if (chooseSpecialCharacters) {
    newPassWordArr = newPassWordArr.concat(specialCharacters);
  }

  for (let i = 0; i < passwordLength; i++) {
    let randomIndex = (Math.floor(Math.random() * newPassWordArr.length));
    passwordArr += newPassWordArr[randomIndex];
  }
  return passwordArr;
}

generateBtn.addEventListener("click", writePassword);