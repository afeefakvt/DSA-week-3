//bst insert
// class Node{
//     constructor(value){
//         this.value = value
//         this.right = null
//         this.left = null

//     }
   
// }
// class BinarySearchTree{
//     constructor(){
//         this.root = null
//     }

//     isEmpty(){
//         return this.root === null
//     }
//     insert(value){
//         const node  = new Node(value)
//         if(this.isEmpty()){
//             this.root = node
//         }else{
//             this.insertNode(this.root,node)
//         }
//     }
//     insertNode(root,node){
//         if(node.value<root.value){
//             if(root.left ===null){
//                 root.left = node
//             }else{
//                 this.insertNode(root.left,node)
//             }
//         }else{
//             if(root.right===null){
//                 root.right = node
//             }else{
//                 this.insertNode(root.right,node)
//             }
//         }
//     }
        
// }
// const bst = new BinarySearchTree()
// console.log(bst.isEmpty());

// bst.insert(10)
// bst.insert(5)
// bst.insert(15)
// bst.insert(3)
// bst.insert(7)




//bst search

// class Node{
//     constructor(value){
//         this.value = value
//         this.right = null
//         this.left = null

//     }
   
// }
// class BinarySearchTree{
//     constructor(){
//         this.root = null
//     }

//     isEmpty(){
//         return this.root === null
//     }
//     insert(value){
//         const node  = new Node(value)
//         if(this.isEmpty()){
//             this.root = node
//         }else{
//             this.insertNode(this.root,node)
//         }
//     }
//     insertNode(root,node){
//         if(node.value<root.value){
//             if(root.left ===null){
//                 root.left = node
//             }else{
//                 this.insertNode(root.left,node)
//             }
//         }else{
//             if(root.right===null){
//                 root.right = node
//             }else{
//                 this.insertNode(root.right,node)
//             }
//         }
//     }
//     search(root,value){
//         if(!root){
//             return false
//         }else{
//             if(root.value===value){
//                 return true
//             }else if(value<root.value){
//                 return this.search(root.left,value)
//             }else{
//                 return this.search(root.right,value)
//             }
//         }


//     }
// }
    
// const bst = new BinarySearchTree()
// console.log(bst.isEmpty());

// bst.insert(10)
// bst.insert(5)
// bst.insert(15)
// bst.insert(3)
// bst.insert(7)

// console.log(bst.search(bst.root,10));




// //dfs
// class Node{
//     constructor(value){
//         this.value = value
//         this.right = null
//         this.left = null

//     }
   
// }
// class BinarySearchTree{
//     constructor(){
//         this.root = null
//     }

//     isEmpty(){
//         return this.root === null
//     }
//     insert(value){
//         const node  = new Node(value)
//         if(this.isEmpty()){
//             this.root = node
//         }else{
//             this.insertNode(this.root,node)
//         }
//     }
//     insertNode(root,node){
//         if(node.value<root.value){
//             if(root.left ===null){
//                 root.left = node
//             }else{
//                 this.insertNode(root.left,node)
//             }
//         }else{
//             if(root.right===null){
//                 root.right = node
//             }else{
//                 this.insertNode(root.right,node)
//             }
//         }
//     }
  
//     preOrder(root){
//         if(root){
//             console.log(root.value);
//             this.preOrder(root.left)
//             this.preOrder(root.right)
            
//         }
//     }
//     postOrder(root){
//         if(root){
//             this.postOrder(root.left)
//             this.postOrder(root.right)
//             console.log(root.value);
            
//         }
//     }
//     inOrder(root){
//         if(root){
//             this.inOrder(root.left)
//             console.log(root.value);
//             this.inOrder(root.right)
            
//         }
//     }

        
// }
// const bst = new BinarySearchTree()
// console.log(bst.isEmpty());

// bst.insert(10)
// bst.insert(5)
// bst.insert(15)
// bst.insert(3)
// bst.insert(7)


// bst.preOrder(bst.root)



// //bfs
// class Node{
//     constructor(value){
//         this.value = value
//         this.right = null
//         this.left = null
//     }
// }
// class BinarySearchTree{
//     constructor(){
//         this.root = null
//     }

//     isEmpty(){
//         return this.root ===null
//     }
//     insert(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.root = node
//         }else{
//             this.insertNode(this.root,node)
//         }
//     }
//     insertNode(root,node){
//         if(node.value<root.value){
//             if(root.left===null){
//                 root.left = node
//             }else{
//                 this.insertNode(root.left,node)
//             }
//         }else{
//             if(root.right ===null){
//                 root.right = node
//             }else{
//                 this.insertNode(root.right,node)
//             }
//         }
//     }
// levelOrder(){
//     const queue = []
//     queue.push(this.root)
//     while(queue.length){
//         let curr = queue.shift()
//         console.log(curr.value);
//         if(curr.left){
//             queue.push(curr.left)
//         }
//         if(curr.right){
//             queue.push(curr.right)
//         }
        
//     }
// }
// }

// const bst = new BinarySearchTree()
// bst.insert(10)
// bst.insert(5)
// bst.insert(15)
// bst.insert(3)
// bst.insert(7)

// bst.levelOrder()

//min and max 

// class Node{
//     constructor(value){
//         this.value = value
//         this.right  = null
//         this.left = null
//     }
// }
// class BinarySearchTree{
//     constructor(){
//         this.root = null
//     }
//     isEmpty(){
//         return this.root===null
//     }
//     insert(value){
//         const node  = new Node(value)
//         if(this.isEmpty()){
//             this.root = node
//         }else{
//             this.insertNode(this.root,node)
//         }
//     }
//     insertNode(root,node){
//         if(node.value<root.value){
//             if(root.left===null){
//                 root.left = node
//             }else{
//                 this.insertNode(root.left,node)
//             }
//         }else{
//             if(root.right===null){
//                 root.right = node
//             }else{
//                 this.insertNode(root.right,node)
//             }
//         }
//     }
//    min(root = this.root){
//     if(!root.left){
//         return root.value
//     }else{
//         return this.min(root.left)
//     }
//    }
//    max(root = this.root){
//     if(!root.right){
//         return root.value
//     }else{
//         return this.max(root.right)
//     }
//    }
// }

// const bst = new BinarySearchTree()
// bst.insert(10)
// bst.insert(20)
// bst.insert(30)

// console.log(bst.min());

//delete a node

// class Node{
//     constructor(value){
//         this.value = value
//         this.right = null
//         this.left = null
//     }
// }
// class BinarySearchTree{
//     constructor(){
//         this.root =null
//     }
//     isEmpty(){
//         return this.root===null
//     }
//     insert(value){
//         const node  = new Node(value)
//         if(this.isEmpty()){
//             this.root = node
//         }else{
//             this.insertNode(this.root,node)
//         }
//     }
//     insertNode(root,node){
//         if(node.value<root.value){
//             if(root.left===null){
//                 root.left = node
//             }else{
//                 this.insertNode(root.left,node)
//             }
//         }else{
//             if(root.right===null){
//                 root.right = node
//             }else{
//                 this.insertNode(root.right,node)
//             }
//         }

//     }

//     levelOrder(){
//         const queue  =[]
//         queue.push(this.root)
//         while(queue.length){
//             let curr  = queue.shift()
//             console.log(curr.value);
//             if(curr.left){
//                 queue.push(curr.left)
//             }
//             if(curr.right){
//                 queue.push(curr.right)
//             }
//         }

//     }
//     min(root = this.root){
//         if(!root.left){
//             return root.value
//         }else{
//             return this.min(root.left)
//         }
//     }
//     max(root = this.root){
//         if(!root.right){
//             return root.value
//         }else{
//             return this.max(root.right)
//         }
//     }
//     delete(value){
//         this.root = this.deleteNode(this.root,value)
//     }
//     deleteNode(root,value){
//         if(!root){
//             return root
//         }
//         if(value<root.value){
//             root.left = this.deleteNode(root.left,value)
//         }else if(value>root.value){
//             root.right = this.deleteNode(root.right,value)
//         }else{
//             if(!root.right&& !root.left){
//                 return null
//             }
//             if(!root.right){
//                 return root.left
//             }else if(!root.left){
//                 return root.right
//             }
//             root.value = this.min(root.right)
//             root.right  = this.deleteNode(root.right,value)
//         }
//         return root
//     }

// }
// const bst = new BinarySearchTree()
// bst.insert(10)
// bst.insert(20)
// bst.insert(30)
// bst.insert(15)
// bst.insert(25)
// bst.levelOrder()


// bst.delete(20)
// bst.levelOrder()


//height of a node/ and tree
// class Node{
//     constructor(value){
//         this.value = value
//         this.right = null
//         this.left = null

//     }
   
// }
// class BinarySearchTree{
//     constructor(){
//         this.root = null
//     }

//     isEmpty(){
//         return this.root === null
//     }
//     insert(value){
//         const node  = new Node(value)
//         if(this.isEmpty()){
//             this.root = node
//         }else{
//             this.insertNode(this.root,node)
//         }
//     }
//     insertNode(root,node){
//         if(node.value<root.value){
//             if(root.left ===null){
//                 root.left = node
//             }else{
//                 this.insertNode(root.left,node)
//             }
//         }else{
//             if(root.right===null){
//                 root.right = node
//             }else{
//                 this.insertNode(root.right,node)
//             }
//         }
//     }
//     height(node){
//         if(node===null){
//             return -1
//         }
//         let leftHeight = this.height(node.left)
//         let rightHeight  = this.height(node.right)

//        return Math.max(leftHeight,rightHeight)+1
//     }

//   search(node,value){
//     if(!node){
//         return node
//     }
//     if(node.value ===value){
//         return node
//     }else if(node.value<value){
//         return this.search(node.right,value)
//     }else{
//         return this.search(node.left,value)
//     }
//   }
//   findHeight(value){
//     const node = this.search(this.root,value)

//     if(node===null){
//         return -1
//     }
//         return this.height(node)
//   }
        
// }
// const bst = new BinarySearchTree()
// console.log(bst.isEmpty());

// bst.insert(10)
// bst.insert(5)
// bst.insert(15)
// bst.insert(3)
// bst.insert(7)
// console.log(bst.findHeight(5));





// class Node{
//     constructor(value){
//         this.value = value
//         this.right = null
//         this.left = null
//     }
// }
// class BinarySearchTree{
//     constructor(){
//         this.root = null
//     }
//     isEmpty(){
//         return this.root ===null
//     }
//     insert(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.root = node
//         }else{
//             this.insertNode(this.root,node)
//         }
//     }
//     insertNode(root,node){
//         if(node.value<root.value){
//             if(root.left===null){
//                 root.left = node
//             }else{
//                 this.insertNode(root.left,node)
//             }
//         }else{
//             if(root.right===null){
//                 root.right = node
//             }else{
//                 this.insertNode(root.right,node)
//             }
//         }
//     }

//     height(node){
//         if(node===null){
//             return -1
//         }
//         let leftHeight = this.height(node.left)
//         let rightHeight  = this.height(node.right)

//        return Math.max(leftHeight,rightHeight)+1
//     }

//     search(root,value){
//         if(!root){
//             return root
//         }
//         if(root.value===value){
//             return root
//         }else if(value<root.value){
//             return this.search(root.left,value)
//         }else{
//             return this.search(root.right,value)
//         }

//     }
//     findHeight(value){
//         const node  = this.search(this.root,value)
//         if(!node){
//             return -1
//         }
//         return this.height(node)
//     }

//     depth(root,value,depthLevel=0){
//         if(!root){
//             return -1
//         }
//         if(root.value===value){
//             return depthLevel

//         }else if(value<root.value){
//             return this.depth(root.left,value,depthLevel+1)

//         }else{
//             return this.depth(root.right,value,depthLevel+1)
//         }
//     }

//     findDepth(value){
//         return this.depth(this.root,value)
//     }
    
// }

// const bst = new BinarySearchTree()
// bst.insert(10)
// bst.insert(20)
// bst.insert(30)

// console.log((bst.findHeight(10)));
// console.log(bst.height(bst.root));

// console.log(bst.findDepth(10))




//largest and second largest

// class Node{
//     constructor(value){
//         this.value = value
//         this.right = null
//         this.left = null
//     }
// }
// class BinarySearchTree{
//     constructor(){
//         this.root = null
//     }
//     isEmpty(){
//         return this.root===null
//     }
//     insert(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.root = node
//         }else{
//             this.insertNode(this.root,node)
//         }
//     }
//     insertNode(root,node){
//         if(node.value<root.value){
//             if(root.left===null){
//                 root.left = node
//             }else{
//                 this.insertNode(root.left,node)
//             }
//         }else{
//             if(root.right===null){
//                 root.right = node
//             }else{
//                 this.insertNode(root.right,node)
//             }
//         }
//     }
//     findLargest(node){
//         while(node.right){
//             node=node.right
//         }
//         return node.value
//     }

//     secondLargest(root){
//         if(!root ||(!root.left&&!root.right)){
//             return null
//         }
//         let curr = root
//         while(curr){
//             if(curr.right===null&&curr.left!==null){
//                 return this.findLargest(curr.left)
//             }
//             if(curr&&curr.right.right===null&&curr.right.left===null){
//                 return curr.value
//             }
//             curr = curr.right
//         }

//         //if no second latgest is found
//         return null
//     }
// }
// const bst  = new BinarySearchTree()
// bst.insert(40)
// bst.insert(20)
// bst.insert(30)

// console.log(bst.findLargest(bst.root));
// console.log(bst.secondLargest(bst.root));



//is valid

// class Node{
//     constructor(value){
//         this.value = value
//         this.right = null
//         this.left = null
//     }
// }
// class BinarySearchTree{
//     constructor(){
//         this.root = null
//     }
//     isEmpty(){
//         return this.root===null
//     }
//     insert(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.root = node
//         }else{
//             this.insertNode(this.root,node)
//         }
//     }
//     insertNode(root,node){
//         if(node.value<root.value){
//             if(root.left===null){
//                 root.left = node
//             }else{
//                 this.insertNode(root.left,node)
//             }
//         }else{
//             if(root.right===null){
//                 root.right = node
//             }else{
//                 this.insertNode(root.right,node)
//             }
//         }
//     }
//     isValid(node = this.root,min = -Infinity,max = Infinity){
//         if(node===null){
//             return true
//         }
//         if(node.value<=min||node.value>=max){
//             return false
//         }
//         return(
//             //recusisvely check left and right subtrees
//             this.isValid(node.left,min,node.value)&&
//             this.isValid(node.right,node.value,max)
//         )

//     }
// }

// const bst = new BinarySearchTree()
// bst.insert(10)
// bst.insert(20)
// bst.insert(30)

// console.log(bst.isValid());


//find closest

// class Node{
//     constructor(value){
//         this.value = value
//         this.right = null
//         this.left = null
//     }
// }
// class BinarySearchTree{
//     constructor(){
//         this.root = null
//     }
//     isEmpty(){
//         return this.root===null
//     }
//     insert(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.root =node
//         }else{
//             this.insertNode(this.root,node)
//         }
//     }
//     insertNode(root,node){
//         if(node.value<root.value){
//             if(root.left===null){
//                 root.left = node
//             }else{
//                 this.insertNode(root.left,node)
//             }
//         }else{
//             if(root.right ===null){
//                 root.right = node
//             }else{
//                 this.insertNode(root.right,node)
//             }
//         }
//     }
//    findClosest(root,target){
//     let closest = root.value
//     let currentNode = root

//     while(currentNode!==null){
//         if(Math.abs(currentNode.value-target)<Math.abs(closest-target)){
//             closest = currentNode.value
//         }

//         if(target<currentNode.value){
//             currentNode=currentNode.left
//         }else if(target>currentNode.value){
//             currentNode = currentNode.right
//         }else{
//             break
//         }
//     }
//     return closest
//    }
// }

// const bst  = new BinarySearchTree()
// bst.insert(10)
// bst.insert(20)
// bst.insert(30)
// bst.insert(40)
// bst.insert(50)

// console.log(bst.findClosest(bst.root,15));


class Node{
    constructor(value){
        this.value = value
        this.right = null
        this.left = null
    }
}
class BinarySearchTree{
    constructor(){
        this.root = null
    }
    isEmpty(){
        return this.root===null
    }
    insert(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.root = node
        }else{
            this.insertNode(this.root,node)
        }
    }
    insertNode(root,node){
        if(node.value<root.value){
            if(!root.left){
                root.left = node
            }else{
                this.insertNode(root.left,node)
            }
        }else{
            if(!root.right){
                root.right = node
            }else{
                this.insertNode(root.right,node)
            }
        }
    }
    preOrder(root){
        if(root){
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
            
        }
    }
    findClosest(root,target){
       let closest = root.value
       let currentNode = root

       while(currentNode!==null){
        if(Math.abs(currentNode.value-target)<Math.abs(closest-target)){
            closest = currentNode.value
        }
        if(target<currentNode){
            currentNode = currentNode.left
        }else if(target<currentNode){
            currentNode = currentNode.righ
        }else{
            break
        }
       }
       return closest

    }
}
const tree = new BinarySearchTree()
tree.insert(10)
tree.insert(20)
tree.insert(30)

tree.preOrder(tree.root)
console.log(tree.findClosest(tree.root,13));
