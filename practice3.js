function countCharacter(str){
    const count = {}

    for(let char of str){
        count[char] = (count[char] || 0) + 1
    }
    return count
}

console.log(countCharacter("Prashant"))