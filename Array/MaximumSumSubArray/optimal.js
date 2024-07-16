function maxSum(arr){
    let max =Number.MIN_VALUE
    let sum =0;
    for(let i=0;i<arr.length;i++){
        
        max = Math.max(max,sum)
        sum=sum+arr[i]
        if(sum < 0){
            sum =0
        }

    }
    return max
}

console.log(maxSum([-2,-3,-4,-1,-2,-1,-5,-3]))