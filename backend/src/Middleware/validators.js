const isValidEmail = function (value) {
    let emailRegex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/;
    if (emailRegex.test(value)) return true;
};

const isValidString = function (value) {
    if (typeof value === "undefined" || value === null) return false;
    //if (typeof value === "string" && value.trim().length === 0) return false;
    return true;
};

const isValidMobile = function (mobile) {
    if (/^[0]?[789]\d{9}$/.test(mobile)) {
        return true
    }
}

const isValidPassword = function (pwd) {
    let passwordRegex =
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,15}$/;

    if (passwordRegex.test(pwd)) {
        return true;
    } else {
        return false;
    }
}

const isValidPrice = function (price) {
    return /^[1-9]\d{0,7}(?:\.\d{1,2})?$/.test(price)
}

module.exports = { isValidMobile, isValidEmail, isValidString, isValidPassword, isValidPrice }