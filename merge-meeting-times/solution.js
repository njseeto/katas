const mergeRanges = (array) => {
    let mergedTimes = []
    const lastElement = array[array.length - 1]
    let startTime = array[0].startTime
    let endTime = array[0].endTime
    let secondStartTime = lastElement.startTime
    let secondEndTime = lastElement.endTime

    if(secondStartTime >= startTime && secondStartTime <= endTime){
        return mergedTimes = [
            {
                startTime: startTime,
                endTime: lastElement.endTime
            }
        ]
    } else if(secondStartTime <= startTime && secondEndTime === endTime){
        return mergedTimes = [
            {
                startTime: secondStartTime,
                endTime: endTime
            }
        ]
    }
    return array
}

module.exports = mergeRanges