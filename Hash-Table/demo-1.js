const HashTable = require('./hashtable');

const print = (msg) => console.log(msg);

const table = new HashTable(50);
table.display();
print(table.table);   // undefined as the properties of our hashtable are private.


print("---- set()");
table.set('name', 'marie');
table.set('uncle', 'bob');
table.display();

print("---- get()");
print(table.get('name'));


print("---- remove()");
table.remove('uncle');
table.display();


print("----- bug present:");
table.set('mane', 'marie2');
table.display();   // our marie would be overwritten with marie2 and get with key name fetches marie2 not marie.

// The above bug is called Collision.


