const checker = require('./solution')

// it('elements in array must be greater than 0', () => {

// })

// it('elements in array must be less than 100', () => {

// })

// it('array length must be more than 2', () => {

// })

it('example 2 use case is true', () => {
    expect([ 6, 5, 4, 8 ]).toEqual([ 2, 1, 0, 3 ])
})

it('example 3 use case is true', () => {
    expect([ 7, 7, 7, 7 ]).toEqual([ 0, 0, 0, 0 ])
})