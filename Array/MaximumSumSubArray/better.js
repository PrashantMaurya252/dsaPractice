function maxSum(arr){
    let max = Number.MIN_VALUE
    for(let i =0;i<arr.length;i++){
        let sum =0
        for(j = i;j<arr.length;j++){
            sum +=arr[j]
            max =Math.max(sum,max)
        }
    }
    return max
}

console.log(maxSum([1,-3,-5,7,9]))