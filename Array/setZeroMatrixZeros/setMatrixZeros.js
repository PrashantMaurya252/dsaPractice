const markRow=(matrix,n,m,i)=>{
    for(let j=0;j<m;j++){
        
        if(matrix[i][j] !==0){
            matrix[i][j] =-1
        }
    }
}

const markCol=(matrix,n,m,j)=>{
    for(let i=0;i<n;i++){
       
        if(matrix[i][j] !==0){
            matrix[i][j]=-1
        }
    }
}

const zeroMatrix=(matrix,n,m)=>{
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            
            if(matrix[i][j] ===0){
                markRow(matrix,n,m,i)
                markCol(matrix,n,m,j)
            }
        }
    }

    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(matrix[i][j]===-1){
                matrix[i][j]=0
            }
        }
    }
    return matrix
}

const matrix=[
    [1,1,1],
    [1,0,1],
    [1,1,1],
]

const n=matrix.length;
const m=matrix[0].length;

const ans = zeroMatrix(matrix,n,m)

console.log("Final Matrix is")

for(let i=0;i<n;i++){
    console.log(ans[i].join(" "))
}