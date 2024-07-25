function majorityElements2(nums){
    let ele1 =null 
    let ele2 = null
    let count1 = 0
    let count2 = 0
    for(let i=0;i<nums.length;i++){
        if(count1 == 0 && ele2 !=nums[i]){
            count1 =1;
            ele1 = nums[i]
        }else if(count2 == 0 && ele1 != nums[i]){
            count2 =1
            ele2 =nums[i]
        }else if(nums[i] == ele1) count1++;
        else if(nums[i] == ele2) count2++
        else{
            count1--
            count2--
        }
    }
    const list =[]
    count1=0
    count2=0
    for(let i=0;i<nums.length;i++){
        if(ele1 == nums[i]) count1++
        if(ele2 == nums[i]) count2++

    }
    let target = Math.floor(nums.length/3)
    if(count1 >target) list.push(ele1)
    if(count2 >target ) list.push(ele2)
        // target.sort((a,b)=>a-b)

    return list
}

console.log(majorityElements2([2,2]))