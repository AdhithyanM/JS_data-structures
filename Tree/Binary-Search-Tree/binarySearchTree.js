const Queue = require('../../Linked-List/queue-implementation/queue-implementation');   // for BFS Traversal

// we gonna represent each node as a class that can be instantiated whenever a new node is added to the tree.
class Node 
{
  constructor (value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree
{
  #root

  constructor () {
    this.#root = null;
  }

  isEmpty () {
    return this.#root === null;
  }

  insert (value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.#root = newNode;
    } else {
      this.insertNode(this.#root, newNode);
    }
  }

  // recursive function to insert a new node in the BST.
  insertNode (root, newNode) {
    // need to insert by satisfying the BST properties
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  search (value) {
    return this.searchNode(this.#root, value);
  }
  searchNode (root, value) {
    if (!root) {
      return false;
    } else {
      if (root.value === value) {
        return true;
      } else if (root.value < value) {
        return this.searchNode(root.right, value);
      } else {
        return this.searchNode(root.left, value);
      }
    }
  }

  preOrder (root = this.#root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }
  
  inOrder (root = this.#root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }

  postOrder (root = this.#root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }

  levelOrder (root = this.#root) {
    const queue = new Queue();
    queue.enqueue(root);
    while (!queue.isEmpty()) {
      let curr = queue.dequeue();
      console.log(curr.value);
      if (curr.left) {
        queue.enqueue(curr.left);
      }
      if (curr.right) {
        queue.enqueue(curr.right);
      }
    }
  }

  min (root = this.#root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }

  max (root = this.#root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.max(root.right);
    }
  }

  /*
  - deleting node operation
  - case 1: leaf node 
    - just remove it.
  - case 2: has 1 child node 
    - remove the node and replace it with its child.
  - case 3: has 2 child nodes
    - copy the inorder successor of that node and delete the inorder successor.
    - The inorder successor of a node in BST is the next node in the inorder traversal sequence.
    - In BST it is the least value node in its right subtree.
  */
  delete (value) {
    this.#root = this.deleteNode(this.#root, value);
  }
  deleteNode (root, value) {
    if (root === null) {
      return root;
    }
    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      // case 1
      if (!root.left && !root.right) {
        return null;
      }
      // case 2
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }
      // case 3
      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }
    return root;
  }
} 

module.exports = BinarySearchTree;