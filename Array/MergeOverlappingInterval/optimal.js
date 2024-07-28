function mergeOverLappingInterval(nums){
    const n = nums.length
    if (n === 0) return [];
    nums.sort((a,b)=>a[0]-b[0])
    const ans = [nums[0]]
    nums.sort((a,b)=>a[0]-b[0])
    for(let i =1;i<n;i++){
        const last = ans[ans.length-1]
        const curr = nums[i]
        if(curr[0] <= last[1]){
            last[1] = Math.max(last[1],curr[1])
        }else{
            ans.push(curr)
        }
    }
    return ans
}

console.log(mergeOverLappingInterval( [[1,4],[0,4]]))