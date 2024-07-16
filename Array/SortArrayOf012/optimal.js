function swap(arr,a,b){
    let temp =arr[a]
    arr[a]=arr[b]
    arr[b]=temp
    return arr
}

console.log(swap([1,2,3,4],1,2))

function sortArray(arr){
    let low = 0;
    let mid = 0;
    let high = arr.length-1
    console.log(high,'n')

    while( mid <= high){
        if(arr[mid] === 0){
            swap(arr,low,mid)
            low++
            mid++
        }
        else if(arr[mid] === 1){
            mid++
        }
        else{
            swap(arr,mid,high)
            
            high--
        }
        console.log(arr)
    }
    return arr
}

console.log(sortArray([0,1,1,2,0,0,1,2]))