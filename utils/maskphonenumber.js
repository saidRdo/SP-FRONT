export function maskPhoneNumber(phoneNumber) {
    // Check if the provided phone number is valid
    if (!phoneNumber || typeof phoneNumber !== 'string' || phoneNumber.length !== 10) {
        return 'Invalid phone number';
    }

    // Format the phone number
    return phoneNumber.slice(0, 2) + '******' + phoneNumber.slice(8);
}