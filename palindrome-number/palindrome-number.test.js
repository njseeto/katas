const isPalindrome = require('./solution')

it('should return true when 121', () => {
    expect(isPalindrome(121)).toBeTruthy()
})

it('should return false when 123', () => {
    expect(isPalindrome(123)).toBeFalsy()
})

it('should return false when 1231', () => {
    expect(isPalindrome(1231)).toBeFalsy()
})

it('should return false when 1221', () => {
    expect(isPalindrome(1221)).toBeTruthy()
})

it('should return false when negative number', () => {
    expect(isPalindrome(-121)).toBeFalsy()
})