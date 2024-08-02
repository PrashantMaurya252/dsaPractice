function findMissingAndRepeating(nums){
    const n = nums.length

    const Sn = (n*(n+1))/2
    const S2n = (n*(n+1)*(2*n+1))/6

    let S =0
    let S2 =0
    for(let i=0;i<n;i++){
        S +=nums[i]
        S2 += nums[i]*nums[i]
    }

    const val1=S-Sn
    let val2 = S2-S2n

    val2 = val2/val1
    const x = (val1+val2)/2
    const y = x - val1
    return [x,y]
}

console.log(findMissingAndRepeating([3, 1, 2, 5, 4, 6, 7, 5]))