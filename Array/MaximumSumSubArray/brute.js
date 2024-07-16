function MaxSum(arr){
    let max = Number.MIN_VALUE
    let sum=Number.MIN_VALUE
    for(let i=0;i<arr.length;i++){
        for(j=i;j<arr.length;j++){
             sum =0
            for(let k=i;k<=j;k++){
                 sum +=arr[k]
                 max =Math.max(sum,max)
            }
        }
    }
    return max
}

console.log(MaxSum([-2,-3,4,-1]))