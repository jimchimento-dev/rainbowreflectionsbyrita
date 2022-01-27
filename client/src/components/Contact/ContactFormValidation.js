const validation = input => {
    let errors = {};

    if (!input.firstName) {
        errors.firstName = "First name is required."
    }
    if (!input.lastName) {
        errors.lastName = "Last name is required."
    }
    if (!input.email) {
        errors.email = "Email is required."
    } else if (!/\S+@\S+\.\S+/.test(input.email)) {
        errors.email = "Please enter a valid email address."
    }
    if (!input.number) {
        errors.number = "Number is required."
    }
    if (!input.message) {
        errors.message = "Message is required."
    }

    return errors;
}

export default validation;