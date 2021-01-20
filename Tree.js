class Node{
    constructor(value,left,right){
        this.val = value || null;
        this.left = left ||  null;
        this.right = right || null;
    }
}
class Tree {
    constructor(root){
        this.root = new Node(root)
        this.count = 1;
    }

    append(value){
       

        let newNode = new Node(value)
        let traverse = node => {
            if(value < node.val){
                if(node.left == null){
                    node.left = newNode;
                    this.count++
                }else{
                    return traverse(node.left)
                }
            }else{
                if(node.right == null){
                    node.right = newNode
                    this.count++
                }else{
                    return traverse(node.right)
                }
            }
           
        }
        traverse(this.root);
    }
    size(){
        return this.count;
    }
    head(){
        console.log(this.root);
    }
    bfs(){
        let stack = []

    }
}
let t = new Tree(4);
t.append(5);
t.append(2);
t.head()
// console.log(t.append(5))


console.log(t.size())
