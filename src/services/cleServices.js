const alphabet = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

// Make the sum of each digit present in a string or in an integer
function sumDigits(keyValue) {
    let sum = 0

    while (keyValue) {
        sum += keyValue % 10;
        keyValue = Math.floor(keyValue / 10);
    }
    return sum
}

export function verifierCle(cle) {
    let SumLoop = parseInt(cle.substring(1))
    let keyValidity

    if (SumLoop > 10000000) {
         // Run the function and iterates to have number < 15
        do {
            SumLoop = sumDigits(SumLoop)
        } while (SumLoop > 15);

        // Find alphabetic key
        if (cle.includes(alphabet[SumLoop])){
            keyValidity = 1
        }
        else{ keyValidity = 0; }
    }else{
        if (cle.includes('Z')){
            keyValidity = 1
        }else { keyValidity = 0;}
    }
    return keyValidity
}

export function determinerCle(chiffresInput) {
    let chiffresCle = chiffresInput
    let cle

    if (chiffresInput > 10000000){
        // Run the function and iterates to have number < 15
        do {
            chiffresCle = sumDigits(chiffresCle)
        } while (chiffresCle > 15);

        // Find alphabetic key
        cle = alphabet[chiffresCle]
    }else{ cle = 'Z'}

    return cle+chiffresInput
}