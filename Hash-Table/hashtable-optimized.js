// To implement the hash table data structure we gonna create a HashTable class
class HashTable
{
  #table;
  #size;

  constructor (bucketSize) {
    this.#table = new Array(bucketSize);
    this.#size = bucketSize;
  }

  // hash method to convert our string key to numeric index. 
  // In real world scenario the logic of this hashing would be very complex that try its best to avoid collision.
  hash (key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.#size;
  }

  set (key, value) {
    const index = this.hash(key);
    // this.#table[index] = value;
    const bucket = this.#table[index];
    if (!bucket) {
      this.#table[index] = [[key, value]];
    } else {
      const sameKeyItem = bucket.find(item => item[0] === key);
      if (sameKeyItem) {
        sameKeyItem[1] = value;
      } else {
        bucket.push([key, value]);
      }
    }
  }

  get (key) {
    const index = this.hash(key);
    // return this.#table[index];
    const bucket = this.#table[index];
    if (!bucket) {
      const sameKeyItem = bucket.find(item => item[0] === key);
      if (sameKeyItem) {
        return sameKeyItem[1];
      }
    }
    return undefined;   // indicates key doesn't exists.
  }

  remove (key) {
    const index = this.hash(key);
    // delete this.#table[index];    // sets it to undefined.
    const bucket = this.#table[index];
    if (!bucket) {
      const sameKeyItem = bucket.find(item => item[0] === key);
      if (sameKeyItem) {
        bucket.splice(bucket.indexOf(sameKeyItem), 1);
      }
    }
  }

  display () {
    for (let i = 0; i < this.#table.length; i++) {
      if (this.#table[i]) {
        console.log(i, this.#table[i]);
      }
    }
  }
}

module.exports = HashTable;