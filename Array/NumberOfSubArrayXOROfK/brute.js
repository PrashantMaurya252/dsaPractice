// wrong array

function numberOfSubArray(nums,target){
    const n = nums.length
    let count=0
    for(let i=0;i<n;i++){
        for(let j=i;j<n;j++){
            let XOR=0
            for(let k = i;k<j;k++){
                XOR=XOR^nums[k]
                if(XOR == target) count++
            }
        }
    }
    return count
}

console.log(numberOfSubArray([4,2,2,6,4],6))