
export function ValidateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export function ValidateName(name) {
    const re = /^[0-9a-zA-Z]{1,14}$/;
    return re.test(String(name).toLowerCase());
}

export function ValidatePhone(phone) {
    const re = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]{9,12}$/g;
    return re.test(String(phone).toLowerCase());
}