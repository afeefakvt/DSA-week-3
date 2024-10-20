
//max heap

// class MaxHeap{
//     constructor(){
//         this.heap = []
//     }
//     heapifyUp(index){
//         let parentIndex = Math.floor((index-1)/2)
//         if(index>0&& this.heap[index]>this.heap[parentIndex]){
//             [this.heap[index],this.heap[parentIndex]] = [this.heap[parentIndex],this.heap[index]]
//             this.heapifyUp(parentIndex)
//         }
//     }
//     insert(ele){
//         this.heap.push(ele)
//         this.heapifyUp(this.heap.length-1)
//     }

//     heapifyDown(index){
//         let largest = index
//         let leftchild = 2*index+1
//         let rightchild = 2*index+2

//         if(leftchild<this.heap.length&& this.heap[leftchild]>this.heap[largest]){
//             largest = leftchild
//         }
//         if(rightchild<this.heap.length&& this.heap[rightchild]>this.heap[largest]){
//             largest  = rightchild
//         }
//         if(largest!==index){
//             [this.heap[largest],this.heap[index]] = [this.heap[index],this.heap[largest]]
//             this.heapifyDown(largest)
//                 }
//     }
//     extractMax(){
//         let max = this.heap[0]
//         this.heap[0] = this.heap.pop()
//         this.heapifyDown(0)
//         return max
//     }
//     printHeap(){
//         console.log(this.heap);
        
//     }
// }

// const heap = new MaxHeap()
// heap.insert(10)
// heap.insert(20)
// heap.insert(30)
// heap.insert(5)
// heap.insert(40)

// heap.printHeap()

// heap.extractMax()
// heap.printHeap()



//heap min

// class HeapMin{
//     constructor(){
//         this.heap = []
//     }

//     heapifyUp(index){
//         let parentIndex = Math.floor((index-1)/2)
//         if(index>0&& this.heap[parentIndex]>this.heap[index]){
//             [this.heap[index],this.heap[parentIndex]] = [this.heap[parentIndex],this.heap[index]]
//             this.heapifyUp(parentIndex)
//         }
//     }
//     insert(ele){
//         this.heap.push(ele)
//         this.heapifyUp(this.heap.length-1)
//     }
//     printHeap(){
//         console.log(this.heap);
        
//     }

//     heapifyDown(index){
//         let largest = index
//         let rightchild = 2*index+2
//         let leftchild = 2*index+1

//         if(leftchild<this.heap.length&&this.heap[leftchild]<this.heap[largest]){
//             largest = leftchild
//         }
//         if(rightchild<this.heap.length&&this.heap[rightchild]<this.heap[largest]){
//             largest = rightchild
//         }
//         if(largest!==index){
//             [this.heap[largest],this.heap[index]] = [this.heap[index],this.heap[largest]]
//             this.heapifyDown(largest)
//         }
//     }

//     extractMin(){
//         let min = this.heap[0]
//         this.heap[0] = this.heap.pop()
//         this.heapifyDown(0)
//         return min

//     }

//     heapSort(){
//         const sortedArray = []
//         while(this.heap.length>0){
//             sortedArray.push(this.extractMin())
//         }
//         return sortedArray
//     }
// }
// const heap = new HeapMin()
// heap.insert(10)
// heap.insert(9)
// heap.insert(20)
// heap.insert(15)

// heap.printHeap()

// console.log(heap.heapSort());



//heap sort
class HeapMin{
    constructor(){
        this.heap = []
    }
    heapifyUp(index){
        let parentIndex = Math.floor((index-1)/2)
        if(index>0&&this.heap[index]<this.heap[parentIndex]){
            [this.heap[index],this.heap[parentIndex]] = [this.heap[parentIndex],this.heap[index]]
            this.heapifyUp(parentIndex)
        }
    }
    insert(ele){
        this.heap.push(ele)
        this.heapifyUp(this.heap.length-1)
    }
    printheap(){
        console.log((this.heap));
        
    }
    heapifyDown(index){
        let smallest = index
        let leftchild = 2*index+1
        let rightchild = 2*index+2

        if(leftchild<this.heap.length&& this.heap[leftchild]<this.heap[smallest]){
            smallest = leftchild
        }
        if(rightchild<this.heap.length &&this.heap[rightchild]<this.heap[smallest]){
            smallest = rightchild
        }

        if(smallest!==index){
            [this.heap[smallest],this.heap[index]]=[this.heap[index],this.heap[smallest]]
            this.heapifyDown(smallest)
        }
    }
    extractMin(){
        let smallest = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown(0)
        return smallest
    }

    heapSort(){
        const sortedArray = []
        while(this.heap.length>0){
            sortedArray.push(this.extractMin())
        }
        return sortedArray
    }
}
const heap = new HeapMin()
heap.insert(10)
heap.insert(20)
heap.insert(30)


console.log(heap.heapSort());

