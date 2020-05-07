const rotate = require('./solution')

it('array moves one place when k = 1', () => {
    let arr = [ 1, 2, 3 ]
    let k = 1

    expect(rotate(arr, k)).toEqual([ 2, 3 ,1 ])
})

it('when k is less than 0, an error message appears', () => {
    let arr = [ 1, 2, 3 ]
    let k = -1

    expect(rotate(arr, k)).toEqual("K must be a greater than or equal to 0")
})

// test to move 3 places
it('array moves two places when k = 3', () => {
    let arr = [ 1, 2, 3, 4, 5, 6, 7 ]
    let k = 3

    expect(rotate(arr, k)).toEqual([ 5, 6, 7, 1, 2, 3, 4 ])
})

// test to move 5 places


// test to move 10 places