function notAppearingTwice(arr){
    
    for(let i=0;i<arr.length;i++){
        let count =0
        for(j=0;j<arr.length;j++){
            if(arr[j] ==arr[i]){
                count++
            }
            if(count ==0){
                return arr[i]
            }
        }
    }
}

console.log(notAppearingTwice([1,1,2,3,3,4,4]))