// class TrieNode{
//     constructor(){
//         this.children = {}
//         this.isEndOfWord = false
//     }
// }
// class Trie{
//     constructor(){
//         this.root = new TrieNode()
//     }
//     insert(word){
//         let currentNode = this.root
//         for(let char of word){
//             if(!currentNode.children[char]){
//                 currentNode.children[char] = new TrieNode()
//             }
//             currentNode = currentNode.children[char]
//         }
//         currentNode.isEndOfWord = true
//     }
   
// }
// const trie = new Trie()
// trie.insert("cat")
// trie.insert("bat")



//search

// class TrieNode{
//     constructor(){
//         this.children = {}
//         this.isEndOfWord = false
//     }
// }
// class Trie{
//     constructor(){
//         this.root = new TrieNode()
//     }
//     insert(word){
//         let currentNode = this.root
//         for(let char of word){
//             if(!currentNode.children[char]){
//                 currentNode.children[char] = new TrieNode()
//             }
//             currentNode = currentNode.children[char]
//         }
//         currentNode.isEndOfWord = true
//     }
//     search(word){
//         let currentNode = this.root
//         for(let char of word){
//             if(!currentNode.children[char]){
//                 return false
//             }
//             currentNode = currentNode.children[char]
//         }
//         return currentNode.isEndOfWord
//     }
// }
// const trie = new Trie()
// trie.insert("cat")
// trie.insert("bat")
// console.log(trie.search("sat"));



//searchprefix

//method to search for a node coresponding to given prefix


// class TrieNode{
//     constructor(){
//         this.children = {}
//         this.isEndOfWord = false
//     }
// }
// class Trie{
//     constructor(){
//         this.root = new TrieNode()
//     }
//     insert(word){
//         let currentNode = this.root
//         for(let char of word){
//             if(!currentNode.children[char]){
//                 currentNode.children[char] = new TrieNode()
//             }
//             currentNode = currentNode.children[char]
//         }
//         currentNode.isEndOfWord = true
//     }

//     searchPrefix(prefix){
//         let node = this.root
//         for(let char of prefix){
//             if(!node.children[char]){
//                 return null;
//             }
//             node = node.children[char]
//         }
//         return node
//     }

//     autoComplete(prefix){
//         const node = this.searchPrefix(prefix)
//         const results = []
//         if(node){
//             this.dfs(node,prefix,results)
//         }
//         return results

//     }
//     dfs(node,prefix,results){
//         if(node.isEndOfWord){
//             results.push(prefix)
//         }
//         for(let char in node.children){
//             this.dfs(node.children[char],prefix+char,results)
//         }
//     }
  
   
// }
// const trie = new Trie()
// trie.insert("cat")
// trie.insert("bat")

// console.log(trie.autoComplete("ca"));




// class TrieNode{
//     constructor(){
//         this.children = {}
//         this.isEndOfWord = false
//     }
// }
// class Trie{
//     constructor(){
//         this.root = new TrieNode()
//     }
//     insert(word){
//         let currentNode = this.root
//         for(let char of word){
//             if(!currentNode.children[char]){
//                 currentNode.children[char] = new TrieNode()
//             }
//             currentNode = currentNode.children[char]
//         }
//         currentNode.isEndOfWord = true
//     }
//     search(word){
//         let currentNode = this.root
//         for(let char of word){
//             if(!currentNode.children[char]){
//                 return false
//             }
//             currentNode = currentNode.children[char]
//         }
//         return currentNode.isEndOfWord
//     }

//     searchPrefix(prefix){
//         let node = this.root
//         for(let char of prefix){
//             if(!node.children[char]){
//                 return null
//             }
//             node = node.children[char]
//         }
//         return node
//     }
//     autoComplete(prefix){
//         const node = this.searchPrefix(prefix)
//         let results = []
//         if(node){
//             this.dfs(node,prefix,results)
//         }
//         return results
//     }
//     dfs(node,prefix,results){
//         if(node.isEndOfWord){
//             results.push(prefix)
//         }
//         for(let char in node.children){
//             this.dfs(node.children[char],prefix+char,results)
//         }
//     }

// }
// const trie = new Trie()
// trie.insert("car")
// trie.insert("cat")
// trie.insert("bat")

// console.log(trie.autoComplete("cat"))


// class TrieNode{
//     constructor(){
//         this.children  ={}
//         this.isEndOfWord= false

//     }
// }
// class Trie{
//     constructor(){
//         this.root = new TrieNode()
//     }

//     insert(word){
//         let currentNode = this.root
//         for(let char of word){
//             if(!currentNode.children[char]){
//                 currentNode.children[char] = new TrieNode()
//             }
//             currentNode= currentNode.children[char]
//         }
//         currentNode.isEndOfWord = true
//     }
//     search(word){
//         let currentNode = this.root
//         for(let char of word){
//             if(!currentNode.children[char]){
//                 return false
//             }
//             currentNode = currentNode.children[char]
//         }
//         return currentNode.isEndOfWord
//     }

//     searchPrefix(prefix){
//         let node  = this.root
//         for(let char of prefix){
//             if(!node.children[char]){
//                 return null
//             }
//             node = node.children[char]
//         }
//         return node
//     }
//     autoComplete(prefix){
//         let node = this.searchPrefix(prefix)
//         let results = []
//         if(node){
//             this.dfs(node,prefix,results)
//         }
//         return results
//     }
//     dfs(node,prefix,results){
//         if(node.isEndOfWord){
//             results.push(prefix)
//         }
//         for(let char in node.children){
//             this.dfs(node.children[char],prefix+char,results)
//         }
//     }
// }
// const trie = new Trie()
// trie.insert("bat")
// trie.insert("cat")

// console.log(trie.search("car"));
// console.log(trie.autoComplete("sa"));
