const alphabet = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];

// test values
let input = 'J123456789' // passant
let bigin = "E99999999999" // non passant
let intex = 875

// Make the sum of each digit present in a string or in an integer

function sumDigits(str) {
    let sum = 0

    if (!isNaN(str)) {      // integer
        while (str) {
            sum += str % 10;
            str = Math.floor(str / 10);
        }
    } else {                // string
        sum = str.match(/\d/g).reduce((n, c) => n + +c, 0);
    }
    return sum
}


function compare(input, k) {
    let i = input.substr(0,1)
    console.log(i, k)
    return (i == k) ? 1 : 0 ; 
}


function programme(input) {
    // Run the function and iterates to have number < 15
    let FirstSum = sumDigits(input)
    console.log('FirstSum:', FirstSum)
    let SumLoop = FirstSum
    
    while (SumLoop > 15) {
        SumLoop = sumDigits(SumLoop)
        console.log('Looping: ', SumLoop)
    }

    // Find alphabetic key
    let NumericKey = SumLoop;
    let key = alphabet[NumericKey]

    console.log(compare(input, key))
}

programme(input)