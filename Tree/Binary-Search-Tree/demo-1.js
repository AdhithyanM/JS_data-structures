const BinarySearchTree = require('./binarySearchTree');

const print = (msg) => console.log(msg);

const bst = new BinarySearchTree();
print(bst.isEmpty());

print("---- insert()");
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

print("---- search()");
print(bst.search(10));
print(bst.search(20));
print(bst.search(5));
print(bst.search(15));

// Depth First Search Traversal Techniques:

print("---- preOrder()");
bst.preOrder();   // 10 5 3 7 15


print("---- inOrder()");
bst.inOrder();    // 3 5 7 10 15


print("---- postOrder()");
bst.postOrder();    // 3 7 5 15 10


// Breadth First Search Traversal Technique:

print("---- levelOrder() BFS");
bst.levelOrder();    // 10 5 15 3 7


print("---- min()");
print(bst.min());


print("---- max()");
print(bst.max());


print("---- delete()");
bst.delete(7);
bst.levelOrder();
print("--")
bst.delete(15);
bst.levelOrder();
print("--")
bst.delete(10);
bst.levelOrder();