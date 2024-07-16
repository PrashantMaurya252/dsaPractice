// if you have to find a element located at nth row and rth column


function nCr(n,r){
    let res=1
    for(let i=0;i<r;i++){
        res=res*(n-i)
        res=res/(i+1)
    }
    return res
}

// console.log(nCr(4,2))



// If you have to print a particular row of pascal triangle

function printRow(n){
    let ans=1
    let ansRow=[1]
    console.log(ans)
    for(let i=1;i<n;i++){
        ans=ans*(n-i)
        ans=ans/i
        ansRow.push(ans)
        console.log(ans)
    }
    return ansRow
    
}

// printRow(6)

// if you have to print entire pascal triangle

function printPascal(n){
    const ans =[]
    for(let i=1;i<=n;i++){
        const temp=[]
        for(let j=1;j<=i;j++){
            temp.push(nCr(i-1,j-1))
        }
        ans.push(temp)
    }
    return ans
}

const ans = printPascal(5);
for (let i = 0; i < ans.length; i++) {
    console.log(ans[i].join(" ") + "n");
}

function printPascal2(n){
    let ans=[]
    for(let i=1;i<=n;i++){
        ans.push(printRow(i))
    }
    return ans
}
let ans2 = printPascal2(5);
for (let i = 0; i < ans2.length; i++) {
    console.log(ans2[i].join(" "));
}