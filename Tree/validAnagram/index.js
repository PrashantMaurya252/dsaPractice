var isAnagram = function(s, t) {
    if (s.length !== t.length) return false

    const count = {}
    console.log(count)

    for(let char of s){
       count[char] = (count[char] || 0) + 1;
    }   for (let char of t) {
        if (!count[char]) {
            return false; 
        }
        count[char] -= 1;
    }
    console.log(count)
    return true;
    
};

console.log(isAnagram('aagay','gyaaa'))