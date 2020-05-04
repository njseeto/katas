const isPalindrome = (number) => {

    // ensure negative numbers return false
    if (number < 0){
        return false
    }

    let reversed = 0
    let copy = number

    while (copy > 0) {
        const lastDigit = copy % 10 // gets the last digit
        reversed = (reversed * 10) + lastDigit
        copy = (copy / 10) | 0 // remove the last digit from the copy
    }
    return number === reversed // check if the numbers are equal (ie: a palindrome), if they are return true, if not false.
}

module.exports = isPalindrome