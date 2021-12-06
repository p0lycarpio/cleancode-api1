/** @namespace CleService */

const alphabet = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];


/**
 * @name sumDigits
 * @description Do an addition on all terms of an integer
 * @memberof CleService
 * @param {int} keyValue - the value used for addition of all terms
 * @return {int} sum - Sum of all the terms of keyValue
 */
 function sumDigits(keyValue) {
    let sum = 0

    while (keyValue) {
        sum += keyValue % 10;
        keyValue = Math.floor(keyValue / 10);
    }
    return sum
}

/**
 * @name verifierCle
 * @description Verify if a given Key is correct
 * @memberof CleService
 * @param {string} cle - in form of 1 Letter + Numbers
 * @return {int} keyValidity - an Int with a value of 1 or 0 (equivalent to a boolean)
 */
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

/**
 * @name determinerCle
 * @description Calculate and return a key based on an array
 * @memberof CleService
 * @param {int} chiffresInput - Some numbers
 * @return {string} a string in form of the Letter calculated + chiffresInput
 */
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