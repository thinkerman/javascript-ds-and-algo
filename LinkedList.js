class LinkedList{
    constructor(value){
        this.head = new ListNode();
        this.tail = null;
        this.size = 1
    }
    append(value){
        var head = this.head
        if(!head){
           this.head = new ListNode(value);
        }else{
            while (head) {
                head = head.next
            }
            head.next = new ListNode(value);
        }
       
        this.size++;
    }
    prepend(val){

        if(this.head){
            let oldHead = this.head;
            this.head = new ListNode(val)
            this.head.next = oldHead;
            this.size++
            return true;
        }
        return false;
    }
    deleteHead(){

    }
    deleteTail(){

    }
    search(value){
        var head = this.head;
        while(head){
            if(head.value === value) return true;
            head = head.next
        }
       
        return false;
    }
    list(){
        var head = this.head;
        var values = []
        values.push(this.head.value)
        while(head.next){
            head = head.next;
            values.push(head.value)
        }
       return values
    }
    length(){
        return `There are ${this.size} nodes in the list`;
    }

}
class ListNode{
    constructor(value,prev,next){
        this.value = value || null
        this.prev = prev || null;
        this.next = next || null
    }
}
console.clear();
let ll = new LinkedList(5);

console.log(ll.prepend(10),ll.length(), ll.list(), ll.search(6), ll.prepend(7), ll.list(), ll.prepend(17),ll.list())
ll.append(8)
ll.append(6)
// console.log(ll.tail)
