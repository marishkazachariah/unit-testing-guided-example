function sum(a, b) {
  return (!a && !b) ? 0 : (!b) ? a : a + b;
}

function subtract(a, b) {
  return (!a && !b) ? 0 : (!b) ? a : a - b;
}

function divide(a, b) {
  if (!a && !b) {
    return 0;
  } else if (!b) {
    throw new Error('Cannot divide by 0');
  } else {
    return a / b;
  }
}

function multiply(a, b) {
  return (!a && !b) ? 0 : (!b) ? 0 : a * b;
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
