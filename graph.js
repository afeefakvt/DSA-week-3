//adjacency matrix

// const matrix = [
//     [0,1,0],
//     [1,0,1],
//     [0,1,0]
// ]
// console.log(matrix[1][2]);


//adjacency list
// const list = {
//     "A":["B"],
//     "B":["C","A"],
//     "C":["B"]
// }
// console.log(list["B"]);




//add vertex and edge

// class Graph{
//     constructor(){
//         this.adjacencyList = {}
//     }
//     addVertex(vertex){
//         if(!this.adjacencyList[vertex]){
//             this.adjacencyList[vertex] = new Set()
//         }
//     }
//     addEdge(vertex1,vertex2){
//         if(!this.adjacencyList[vertex1]){
//             this.addVertex(vertex1)
//         }
//         if(!this.adjacencyList[vertex2]){
//             this.addVertex(vertex2)
//         }
//         this.adjacencyList[vertex1].add(vertex2)
//         this.adjacencyList[vertex2].add(vertex1)
//     }
//     display(){
//         for(let vertex in this.adjacencyList){
//             console.log(vertex  + "->" + [...this.adjacencyList[vertex]]);
            
//         }
//     }
//     removeEdge(vertex1,vertex2){
//         this.adjacencyList[vertex1].delete(vertex2)
//         this.adjacencyList[vertex2].delete(vertex1)
//     }
//     removeVertex(vertex){
//         if(!this.adjacencyList[vertex]){
//             return
//         }
//         for(let adjacentVertex of this.adjacencyList[vertex]){
//             this.removeEdge(vertex,adjacentVertex)
//         }
//         delete this.adjacencyList[vertex]
//     }
//     hasEdge(vertex1,vertex2){
//         return (
//             this.adjacencyList[vertex1].has(vertex2)&&
//             this.adjacencyList[vertex2].has(vertex1)
//         )
//     }
//     dfs(start){
//         const visited = new Set()//track visited nodes
//         this.dfsRecursive(start,visited)
        
//     }
//     dfsRecursive(vertex,visited){
//         visited.add(vertex)
//         console.log(vertex);

//         for(let neighbour of this.adjacencyList[vertex]){
//             if(!visited.has(neighbour)){
//                 this.dfsRecursive(neighbour,visited)
//             }
        
//         }
        
//     }
//     bfs(start){
//         const visited  = new Set()
//         const queue = [start]

//         visited.add(start)

//         while(queue.length>0){
//             const vertex = queue.shift()
//             console.log(vertex);
            
//             for(let neighbour of this.adjacencyList[vertex]){
//                 if(!visited.has(neighbour)){
//                     visited.add(neighbour)
//                     queue.push(neighbour)
//                 }
//             }
//         }
//     }
  
// }
// const graph = new Graph()
// graph.addVertex("A")
// graph.addVertex("B")
// graph.addVertex("C")

// graph.addEdge("A","B")
// graph.addEdge("B","C")

// graph.display()
// console.log(graph.hasEdge("A","c"));

// graph.removeVertex("A")
// graph.display()


// graph.bfs("B")


// class Graph{
//     constructor(){
//         this.adjacencyList = {}
//     }
//     addVertex(vertex){
//         if(!this.adjacencyList[vertex]){
//             this.adjacencyList[vertex] =new Set()
//         }

//     }
//     addEdge(vertex1,vertex2){
//         if(!this.adjacencyList[vertex1]){
//             this.addVertex(vertex1)
//         }
//         if(!this.adjacencyList[vertex2]){
//             this.addVertex(vertex2)
//         }
//         this.adjacencyList[vertex1].add(vertex2)
//         this.adjacencyList[vertex2].add(vertex1)
//     }

//     display(){
//       for(let vertex in this.adjacencyList){
//         console.log(vertex + "->" + [...this.adjacencyList[vertex]]);
        
//       }
//     }
//     hasEdge(vertex1,vertex2){
//         return(
//             this.adjacencyList[vertex1].has(vertex2)&&
//             this.adjacencyList[vertex2].has(vertex1)
//         )
//     }

//     removeEdge(vertex1,vertex2){
//         this.adjacencyList[vertex1].delete(vertex2)
//         this.adjacencyList[vertex2].delete(vertex1)
//     }

//     removeVertex(vertex){
//         if(!vertex){
//             return
//         }
//         for(let adjacentVertex of this.adjacencyList[vertex]){
//             this.removeEdge(adjacentVertex,vertex)
//         }
//         delete this.adjacencyList[vertex]

//     }
//     dfs(start){
//         const visited = new Set()// Track visited nodes
//         this.recursivedfs(start,visited)

//     }
//     recursivedfs(vertex,visited){
//           // Mark the vertex as visited and print it
//         visited.add(vertex)
//         console.log(vertex);

//            // Recursively visit each neighbor
//         for(let neighbour of this.adjacencyList[vertex]){
//             if(!visited.has(neighbour)){
//                 this.recursivedfs(neighbour,visited)
//             }

//         }
        
//     }

//     bfs(start){
//         const visited = new Set()//track visited nodes
//         const queue = [start]// Initialize the queue with the starting vertex


//         visited.add(start)

//         while(queue.length>0){
//             const vertex  = queue.shift() //deque  avertex
//             console.log(vertex);

//             //visit all unvivsited neighbours
//             for(let neighbour of this.adjacencyList[vertex]){
//                 if(!visited.has(neighbour)){
//                     visited.add(neighbour)
//                     queue.push(neighbour)//enqueu unvisited neighbours
//                 }
//             }
            
//         }
//     }

// }

// const graph = new Graph()
// graph.addVertex("a")
// graph.addVertex("b")
// graph.addVertex("c")

// graph.display()

// graph.addEdge("a","b")
// graph.display()

// graph.removeEdge("a","b")
// graph.display()

// graph.removeVertex("c")
// graph.display()

// graph.bfs("a")


class Graph{
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set()
        }
    }
    addEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }
    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex+ "->" + [...this.adjacencyList[vertex]]);
            
        }
    }
    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }
    removeVertex(vertex){
        if(!this.adjacencyList[vertex]){
            return
        }
        for(let adjacentVertex of this.adjacencyList[vertex]){
            this.removeEdge(vertex,adjacentVertex)
        }
        delete this.adjacencyList[vertex]
    }
    hasEdge(vertex1,vertex2){
        return(
            this.adjacencyList[vertex1].has(vertex2)&&
            this.adjacencyList[vertex2].has(vertex1)
        )
    }

    dfs(start){
        const visited = new Set()
        this.recursivedfs(start,visited)
    }
    recursivedfs(vertex,visited){
        visited.add(vertex)
        console.log(vertex);

        for(let neighbor of this.adjacencyList[vertex]){
            if(!visited.has(neighbor)){
                this.recursivedfs(neighbor,visited)
            }
        }
        
    }
    bfs(start){
        const visited = new Set()
        const queue = [start]

        visited.add(start)
        while(queue.length>0){
            const vertex = queue.shift()
            console.log(vertex);

            for(let neighbor of this.adjacencyList[vertex]){
                if(!visited.has(neighbor)){
                    visited.add(neighbor)
                    queue.push(neighbor)
                }
            }
            
        }
    }

}
const graph = new Graph()
graph.addVertex("a")
graph.addVertex("b")
graph.addVertex("c")

graph.addEdge("a","c")


console.log(graph.hasEdge("a","b"))

graph.display()

graph.dfs("a")
graph.bfs("b")