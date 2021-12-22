const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = validateLoginInput(data) = {
    let errors = {};

    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";

    if(Validator.isEmpty(data.email)) {
        this.errors.email = "E-mail is required";
    }
    else if(Validator.isEmail(data.email)){
        this.errors.email = "Email is invalid";
    }

    if(Validator.isEmpty(data.password)) {
        this.errors.password = "Password is required";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };

};




