function reverseList(node){
    if(node == null || node.next == null){
        return
    }

     p = reverseList(node.next)
     node.next.next = node;
     node.next = null
     return p
}
