const romanToInt = require('./solution')

// Check roman numerals equal specific integers
test('I should return 1', () => {
    expect(romanToInt('I')).toEqual(1)
})

test('V should return 5', () => {
    expect(romanToInt('V')).toStrictEqual(5)
})

test('X should return 10', () => {
    expect(romanToInt('X')).toStrictEqual(10)
})

test('L should return 50', () => {
    expect(romanToInt('L')).toStrictEqual(50)
})

test('C should return 100', () => {
    expect(romanToInt('C')).toStrictEqual(100)
})

// Check subtraction and addition logic
test('IV should return 4', () => {
    expect(romanToInt('IV')).toStrictEqual(4)
})

test('VI should return 6', () => {
    expect(romanToInt('VI')).toStrictEqual(6)
})

test('IX should return 9', () => {
    expect(romanToInt('IX')).toStrictEqual(9)
})

test('LVIII should return 58', () => {
    expect(romanToInt('LVIII')).toStrictEqual(58)
})

test('MCMXCIV should return 1994', () => {
    expect(romanToInt('MCMXCIV')).toStrictEqual(1994)
})