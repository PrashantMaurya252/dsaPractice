function longestSubArray(arr,k){
    let right =0;
    let left = 0;
    const n= arr.length;
    let maxLength =0;
    let sum =arr[0]

    while(right < n){
        while(left <= right && sum >k){
            sum -= arr[left];
            left ++;
        }
        if(sum == k){
            maxLength = Math.max(maxLength,right-left+1)
        }
        right++;
        if(right <n) sum +=arr[right]
    }
    return maxLength
}

console.log(longestSubArray([1,1,2,1,1,1,1,1,1,5,3,2],6))