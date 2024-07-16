function union(arr1,arr2){
    const n1=arr1.length
    const n2=arr2.length

    let i=0;
    let j=0;
    let union = []
    while(i<n1 && j<n2){
        if(arr1[i] <=arr2[j]){
            if(union.length ==0 || union[union.length-1] !=arr1[i]){
                union.push(arr1[i])
            }
            i++
        }
        else{
            if(union.length ==0 || union[union.length-1] != arr2[j]){
                union.push(arr2[arr2[j]])
            }
            j++
        }
    }
    while(j<n2){
        if(union.length ==0 || union[union.length -1] != arr2[j]){
            union.push(arr2[j])
        }
        j++
    }

    while(i<n1){
        if(union.length ==0 || union[union.length -1] != arr1[i]){
            union.push(arr1[i])
        }
        i++
    }
    return union
}

console.log(union([1,1,2,3,4],[2,2,2,3,4,5,5,5,7,8]))