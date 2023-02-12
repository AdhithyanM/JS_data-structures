Tree:
-----
* A tree is a hierarchical data structure that consists of nodes connected by edges.
* A tree is a non-linear data structure, compared to arrays, linked lists, stacks and queues which are linear data structures.
* In linear data structures, the time required to search is proportional to the size of the data set.
* Trees however, owing to the non linear nature allow quicker and easier access to the data.
* A tree will not contain any loops or cycles.


Usage:
------
* Wherever hierarchical representation is necessary
* File Systems for directory structure
* A family tree
* An organization tree
* DOM - Document Object Model
* Chat bots
* Abstract Syntax Tree


Terminologies:
--------------
* Node: 
  * Representation of our data in the tree structure.
* Edge:
  * Representation of how each nodes are connected.
* Parent Node:
  * A node that is an immediate predecessor of any node.
* Child Node:
  * A node that is an immediate successor of any node.
* Root Node:
  * Node from which the tree originates. It doesn't have any parent node.
* Leaf Nodes:
  * Nodes which doesn't have any child.
* Siblings:
  * Nodes which has the same parent.
* Ancestor Node:
  * Parent of Parents
* Path:
  * From one node to another
* Distance:
  * No of edges among the shortest path between 2 nodes.


Properties of a Node:
---------------------
* degree of a node:
  * Total no of child nodes that a node can have.
  * Degree of binary tree is 2.
* Depth of a node:
  * No of edges from root to that node.
* Height of a node:
  * No of edges from the deepest leaf on the tree structure to that node.


Types of Trees:
---------------
Reference: https://towardsdatascience.com/8-useful-tree-data-structures-worth-knowing-8532c7231e8c


Traversal Techniques:
---------------------
* Visiting every node in the tree.
* A hierarchical data structure like a tree can be traversed in different ways.
  * DFS - Depth First Search
    * Pre-Order Traversal
      1. Read the data of the node
      2. Visit the left subtree
      3. Visit the right subtree
    * In-Order Traversal
      1. Visit the left subtree
      2. Read the data of the node
      3. Visit the right subtree
    * Post-Order Traversal
      1. Visit the left subtree
      2. Visit the right subtree
      3. Read the data of the node
  * BFS - Breadth First Search
    1. Do level by level
    2. Create a queue
    3. Enqueue the root node
    4. As long as a node exists in the queue,
      - Dequeue the node from the front
      - Read the node's value
      - Enqueue the node's left child if it exists
      - Enqueue the node's right child if it exists
* More on this: https://dev.to/anishkumar/tree-data-structure-in-javascript-1o99
