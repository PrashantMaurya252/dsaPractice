function moveZeros(arr){
    let j=-1
    for(let i=0;i<arr.length;i++){
        if(arr[i] ===0){
            j=i
            break;
        }
    }

    for(let i=j+1;i<arr.length;i++){
        if(arr[i] !==0){
            let temp=arr[i]
            arr[i]=arr[j]
            arr[j]=temp
            j++
        }
    }
    return arr
}

console.log(moveZeros([1,0,0,2,0,5,6,0]))