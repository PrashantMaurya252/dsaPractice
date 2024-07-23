function subArraySum(arr,K){
    count = 0;
    for(let i=0;i<arr.length;i++){
        let sum = 0
        for(let j =i;j<arr.length;j++){
            sum +=arr[j];

            if(sum === K){
                count = Math.max(count,j-i+1)
            }
        }
    }
    return count
}

console.log(subArraySum([1,2,3,1,1,1,1],10))