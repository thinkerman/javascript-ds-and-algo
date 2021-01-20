class Stack{
    constructor(){
        
        this.store = {}
        this.count = 0;
    }
    push(el){
        this.store[this.count] = el;
        this.count++;
    }
    pop(){
        var removed = this.store[this.count]
        delete this.store[this.count];
        this.count--;
        return removed;
    }
    peeks(){
        return this.store[this.count]
    }
    all(){
        return Object.values(this.store);
    }
}
var s = new Stack()

module.export  = Stack;