function intersection(arr1,arr2){
    const visited = new Array(arr2.length).fill(0)
    const ans =[]
    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<arr2.length;j++){
            if(arr1[i] == arr2[j] && visited[j] ==0){
                ans.push(arr1[i])
                visited[j]=1;
                break;

            }
            if(arr2[j] >arr1[i]){
                break
            }
        }
    }
    return ans
}

console.log(intersection([1,2,3,4],[2,3,4]))

