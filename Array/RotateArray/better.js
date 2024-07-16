function rotateArrayByk(arr,k){
    const  temp = [1,2,3]

    for(let i=k;i<arr.length;i++){
        arr[i-k] = arr[i]
    }
     

     for(i=arr.length-k;i<arr.length;i++){
        arr[i]=temp[i-(arr.length-k)]
        
     }
     return arr
}

// console.log(rotateArrayByk([1,2,3,4,5,6,7,8],3))

function rotate(arr,n,d){
    d=d%n
    let temp=[]
    for(let i=0;i<d;i++){
        temp[i] =arr[i]
    }
    for(i=d;i<n;i++){
        arr[i-d] = arr[i]
    }
    for(let i=n-d;i<n;i++){
        arr[i]=temp[i-(n-d)]
    }
    return arr
}

console.log(rotate([7,8,9,10,11,12,13,14],[7,8,9,10,11,12,13,14].length,4))