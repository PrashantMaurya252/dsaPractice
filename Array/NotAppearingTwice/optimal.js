function appearingOnce(arr){
    let prev=0
    for(let i=0;i<arr.length;i++){
        prev=prev^arr[i]
        console.log(prev,arr[i])
    }
    return prev
}

console.log(appearingOnce([1,1,2,3,3]))