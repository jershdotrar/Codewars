// checks if an operation is called
function inner(num, oper) {
    return (oper) ? oper.call(oper, num) : num;}

// numbers
function zero(oper) {
    return inner(0, oper);}
function one(oper) {
    return inner(1, oper);}
function two(oper) {
    return inner(2, oper);}
function three(oper) {
    return inner(3, oper);}
function four(oper) {
    return inner(4, oper);}
function five(oper) {
    return inner(5, oper);}
function six(oper) {
    return inner(6, oper);}
function seven(oper) {
    return inner(7, oper);}
function eight(oper) {
    return inner(8, oper);}
function nine(oper) {
    return inner(9, oper);}

// operations
function plus(num) {
  return function(result) {
    return result + num;
  };
}

function minus(num) {
  return function(result) {
    return result - num;
  };
}

function times(num) {
  return function(result) {
    return result * num;
  };
}

function dividedBy(num) {
  return function(result) {
    return result / num;
  };
}
