// Assignment Code
var generateBtn = document.querySelector("#generate");

//click function to begin asking prompts
generateBtn.addEventListener("click", function () {
  var password = prompt("Would you like to create a password? (Enter yes, or no):");
  password = password.toLowerCase();
  if (password === "yes") {
    generatePassword();
  }
});

function generatePassword() {
  var goodLength = false;
  while (!goodLength) {
    var length = Number(prompt("How many characters would you like in your password? min 8, max 128"));
  // If the correct number of characters isnt typed, will alert message
    if (length < 8) {
    alert("Password must have at least eight characters.");
  } else if (length > 128) {
    alert("Password must have less than 128 character.")       
  } else {
    goodLength = true;
  }
  }
  // Uppercase prompt question with if / else statements
  var Up = prompt("Do you want Uppercase letters in your password? (Enter yes, or no):");

  var upSet = "";
  var Uppercase = "";
  if (Up === "yes") {
    upSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";   
    for (var a = 0; a < length; a++) {
      Uppercase += upSet.charAt(Math.floor(Math.random() * upSet.length));
      console.log(Uppercase)
    }
  } else {
    alert("Ok, no capital letters")
  }  //lowercase prompt question
  var valRet = "";
  var Lower = prompt("Do you want lowercase letters in your password? (Enter yes, or no)");

  var lowSet = "";
  if (Lower === "yes") {
    lowSet = "abcdefghijklmnopqrstuvwxyz"
    
    for (var b = 0; b < length; b++) {
      valRet += lowSet.charAt(Math.floor(Math.random() * lowSet.length));
      console.log(valRet)
    }
  } else {
    alert("Ok no lowercase letters")
  }  // number prompt question
  var Numeric = "";
  var Num = prompt("Do you want numbers in your password? (Enter yes, or no)");
  if (Num === "yes") {
    var numSet = "0123456789"
   
    for (var c = 0; c < length; c++) {
      Numeric += numSet.charAt(Math.floor(Math.random() * numSet.length));
      console.log(Numeric)
    }
  } else {
    alert("Ok no numbers")
  } // specail characters prompt question
  var special = "";
  var characters = prompt("Do you want to special characters in your password? (Enter yes, or no)");
  //var Characters = ["~!@#$%^&*+?<>"]
  var newArray = ["a", "b"]
  
  if (characters === "yes") {
    Characters = "~!@#$%^&*+?<>"
    var charaSet = "";
    for (var d = 0; d < length; d++) {
      charaSet += Characters.charAt(Math.floor(Math.random() * Characters.length));
      console.log(charaSet)

    } 
  } else {
    alert("Ok no specail characters")
  }   // final password generated to uses
  var passWord = "";
  var passWord = Uppercase.concat(valRet, Numeric, charaSet);
  console.log(passWord)
  var finalPass = "";
  for (var e = 0; e < length; e++) {
    finalPass += passWord.charAt(Math.floor(Math.random() * passWord.length));
    console.log(finalPass)
  }
  document.getElementById("password").textContent = finalPass;
  alert("This is your new password: " + finalPass);
}
