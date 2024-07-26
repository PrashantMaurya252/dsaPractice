function fourSum(nums,target){
    const set = new Set()
    const n = nums.length;
    for(let i = 0;i<n;i++){
        for(let j=i+1;j<n;j++){
            const hashset = new Set()
            for(let k = j+1;k<n;k++){
                let fourth =target -(nums[i]+nums[j]+nums[k])
                if(hashset.has(fourth)){
                    const temp = [nums[i],nums[j],nums[k],fourth]
                    temp.sort((a,b)=>a-b)
                    set.add(JSON.stringify(temp))
                }
                hashset.add(nums[k])

            }
        }
    }
    const ans = Array.from(set).map(item=>JSON.parse(item))
    return ans

}
console.log(fourSum([1,0,-1,0,-2,2],0))