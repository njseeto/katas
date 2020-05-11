const serviceChecker = require('./solution')

// TEST CASES
test('should return FALSE if servedOrder is not first come first serve', () => {
    const takeOutOrders = [1, 3, 5]
    const dineInOrders = [ 2, 4, 6 ]
    const servedOrders = [ 1, 2, 4, 6, 5, 3 ]

    expect(serviceChecker(takeOutOrders, dineInOrders, servedOrders)).toBeFalsy()
})

test('should return TRUE if servedOrder is first come first serve', () => {
    const takeOutOrders = [17, 8, 24]
    const dineInOrders = [ 12, 19, 2 ]
    const servedOrders = [ 17, 8, 12, 19, 24, 2]

    expect(serviceChecker(takeOutOrders, dineInOrders, servedOrders)).toBeTruthy()
})