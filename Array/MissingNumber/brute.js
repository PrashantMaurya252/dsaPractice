function missingNumber(arr){
    for(i=1;i<=arr.length;i++){
        let flag =0
        for(let j=0;j<arr.length;j++){
            if(arr[j] ==i){
                flag=1
                break;
            }
        }
        if(flag ==0){
            return i
        }
    }
    return -1
}


console.log(missingNumber([1,2,3,5]))