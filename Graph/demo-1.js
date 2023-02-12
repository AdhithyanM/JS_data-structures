const Graph = require('./graph');

const print = (msg) => console.log(msg);

const graph = new Graph();
graph.display();
print(graph.adjacencyList);  // undefined as we have graph properties private


print("---- addVertex()");
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.display();


print("---- addEdge()");
graph.addEdge('A', 'B');
graph.addEdge('C', 'B');
graph.addEdge('D', 'A');
graph.display();


print("---- hasEdge()");
print( graph.hasEdge('A', 'B') );   // true


print("---- removeVertex()");
graph.removeVertex('D');
graph.display();


print("---- removeEdge()");
graph.removeEdge('A', 'B');
graph.display();