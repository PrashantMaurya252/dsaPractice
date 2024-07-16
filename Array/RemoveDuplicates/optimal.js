function removeDuplicates(arr){
    let i = 0;
    for(let j=0;j<arr.length;j++){
        if(arr[j] !== arr[i]){
            arr[i+1] = arr[j]
            i++
        }
    }
    return i+1
}
console.log(removeDuplicates([1,1,2,2,3,3,3,4,4,4,4,5,5]))