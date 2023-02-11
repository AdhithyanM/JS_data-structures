const print = (msg) => console.log(msg);

// To create a new Set we use the Set Constructor
// we can pass an array as argument to constructor
const set = new Set([1, 2, 3, 3]);
print(set);

// forEach
print("---- forEach()");
set.forEach((n) => print(n));

// to add an item to the set
print("---- add()");
set.add(4);
set.add(4);
print(set);

// to check if a value exists in the set
print("---- has()");
print(set.has(4));

// to delete an item
print("---- delete()");
set.delete(3);
print(set);
print(set.has(3));

// to check the size of the set (how many items present)
print("---- size");
print(set.size);

// to delete all values in the set,
print("---- clear()");
set.clear();
print(set);

