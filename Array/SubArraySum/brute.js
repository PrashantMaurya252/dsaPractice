function subArraySum(arr,K){
    let count = 0;
    for(let i =0;i<arr.length;i++){
        for(let j = 0;j<arr.length;j++){
            let sum =0 
            for(let k = i;k<=j;k++){
                sum += arr[k]
                
               
            }
            if(sum === K){
                count = Math.max(count,j-i+1)
                console.log(sum,"sum")
                console.log(count,'count')
            }
            
            
        }
    }
    return count
}
console.log(subArraySum([1,2,3,1,1,1,1],10))