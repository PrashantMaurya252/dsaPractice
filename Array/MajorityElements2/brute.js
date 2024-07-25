function majorityElements2(nums){
    {
        const list = []
        const n = nums.length
        const target = Math.floor(n/3)
        for(let i=0;i<n;i++){
            if(list.length === 0 || list[0] != nums[i]){
                let count =0
                for(let j = 0;j<n;j++){
                    if(nums[j] == nums[i]){
                        count ++
                        if(count > target){
                            list.push(nums[i])
                        }
                    }
                    if(list.length === 2) break;
                }
            }
        }
    
        return list
    };
}

console.log(majorityElements2([2,2]))