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

  //declairing variables
  var capitalCheck = "";
  var lowercaseCheck = "";
  var numberCheck = "";
  var specialCheck = "";
  var indexNumber = "";
  var characterAdder = "";
  var totalPassword = "";

  //User input
  function userInput(){
    //reset totalCharacters
    totalCharacters = "";
  pwLength = prompt("How many characters would you like your password? (number between 8 and 128)");
  capitalCheck = confirm("Do you want capital letters in your password?");
  lowercaseCheck = confirm("Do you want lowercase letters in your password?");
  numberCheck = confirm("Do you want numbers in your password?");
  specialCheck = confirm("Do you want special characters in your password?");
  }

  
  //check if they have correct user input 
  while(totalCharacters === "" || pwLength < 8 || pwLength > 128){
    userInput();
    //add characters to the totalCharacters string
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
    if(totalCharacters === "" || pwLength < 8 || pwLength > 128){
      //If the while loop will repeat, alert the user
      alert("Please input correct parameters");
    }
  }
//generate random number out of assigned parameters
  for(var i = pwLength; i > 0; i--){
    indexNumber = Math.floor(Math.random() * totalCharacters.length);
    characterAdder = totalCharacters[indexNumber];
    totalPassword = totalPassword + characterAdder;
   }
   //gives back the total password to be output to screen.
   return(totalPassword);
}

