const serviceChecker = require('./solution')

// TEST CASES
test('when given orders from take out array, should return true if servedOrder is ordered', () => {
    const takeOutOrders = [ 5, 6, 7]
    const dineInOrders = [ 2 ]

    const servedOrders = [ 5, 6, 7, 2]

    expect(serviceChecker(takeOutOrders, dineInOrders, servedOrders)).toBeFalsy()
})


// takeOut = [ 1, 3, 5 ] dineIn = [ 2, 4, 6 ]; served order = [ 1, 2, 4, 6, 5, 3 ] is false


// takeOut = [ 17, 8, 24 ] dineIn = [ 12, 19, 2 ]; served order = [ 17, 8, 12, 19, 24, 2 ] is true