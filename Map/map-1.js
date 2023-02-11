const print = (msg) => console.log(msg);

// To create a new map, we use the map constructor.
// The constructor optionally accepts an array as its argument.
// However the array should contain arrays of length 2 as its elements.
const sampleArr = [['a', 1], ['b', 2]];
const map = new Map(sampleArr);
print(map);     

print("---- set()");
map.set('c', 3);
print(map);

print("---- get()");
print(map.get('c'));


print("---- entries()");
print(map.entries());


print("---- keys()");
print(map.keys());


print("---- values()");
print(map.values());


print("---- has()");
print(map.has('a'));


print("---- iterating the map");
for(const [key, val] of map) {
    print(`key: ${key}, value: ${val}`);
}


print("---- delete()");
map.delete('c');
print(map);


print("---- size");
print(map.size);


print("---- clear()");
map.clear();
print(map);
