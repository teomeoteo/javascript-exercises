const reverseString = function(str) {
  const splitStr = str.split('');
  let reversedString = "";
  for (let i = splitStr.length - 1; i >= 0; i--) {
    reversedString += splitStr[i];
  }
  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
