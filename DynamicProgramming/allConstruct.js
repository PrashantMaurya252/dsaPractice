// The function should return a 2D array containing all of the ways that the target can be constructed by concatenating elements of wordBank array Each element of the 2D array should represent one combination that constructs the 'target'.
// You may reuse elements of 'wordBank' as many times as needed.

const allConstruct = (target,wordBank,memo = {}) => {
    if(target in memo) return memo[target];

    if(target === '') return [[]];

    const result = [] ;
    for(let word of wordBank){
        if(target.indexOf(word) === 0){
            const suffix = target.slice(word.length);
            const suffixways = allConstruct(suffix,wordBank,memo)
            const targetWays = suffixways.map(way => [word,...way])
            result .push(...targetWays)
         }
    }
    memo[target] = result
    return result
}

console.log(allConstruct('purple',['purp','p','ur','le','purpl']))
console.log(allConstruct("abcdef",["ab","abc","cd","def","abcd"]))