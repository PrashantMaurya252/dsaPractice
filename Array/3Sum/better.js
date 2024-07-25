function threeSum(nums){
    const set = new Set()
    for(let i =0 ;i<nums.length;i++){
        const hashset = new Set()
        for(let j= i+1;j<nums.length;j++){
            let third = -(nums[i]+nums[j])
            if(hashset.has(third)){
                const temp = [nums[i],nums[j],third]
                temp.sort((a,b)=>a-b)
                set.add(JSON.stringify(temp))
            }
            hashset.add(nums[j])
        }
    }
    const ans=Array.from(set).map(item=>JSON.parse(item))
    return ans
}

console.log(threeSum([-1,0,1,2,-1,-4]))