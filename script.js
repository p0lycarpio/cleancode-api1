const alphabet = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
let input = 'E123456789';
let bigin= "E99"

function sumDigits(str) {
    let sum = 0

 
    if (!isNaN(str)) {
        while (str) {
            sum += str % 10;
            str = Math.floor(str / 10);
        }
    }
    else {
        sum = str.match(/\d/g).reduce((n, c) => n + +c, 0);
    }

    return sum
}




let FirstSum = sumDigits(input)
console.log('FirstSum :', FirstSum)

/* while (FirstSum > 15) {
    Reduced = sumDigits(FirstSum)
    return Reduced
} */

if (FirstSum > 15) {
    let NumericKey = sumDigits(FirstSum);
    console.log('NumericKey', NumericKey)
    console.log(alphabet[NumericKey])
}

else {console.log('error')}