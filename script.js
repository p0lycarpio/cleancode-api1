const alphabet = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

// Make the sum of each digit present in a string or in an integer

function sumDigits(str) {
    let sum = 0

    if (!isNaN(str)) { // integer
        while (str) {
            sum += str % 10;
            str = Math.floor(str / 10);
        }
    } else { // string
        sum = str.match(/\d/g).reduce((n, c) => n + +c, 0);
    }
    return sum
}

// Compare abc key

function compare(input, k) {
    let i = input.substr(0, 1)
    return (i == k) ? 1 : 0;
}


export default function programme(input) {
    // Run the function and iterates to have number < 15
    let FirstSum = sumDigits(input)
    let SumLoop = FirstSum

    while (SumLoop > 15) {
        SumLoop = sumDigits(SumLoop)
    }

    // Find alphabetic key
    let key = alphabet[SumLoop]
    return compare(input, key)
}