const romanToInt = (romanNumeral) => {

    const conversion = {
        "I" : 1,
        "V" : 5,
        "X" : 10,
        "L" : 50,
        "C" : 100,
        "D" : 500,
        "M" : 1000
    }

    let result = 0

    for (let i = 0; i < romanNumeral.length; i++) {
        // check if roman numeral is larger so we know whether to subtract
        if (conversion[romanNumeral[i]] < conversion[romanNumeral[i+1]]) {
            result-=conversion[romanNumeral[i]]
        }
        else {
            result+=conversion[romanNumeral[i]]
        }
    }
    return result
}

module.exports = romanToInt