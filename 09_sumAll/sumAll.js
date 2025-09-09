const sumAll = function(a,b) {
  if (a >= 0 && b >= 0) {
    var sum = 0;
    for (var i = a; i <= b; i++) {
      sum += i;
    }
    return sum;
  }
};

// Do not edit below this line
module.exports = sumAll;
