function searchTarget(arr,t){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===t){
            return i
        }
    }
    return -1
}

console.log(searchTarget([5,2,9,1,7],10))