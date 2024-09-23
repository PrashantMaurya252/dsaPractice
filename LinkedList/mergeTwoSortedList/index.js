class ListNode{
    constructor(val,next=null){
        this.val = val
        this.next = next
        
    }
}

class LinkedList{
    constructor(){
        this.head = null
    }
    
    appendLast(val){
        let newNode = new ListNode(val)
       
        if(!this.head){
            this.head =newNode
        }else{
            let current = this.head
            while(current.next){
                current = current.next
            }
            current.next = newNode
        }
    }
}

function mergeTwoSortedList(list1,list2){
    let dummy = new ListNode(-1)
    let current = dummy

    while(list1 !== null && list2 !== null){
        if(list1.val > list2.val){
            current.next =list2
            list2 = list2.next
        }else{
            current.next = list1
            list1 = list1.next
        }
        current = current.next

        
    }

    if(list1 !== null){
        current.next = list1
    }
    if(list2 !== null){
        current.next = list2
    }

    return dummy.next


}

const data1 = new LinkedList()
const data2 = new LinkedList()


data1.appendLast(100)
data1.appendLast(300)
data1.appendLast(500)
data1.appendLast(700)

data2.appendLast(200)
data2.appendLast(400)
data2.appendLast(600)
data2.appendLast(600)



console.log(mergeTwoSortedList(data1.head,data2.head))



