// moose voting algo

function majorityElement(arr){
    let count =0
    let element 
    for(let i =0;i<arr.length;i++){
        if(count === 0){
            count = 1
            element = arr[i]
        }else if(arr[i] == element){
            count++
        }
        else{
            count--
        }
    }
    let count1 = 0
    for(let i =0;i<arr.length;i++){
        if(arr[i] == element) count1 ++
    }
    if(count1 > (arr.length/2)){
        return element
    }
    return -1
}

console.log(majorityElement([1,1,2,3,3,3,3,3,3,3,3]))