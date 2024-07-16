function longestSubArray(arr,k){
    let length = 0;
    for(let i =0;i<arr.length;i++){
        let sum =0
        for(let j=i;j<arr.length;j++){
            sum += arr[j]

            if(sum === k){
                length=Math.max(length,j-i+1)
            }
        }
    }
    return length
}

// console.log(longestSubArray([1,1,2,4,1,1,1,1],3))

function longestSubArray2(arr,k){
    const map =new Map()
    let maxLength =0

    for(let i=0;i<arr.length;i++){
        sum +=arr[i];
        if (sum === k){
            maxLength=max(maxLength,i+1)
        }
        let rem =sum - k;
        if(map.has(rem) != map.get()){}
    }
    return maxLength
}