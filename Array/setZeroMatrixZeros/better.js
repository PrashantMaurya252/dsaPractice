function zeroMatrix(){
    const n=matrix.length;
    const m=matrix[0].length;
    const row =new Array(n).fill(0)
    const col=new Array(m).fill(0)

    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(matrix[i][j] ===0){
                row[i]=1
                col[j]=1
            }
        }
    }
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(row[i] || row[j]){
                matrix[i][j]=0
            }
        }
    }
    return matrix
}

const matrix = [[1,1,1],[1,0,1],[1,1,1]]

const ans =zeroMatrix(matrix)

console.log("Final ans is")
for(row of ans){
    console.log(row.join(" "))
}