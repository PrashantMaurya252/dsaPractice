function mergeOverLappingInterval(nums){
    const n = nums.length
    const ans = []
    nums.sort((a,b)=>a-b)
    for(let i =0;i<n;i++){
        let start = nums[i][0]
        let end = nums[i][1]
        if(ans.length && end <= ans[ans.length-1][1]){
            console.log(ans.length,"ans.length")
            console.log(ans[ans.length-1][1],"ans length[1]")
            console.log(end,"end")
            console.log(start,"start")
            continue
        }

        for(let j = i+1;j<n;j++){
            if(nums[j][0] <=end){
                end = Math.max(end,nums[j][1])
            }else{
                break;
            }
        }
        ans.push([start,end],"start end")
    }
    return ans
}

console.log(mergeOverLappingInterval( [[1, 3], [8, 10], [2, 6], [15, 18]]))