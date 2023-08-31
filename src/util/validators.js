let errors = [];

function ValidationContract() {
    errors = [];

}

ValidationContract.prototype.isRequired = (value, message) => {
    if (!value || value.length <= 0)
        errors.push({ message: message })
}

ValidationContract.prototype.hasMinLength = (value, min, message) => {
    if (!value || value.length < min) {
        errors.push({ message: message });
    }
}

ValidationContract.prototype.hasMaxLength = (value, max, message) => {
    if (!value || value.length > max) {
        errors.push({ message: message });
    }
}

module.exports = ValidationContract;