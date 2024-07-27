function numberOfSubArray(nums,target){
    const n = nums.length
    let count=0
    for(let i=0;i<n;i++){
        let XOR=0
        for(let j=i;j<n;j++){
            
            
                XOR=XOR^nums[j]
                if(XOR == target) count++
            
        }
    }
    return count
}

console.log(numberOfSubArray([4,2,2,6,4],6))