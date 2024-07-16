function missingNumber(arr){
    const n=arr.length+1
    let sum =(n*(n+1))/2;
    let s2=0
    let ans=sum-s2
    console.log(sum)
    for(let i=0;i<arr.length;i++){
         s2=s2+arr[i]
    }
    return sum - s2
}

console.log(missingNumber([1,2,3,4]))