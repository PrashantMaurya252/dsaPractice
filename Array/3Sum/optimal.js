function threeSum(nums1){
    const ans = []
    const nums = nums1.sort((a,b)=>a-b)
    for(let i = 0;i<nums.length;i++){
        if(i>0 && nums[i] == nums[i-1]) continue;
        let j = i+1;
        let k = nums.length - 1

        while(j<k){
            let sum = nums[i] + nums[j] + nums[k]
            if(sum < 0){
                j++
            }
            else if(sum > 0){
                k--
            }
            else{
                const temp = [nums[i],nums[j],nums[k]]
                ans.push(temp)
                j++
                k--
                while(j<k && nums[j] === nums[j-1]) j++;
                while(j<k && nums[k] === nums[k+1]) k--
            }
        }
    }
    return ans

}
console.log(threeSum([-1,0,1,2,-1,-4]))