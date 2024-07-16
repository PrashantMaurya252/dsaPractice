function longestSubArray(arr,K){
    let length=0
    for(let i=0;i<arr.length;i++){
        for(let j=i;j<arr.length;j++){
            let sum =0;
            for(let k=i;k<=j;k++){
                sum +=arr[k]
                console.log(sum,"sum")
            }
            if( sum === K){
                    
                console.log(i,j,"i","j")
                length = Math.max(length,j-i+1)
                console.log(length,"length")
            }
        }
    }
    return length
}

console.log(longestSubArray([1,2,1,1,1,3],3))