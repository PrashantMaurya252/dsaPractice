function rotateArrayByk(arr,k){
    const  temp = [1,2,3]

    for(let i=k;i<navigator;i++){
        arr[i-k] = arr[i]
    }
     let j=0

     for(i=arr.length-k;i<arr.length;i++){
        arr[i]=temp[j]
        j++
     }
     return arr
}

console.log(rotateArrayByk([1,2,3,4,5,6,7,8],3))