// The function should return the number of ways that the 'target' can be constructed by concatenating elements of the 'wordBank' array
// You may reuse elements of 'wordBank' as many times as needed

const countConstruct = (target,wordBank,memo = {}) =>{
    if(target in memo) return memo[target]
    if(target === '') return 1;
    let totalCount = 0;
    for(let word of wordBank){
        if(target.indexOf(word) === 0){
            const numWaysForRest = countConstruct(target.slice(word.length),wordBank,memo)
            totalCount += numWaysForRest;
        }
    }
    memo[target] = totalCount
    return totalCount
}

console.log(countConstruct('purple',['purp','p','ur','le','purpl']))
console.log(countConstruct("abcdef",["ab","abc","cd","def","abcd"]))
console.log(countConstruct("skateboard",["bo","rd","ate","t","ska","sk","boar"]))
console.log(countConstruct("eeeeeeeeef",["e","eeeeeee","ee","eeeee","eeeeeeeee","eeee","eeeeee"]))