function binarySearch(arr,left,right,x){
   
    if(left > right){
        return -1
    }

    let mid = Math.floor((left + right)/2)

    if(x ===arr[mid]) return mid

    if(x < arr[mid]) return binarySearch(arr,left,mid-1,x)

        return binarySearch(arr,mid+1,right,x)
}

const a=[1,2,3,4,5,6,7]
console.log(binarySearch(a,a[0],a.length-1,4))

