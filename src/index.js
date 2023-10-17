
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverseString(str) {
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}

const calculator = {
 add: function(a, b) {
    return a + b;
 },
 subtract: function(a, b) {
    return a - b;
 },
 multiply: function(a, b) {
    return a * b;
 },
 divide: function(a, b) {
    if (b === 0) {
      throw new Error('Cannot divide by zero');
    }
    return a / b;
 }
};

function caesarCipher(str, shift) {
    let messege = "";
    for (let i = 0; i < str.length; i++) {
      // Get the ASCII value of the character
      let charCode = str.charCodeAt(i);
      // If the character is a letter, shift it by the given amount
      if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
        // Check if the character is lowercase
        let isLowerCase = charCode >= 97 && charCode <= 122;
        // Shift the character by the given amount, looping back to the start of the alphabet if necessary
        charCode += shift;
        if (isLowerCase && charCode > 122) {
          charCode -= 26;
        } else if (!isLowerCase && charCode > 90) {
          charCode -= 26;
        }
      }
      // Convert the ASCII value back to a character and add it to the encrypted message
      messege += String.fromCharCode(charCode);
    }
    // Return the encrypted message
    return messege;
  }

  function analyzeArray(arr) {
    const sum = arr.reduce((a, b) => a + b, 0 );
    const average = sum / arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const length = arr.length;
    return {
      average,
      min,
      max,
      length,
    };
  }

export  {capitalize, reverseString, calculator, caesarCipher, analyzeArray};
//module.export = {capitalize, reverseString, calculator};