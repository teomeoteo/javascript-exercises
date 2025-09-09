const removeFromArray = function(array, ...args) {
  let newArray  = array.filter(e => !args.includes(e));
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
