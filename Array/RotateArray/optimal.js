function reverseTheArray(arr,start,end){
    while(start <= end){
        let temp =arr[start]
        arr[start] = arr[end]
        arr[end] = temp
        start++
        end--
    }
    return arr
}

function rotateTheArray(arr,n,k){
    reverseTheArray(arr,0,k-1)
    reverseTheArray(arr,k,n-1)
    reverseTheArray(arr,0,n-1)
    return arr
}

console.log(rotateTheArray([1,2,3,4,5,6,7,8],[1,2,3,4,5,6,7,8].length,4))