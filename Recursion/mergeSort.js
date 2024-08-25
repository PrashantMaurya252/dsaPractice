function mergeSort(data,start,end){
    if(start < end){
        let mid = Math.floor((start+end)/2)
        mergeSort(data,start,mid)
        mergeSort(data,mid+1,end)
        merge(data,start,mid,end)
    }
}

function merge(data,start,mid,end){
    const temp = []
    let i = start 
    let j = mid +1
    let k =0

    while (i<= mid && j <=end){
        if(data[i] <= data[j]){
            temp[k] = data[i]
            i++
            k++
        }else{
            temp[k] = data[j]
            j++
            k++
        }
    }
    while( i <= mid){
        temp[k] = data[i]
        i++
        k++
    }
    while(j <= end){
        temp[k] = data[j]
        k++
        j++
    }
    for(i = start;i<=end;i++){
        data[i] = temp[i - start]
    }
}

const data = [-5,20,10,3,2,0]
mergeSort(data,0,data.length - 1)
console.log(data)