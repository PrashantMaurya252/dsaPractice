function union(arr1,arr2){
    let unique =new Set()
    let uniqueArray=[]
    for(let i=0;i<arr1.length;i++){
        unique.add(arr1[i])
    }
    for(let i=0;i<arr2.length;i++){
        unique.add(arr2[i])
    }
    uniqueArray=[...unique]
    return uniqueArray
}

console.log(union([1,2,3,4,5],[2,3,7,9]))