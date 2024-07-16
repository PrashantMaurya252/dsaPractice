function secondLargest(arr){
    let max =arr[0]
    let secondMax = -1
    for(let i=0;i<arr.length;i++){
        
        if(arr[i] >max){
            secondMax=max
            max=arr[i]
        }
        else if(arr[i] < max && arr[i] > secondMax){
            secondMax =arr[i]
        }
    }
    return secondMax
}

console.log(secondLargest([7,5,3,2,6]))