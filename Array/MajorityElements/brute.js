function majorityElements(arr,n){
    for(let i=0;i<arr.length;i++){
        let cut =0
        for(let j=0;j<arr.length;j++){
            if(arr[j] == arr[i]){
                cut++
            }
        }
        if(cut > n/2) return arr[i]
    }
    return -1
}

console.log(majorityElements([1,1,1,2,2,2,3,3,3,3,3],6))