var missingNumber = function(nums) {
     const n = nums.length
     let expectedSum = (n*(n+1))/2
     let actualSum = nums.reduce((acc,curr)=>acc+curr,0)
     return expectedSum - actualSum
};

console.log(missingNumber([3,0,1,5,6,2]))