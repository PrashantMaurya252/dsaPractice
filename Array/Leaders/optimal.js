function leadersArray(arr){
    let max = 0
    const ans = []
    let n = arr.length
    for(let i=n-1;i>0;i--){
        if(arr[i] > max){
           ans.push(arr[i])
        }
        max = Math.max(max,arr[i])
    }
    return ans
}

console.log(leadersArray([10,22,12,3,0,6]))