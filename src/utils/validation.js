function validateFibonacci(num) {
  if (typeof num !== 'number' || num < 0 || !Number.isInteger(num)) {
    return { valid: false, msg: 'fibonacci must be a non-negative integer' };
  }
  if (num > 50) {
    return { valid: false, msg: 'fibonacci too large (max 50)' };
  }
  return { valid: true };
}

function validatePrime(arr) {
  if (!Array.isArray(arr)) {
    return { valid: false, msg: 'prime must be an array' };
  }
  if (arr.length === 0 || arr.length > 100) {
    return { valid: false, msg: 'prime array size 1-100' };
  }
  if (!arr.every(n => Number.isInteger(n) && n > 0)) {
    return { valid: false, msg: 'all prime elements must be positive integers' };
  }
  return { valid: true };
}

function validateLcm(arr) {
  if (!Array.isArray(arr)) {
    return { valid: false, msg: 'lcm must be an array' };
  }
  if (arr.length === 0 || arr.length > 10) {
    return { valid: false, msg: 'lcm array size 1-10' };
  }
  if (!arr.every(n => Number.isInteger(n) && n > 0)) {
    return { valid: false, msg: 'all lcm elements must be positive integers' };
  }
  return { valid: true };
}

function validateHcf(arr) {
  if (!Array.isArray(arr)) {
    return { valid: false, msg: 'hcf must be an array' };
  }
  if (arr.length === 0 || arr.length > 10) {
    return { valid: false, msg: 'hcf array size 1-10' };
  }
  if (!arr.every(n => Number.isInteger(n) && n > 0)) {
    return { valid: false, msg: 'all hcf elements must be positive integers' };
  }
  return { valid: true };
}

function validateAI(question) {
  if (typeof question !== 'string' || question.trim().length === 0) {
    return { valid: false, msg: 'AI must be a non-empty string' };
  }
  if (question.length > 500) {
    return { valid: false, msg: 'AI question too long (max 500)' };
  }
  return { valid: true };
}

module.exports = {
  validateFibonacci,
  validatePrime,
  validateLcm,
  validateHcf,
  validateAI
};
