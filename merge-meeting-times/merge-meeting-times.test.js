const mergeRanges = require('./solution.js')

test('when given two objects in the array with different ranges, should return two ranges', () => {
    const arr = [
        { startTime: 0, endTime: 1},
        { startTime: 3, endTime: 5}
    ]

    const result = [
        { startTime: 0, endTime: 1},
        { startTime: 3, endTime: 5}
    ]

    expect(mergeRanges(arr)).toStrictEqual(result)
})

test('when given two objects in the array, it should return single range with increased end time', () => {
    const arr = [
        { startTime: 0, endTime: 1},
        { startTime: 0, endTime: 3}
    ]

    const result = [
        { startTime: 0, endTime: 3}
    ]
    expect(mergeRanges(arr)).toStrictEqual(result)
})

test('when given two objects in the array, it should return single range with increased start time', () => {
    const arr = [
        { startTime: 5, endTime: 10},
        { startTime: 3, endTime: 10}
    ]

    const result = [
        { startTime: 3, endTime: 10}
    ]
    expect(mergeRanges(arr)).toStrictEqual(result)
})

test('when given a number of objects in the array, it should return correct range', () => {
    const arr =  [
        { startTime: 0,  endTime: 1 },
        { startTime: 3,  endTime: 5 },
        { startTime: 4,  endTime: 8 },
        { startTime: 10, endTime: 12 },
        { startTime: 9,  endTime: 10 },
        ]

    const result =  [
        { startTime: 0, endTime: 1 },
        { startTime: 3, endTime: 8 },
        { startTime: 9, endTime: 12 },
        ]

    expect(mergeRanges(arr)).toStrictEqual(result)
})