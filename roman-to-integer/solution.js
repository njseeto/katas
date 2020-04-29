const romanToInt = (romanNumeral) => {
    romanNumeral = romanNumeral.toUpperCase().split('')
     // ['I', 'V']
    
    console.log(romanNumeral)

    romanNumeral.forEach(letter => {
        if(letter === 'I'){
            console.log('LETTER: ', letter)
            return 1
        } else if (letter === 'V') {
            return 5
        } else if (letter === 'X') {
            return 10
        } else if (letter === 'L'){
            return 50
        } else if (letter === 'C'){
            return 100
        }
    })
}

module.exports = romanToInt

// split string


// go through each letter and convert to a number