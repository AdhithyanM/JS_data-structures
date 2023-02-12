Hash Table:
-----------
* A hash table, also known as hash map, is a data structure that is used to store key-value pairs.
* Given a key, you can associate a value with that key for very fast lookup.
* Difference between Object and Hash Table?
  * Javascript's Object is a special implementation of the hash table data structure.
  * However, Object class adds its own keys. 
  * Keys that you input may conflict and overwrite the inherited default properties.
* Then why there is built-in data structure Maps?
  * Maps which were introduced in 2015 allow you to store key-value pairs.
  * Unlike java there is not much difference between Map and Hashtable.
* Then why should I learn it?
  * Writing your own hash table implementation is a very popular JS interview question.

* Typically we store the key value pairs in a fix sized array.
* Arrays have numeric index.
* How do we go from using a string key as an index to number as an index?
  * Using a hashing function.
* A hashing function accepts the string key, converts it into a hash code using a defined logic and then maps it into a numeric index that is within the bounds of the array.
* The same hashing function is reused to retrieve the value given a key.


Methods:
--------
* set(key, value) - to set a value for a particular key
* get(key) - to get the value for a particular key
* remove(key) - to remove an entry from hashtable using its key
* display() - to visualize the hashtable

Usage:
------
* They are typically implemented where constant time lookup and insertion are required.
* Database Indexing
* Caches


Notes:
------
* When the hash function returns same hash for different keys, it results in collision and if not handled well the previous value for a particular key will be overwridden with current value.
* Increasing the size of the array is not the best way to handle collisions.
* Sure it may reduce the number of collisions but there is always a possibility for data loss.
* Typically whenever the hashtable reaches half the capacity or more, the array capacity is doubled and key value pairs are re-hashed.
* Real world packages that use hash tables beneath are robust.
