const romanToInt = (romanNumeral) => {

    const conversation = {
        "I" : 1,
        "V" : 5,
        "X" : 10,
        "L" : 50,
        "C" : 100,
        "D" : 500,
        "M" : 1000
    }

    let romanArray = romanNumeral.toUpperCase().split('')
    let result = []

    romanArray.forEach( letter => {
        result += conversation[letter]
    })

    return parseInt(result)
}

module.exports = romanToInt