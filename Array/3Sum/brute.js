function threeSum(nums1){
      const nums=nums1.sort((a,b)=>a-b)
      const set = new Set()
      const n = nums.length
      
      for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
            for(let k=j+1;k<n;k++){
                if(nums[i]+nums[j]+nums[k] === 0){
                    const temp = [nums[i],nums[j],nums[k]]
                    temp.sort((a,b)=>a-b)
                    set.add(JSON.stringify(temp))
                    
                }
            }
        }
      }
      const ans = Array.from(set).map(item => JSON.parse(item))
      
       return ans
}

console.log(threeSum([-1,0,1,2,-1,-4]))