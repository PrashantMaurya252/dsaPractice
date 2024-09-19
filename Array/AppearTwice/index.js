var appearTwice = function(nums) {
    const count = {}
    for(let i =0;i<nums.length;i++){
        count[nums[i]] = (count[nums[i]] || 0)+1
    }
    for(let ele of nums){
        if(count[ele] !== 2) return ele
    }
   
    return -1
};

console.log(appearTwice([1,1,2,2,3,3,4,4,5,5,6]))