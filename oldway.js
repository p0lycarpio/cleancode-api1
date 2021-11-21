// Make the sum of digits in a string

for (let i = 0; i < str.length; i++) {
    if (!isNaN(parseInt(str[i]))) {
        sum += parseInt(str[i])
    }
}