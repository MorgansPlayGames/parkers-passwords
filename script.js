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

function generatePassword(){
  //constants
  var capitalList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercaseList = "abcdefghijklmnopqrstuvwxyz";
  var numberList = "1234567890";
  var specialCharacterList = "`~!@#$%^&*()_-=+[]{}|;':\",.<>?"

  //Password characters allowed
  var totalCharacters = "";

  //User input
  var pwLength = prompt("How many characters would you like your password? (number between 8 and 128)");
  var capitalCheck = confirm("Do you want capital letters in your password?");
  var lowercaseCheck = confirm("Do you want lowercase characters in your password?");
  var numberCheck = confirm("Do you want numbers in your password?");
  var specialCheck = confirm("Do you want special characters in your password?");

  var indexNumber = "";
  var characterAdder = "";
  //Set the total characters used
  if(capitalCheck === true){
    totalCharacters = totalCharacters + capitalList;
  }
  if(lowercaseCheck === true){
    totalCharacters = totalCharacters + lowercaseList;
  }
  if(numberCheck === true){
    totalCharacters = totalCharacters + numberList;
  }
  if(specialCheck === true){
    totalCharacters = totalCharacters + specialCharacterList;
  }

  console.log(totalCharacters);

  for(var i = pwLength; i > 0; i--){

   }
   return(totalCharacters);
}