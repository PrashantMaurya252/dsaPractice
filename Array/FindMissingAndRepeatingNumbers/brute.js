function findMissingAndRepeating(nums){
    let missing = -1
    let repeating = -1
    
    
    const n = nums.length
    for(let i = 1;i<=n;i++){
        let count = 0
        for(let j = 0;j < n;j++){
            if(nums[j] == i) count++
        }
        if(count == 2) repeating = i
        // if(count == 2) ans.push(nums[i])
        else if(count == 0) missing = i
        // else if(count == 0) ans.push(nums[i])
        if( repeating !== -1 && missing !== -1){
            break
        }
    }
    return [repeating,missing]

}

console.log(findMissingAndRepeating([3, 1, 2, 5, 4, 6, 7, 5]))