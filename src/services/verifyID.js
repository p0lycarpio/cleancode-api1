
// Make the sum of each digit present in a string or in an integer
function sumDigits(keyValue) {
    let sum = 0

    while (keyValue) {
        sum += keyValue % 10;
        keyValue = Math.floor(keyValue / 10);
    }
    return sum
}

export default function verifyKeyValidity(clé) {
    const alphabet = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
    let SumLoop = parseInt(clé.substring(1))
    let keyValidity = Boolean

    // Run the function and iterates to have number < 15
    do {
        SumLoop = sumDigits(SumLoop)
    } while (SumLoop > 15);

    // Find alphabetic key
    if (clé.includes(alphabet[SumLoop])){
        keyValidity = true
    }
    else{ keyValidity=false; }

    return keyValidity
}