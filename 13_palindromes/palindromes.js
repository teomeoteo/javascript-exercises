const palindromes = function (str) {
  let clearStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  let splitStr = clearStr.split('');
  let reversedString = "";
  for (let i = splitStr.length - 1; i >= 0; i--) {
    reversedString += splitStr[i];
  }
  if (reversedString === clearStr) {
    return true;
  }

  else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
