function sumOfNaturalNumbers(inputNumber){
    if(inputNumber <=1) return inputNumber

    return inputNumber + sumOfNaturalNumbers(inputNumber - 1)
}

console.log(sumOfNaturalNumbers(10))