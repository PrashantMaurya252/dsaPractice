function leadersArray(arr){
    const ans=[]
    for(let i =0;i<arr.length;i++){
        let leader = true ;
        for(let j=i+1;j<arr.length;j++){
            if( arr[j]>arr[i]){
                leader = false
                break;
            }
        }
        if(leader == true) {
             ans.push(arr[i])
        }
    }
    return ans
}

console.log(leadersArray([10,22,12,3,0,6]))