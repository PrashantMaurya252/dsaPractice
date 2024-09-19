class treeNode{
    constructor(val,left,right){
        this.val = val
        this.left = null
        this.right = null
    }
}

function arrayToTree(arr){
    if(arr.length === 0) return null
    let root = new treeNode(arr[0])
    let queue = [root]
    

    let i = 1

    while(i < arr.length){
        let current = queue.shift()
        if(i < arr.length && i  !== null){
            current.left = new treeNode(arr[i])
            queue.push(current.left)
        }
        i++

        if(i < arr.length && i  !== null){
            current.right = new treeNode(arr[i])
            queue.push(current.right)
        }
        i++
    }

    return root
}




function invertTree(root){
    if(root === null) return null

    const temp = root.left
    root.left = root.right
    root.right = temp

    invertTree(root.left)
    invertTree(root.right)

    return root
}

function treeToArray(root){
    if(!root) return []

    let result = []
    const queue = [root]

    while(queue.length > 0){
        let node = queue.shift()

        if(node){
            result.push(node.val)
            queue.push(node.left)
            queue.push(node.right)
        }else{
            result.push(null)
        }
    }

    while(result[result.length-1] === null){
        result.pop()
    }

    return result
}

const tree = arrayToTree([4,2,7,1,3,6,9])
const inverseTree = invertTree(tree)
console.log(treeToArray(inverseTree))

