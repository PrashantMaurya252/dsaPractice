class Stack{
    constructor(){
        this.stack = []
    }
    push(element){
        this.stack.push(element)
    }

    pop(){
        if(this.isEmpty()){
            return "Stack is empty"
        }

        return this.stack.pop()
    }

    peek(){
        if(this.isEmpty()){
            return "Stack is Empty"
        }
        return this.stack[this.size() - 1]
    }

    isEmpty(){
        return this.stack.length ===0
    }

    size(){
        return this.stack.length
    }
}

const stack = new Stack();

stack.push(10)
stack.push(69)
stack.push(420)
stack.pop()

console.log(stack.peek())