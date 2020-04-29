const romanToInt = require('./solution')

test('I should return 1', () => {
    expect(romanToInt('I')).toStrictEqual(1)
})

// test('V should return 5', () => {
//     expect(romanToInt('V')).toStrictEqual(5)
// })

// test('X should return 10', () => {
//     expect(romanToInt('X')).toStrictEqual(10)
// })


// test('L should return 50', () => {
//     expect(romanToInt('L')).toStrictEqual(50)
// })

// test('C should return 100', () => {
//     expect(romanToInt('C')).toStrictEqual(100)
// })


// IV is equal to 4


// VI is equal to 6


// IX is equal to 9


// LVIII is equal to 58


// MCMXCIV is equal to 1994


// should tolerate lower case letters
// test('c should return 100', () => {
//     expect(romanToInt('c')).toStrictEqual(100)
// })