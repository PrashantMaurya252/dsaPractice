function secondLargest(arr){
    let max=-1;
    let secondMax=-1
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i]
        }
    }
    for(let j=0;j<arr.length;j++){
        if(arr[j]>secondMax && arr[j] !==max){
            secondMax=arr[j]
        }
    }
    return secondMax
}

console.log(secondLargest([99,2,3,49,6]))