function fourSum(nums1){
    const nums = nums1.sort((a,b)=>a-b)
    const n = nums.length
    const set = new Set()
    for(let i = 0;i<n;i++){
        for(let j = i+1;j<n;j++){
            for(let k=j+1;k<n;k++){
                for(let l=k+1;l<n;l++){
                    if(nums[i]+nums[j]+nums[k]+nums[l]===0){
                        const temp =[nums[i],nums[j],nums[k],nums[l]]
                        temp.sort((a,b)=>a-b)
                        set.add(JSON.stringify(temp))
                    }
                }
            }
        }
    }
    const ans = Array.from(set).map(item => JSON.parse(item))
    return ans
}

console.log(fourSum([1,0,-1,0,-2,2]))