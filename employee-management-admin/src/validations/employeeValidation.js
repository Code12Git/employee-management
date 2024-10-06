const validateEmployeeData = (data) => {
    const errors = {};

    if (!data.name || !data.name.trim()) {
        errors.name = "Name is required.";
    }

    if (!data.username || !data.username.trim()) {
        errors.username = "Username is required.";
    }

    if (!data.email || !data.email.trim()) {
        errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(data.email.trim())) {
        errors.email = "Email address is invalid.";
    }

    if (!data.department) {
        errors.department = "Department is required.";
    }

    if (!data.position) {
        errors.position = "Position is required.";
    }

    if (!data.phone || !data.phone.trim()) {
        errors.phone = "Phone number is required.";
    } else if (!/^\d+$/.test(data.phone.trim())) {
        errors.phone = "Phone number can only contain digits.";
    }

    return errors;
};

export { validateEmployeeData }