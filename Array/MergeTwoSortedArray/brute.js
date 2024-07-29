function mergeTwoSortedArray(num1,m,num2,n){
    const array3 = new Array(m+n)
    console.log(array3)
    let left =0
    let right = 0
    let index = 0;
    while(left< n && right < m){
        if(num1[left] <= num2[right]){
            array3[index] = num1[left];
            left++,index++
        }else{
            array3[index] = num2[right]
            right++,index++
        }
    }
    while(left < n){
        array3[index++] = num1[left++];
    }
    while(right < m){
        array3[index++] = num2[right++]
    }
    return array3
}

console.log(mergeTwoSortedArray([1,2,2],3,[4,5,6],3))