function removeDuplicates(arr){
    const unique=new Set()
    for(let i=0;i<arr.length;i++){
        unique.add(arr[i])
    }
    return unique
}

console.log(removeDuplicates([1,1,2,2,3,3,3,4]))