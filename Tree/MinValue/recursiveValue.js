class Node {
    constructor(val){
        this.val = val;
        this.left = null
        this.right = null
    }
}

const treeMinValue = (root)=>{
    if(root === null) return Infinity
    const leftMin = treeMinValue(root.left)
    const rightMin = treeMinValue(root.right)
    console.log(leftMin,"Left Min")
    console.log(rightMin,"Right Min")
    return (Math.min(root.val,leftMin,rightMin))
}

const a = new Node(4)
const b = new Node(6)
const c = new Node(7)
const d = new Node(5)
const e = new Node(3)
const f = new Node(2)


a.left = b
a.right = c
b.left = d
b.right = e
c.right = f

console.log(treeMinValue(a))