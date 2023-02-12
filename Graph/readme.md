Graph:
------
* A graph is a non-linear data structure that consists of a finite number of vertices (also called nodes) connected by edges.
* Trees are a specific type of graph data structure.


Types of Graph:
---------------
* Based on the characteristic of Edges,
  * Directed
  * Undirected
* Other types of graph: https://dev.to/ritika122001/graphs-and-types-of-graphs-1m1c


Directed Graph:
---------------
* A graph in which the edges have a direction.
* Edges are usually represented by arrows pointing in the direction the graph can be traversed.


Undirected Graph:
-----------------
* A graph in which edges are bidirectional.
* The graph can be traversed in either direction.
* The absence of an arrow tells us that the graph is undirected.


Usages:
-------
* Google Maps
* Social Media Sites


Graph Representation:
---------------------
* Using Adjacency Matrix
* Using Adjacency List

     B
   /   \
 A       C

Adjacency Matrix:
-----------------
* An adjacency matrix is a 2D array of size V x V where V is the number of vertices (nodes).
* Each row and column represent a vertex.
* If the value of any element say, matrix[i][j] = 1, it represents that there is an edge connecting vertex i and vertex j.
* Representation of above graph using Adjacency Matrix
    const matrix = [
      [0, 1, 0],
      [1, 0, 1],
      [0, 1, 0]
    ];


Adjacency List:
---------------
* Vertices are stored in a map like data structure, and every vertex stores a list of its adjacent vertices.
* Representation of above graph using Adjacency List
    const adjacencyList = {
      'A': ['B'],
      'B': ['A', 'C'],
      'C': ['B']
    };


Adjacency Matrix vs Adjacency List:
-----------------------------------
* With an adjacency list, we only need to store the values for the edges that exists. With adjacency matrix, you store values irrespective of whether an edge exists or not. Storage wise, an adjacency list is way more efficient.
* With adjacency list, inserting and finding adjacent nodes is constant time complexity whereas with adjacency matrix, it is linear time complexity.
* An adjacency list allows you to store additional values with an edge such as weight of the edge. With adjacency matrix, such information would have to be stored externally.
