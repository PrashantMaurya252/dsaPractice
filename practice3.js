function invertTree(root) {
    if (root === null) {
      return null;
    }
  
    // Swap the left and right children
    const temp = root.left;
    root.left = root.right;
    root.right = temp;
  
    // Recursively invert the left and right subtrees
    invertTree(root.left);
    invertTree(root.right);
  
    return root;
  }
  console.log(invertTree([2,1,3]))