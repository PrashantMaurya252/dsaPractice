function moveZero(arr){
    let temp = []
    for(let i=0;i<arr.length;i++){
        if(arr[i] !==0){
            temp.push(arr[i])
        }
    }
    for(let i=0;i<temp.length;i++){
        arr[i]=temp[i]
    }
    let nonZeroNumber=temp.length

    for(let i=nonZeroNumber;i<arr.length;i++){
        arr[i]=0
    }

    return arr
}

console.log(moveZero([1,4,2,3,6,0,0,4,0,9]))