const isPalindrome = (number) => {
    let reversed = 0
    let copy = number

    while (copy > 0) {
        const lastDigit = copy % 10
        reversed = (reversed * 10) + lastDigit
        copy = (copy / 10) | 0
    }
    return number === reversed
}

module.exports = isPalindrome