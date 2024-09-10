// Write a function 'canConstruct(target,wordBank)' that accepts a target string and an array of strings.
// The function should return a boolean indicating whether or not the 'target' can be constructed by concatenating elements of the `WordBank` array
// You may reuse elements of `wordBank` as many times as needed

const canConstruct = (target,wordbank,memo={}) =>{
    if(target in memo) return memo[target]
    if(target === ''){
        return true
    }
    for(let word of wordbank){
        if(target.indexOf(word) === 0){
            const suffix = target.slice(word.length);
        if(canConstruct(suffix,wordbank,memo) === true){
            memo[target] = true
            return true
        }
        }
        
    }
    memo[target] = false
    return false
}

console.log(canConstruct("abcdef",["ab","abc","cd","def","abcd"]))
console.log(canConstruct("skateboard",["bo","rd","ate","t","ska","sk","boar"]))

console.log(canConstruct("eeeeeeeeef",["e","eeeeeee","ee","eeeee","eeeeeeeee","eeee","eeeeee"]))