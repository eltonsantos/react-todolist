const Validator = require('validator');
const isEmpty = require('./isEmpty');

const validateRegisterInput = (data) => {
  let errors = {};

  if (isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmpty(data.email)) {
    errors.email = "Email is not valid";
  }

  if (isEmpty(data.password)) {
    errors.password = "Password field is required";
  } else if (!Validator.isLength(data.password, { min: 6, max: 120 })) {
    errors.password = "Password must be between 6 and 120 characters";
  }

  if (isEmpty(data.confirmPassword)) {
    errors.confirmPassword = "Confirm Password field is required";
  } else if (!Validator.equal(data.password, data.confirmPassword)) {
    errors.confirmPassword = "Password and Confirm Password must be the same";
  }

  if (isEmpty(data.name)) {
    errors.name = "Name field is required";
  } else if (!Validator.isLength(data.name, { min: 2, max: 20 })) {
    errors.name = "Name must be between 2 and 20 characters";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  }
}

module.exports = validateRegisterInput;