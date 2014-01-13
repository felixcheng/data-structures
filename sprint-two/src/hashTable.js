var HashTable = function(){
  this._limit = 8;
  this.counter = 0;
  this.container = makeLimitedArray(this._limit);
<<<<<<< HEAD
=======
  $.extend(this.container, makeLinkedList)
  // var this.container.storage = this.container.storage;
>>>>>>> 93b7bbf1ed4634aa35c1d77e094d3292620356c6
};
HashTable.prototype.insert = function(k, v){
  console.log(this.counter, k, v);
  debugger
  var i = getIndexBelowMaxForKey(k, this._limit);
<<<<<<< HEAD
  var bucket = this.container.get(i) || [];
  
  for (var j = 0; j < bucket.length; j++){
    if (bucket[j][0] === k){
      bucket[j][1] = v;
      return
    }
  }

  bucket.push([k, v]);
  this.container.set(i, bucket);
  this.counter++;

  if(this.counter / this._limit >= 0.75) {
    this.counter = 0;
    this.create(this._limit *= 2);
  }
}
  // this.each-- to download the storage
  // new Hash 

  // this.each(this.set) - to put the k v items back to the storage

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this.container.get(i) || [];
  
  for (var j = 0; j < bucket.length; j++){
    if (bucket[j][0] === k){
      return bucket[j][1];
    }

  }
  return null;
=======
  var newnode = createNode(k, v);
  if (this.container[i].get(k)) { // right?
    // create node, set previous
    var oldTail = this.container[i].tail;
    this.container[i].tail = newnode;

  } else {
    this.container[i] = makeLinkedList();
    this.container[i].head = newnode;
    this.container[i].tail = newnode;
  }
};

HashTable.prototype.retrieve = function(k){

>>>>>>> 93b7bbf1ed4634aa35c1d77e094d3292620356c6
};

HashTable.prototype.remove = function(k){

<<<<<<< HEAD
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this.container.get(i);
  
  for (var j = 0; j < bucket.length; j++){
    if (bucket[j][0] === k){
      bucket.splice(j, 1);
      }
  }
  this.counter--;  
  this.container.set(i, bucket);
  if(this.counter / this._limit < 0.25) {
    this.counter = 0;
    this.create(this._limit /= 2);
   }

  
};

HashTable.prototype.create = function (newLimit){
  var oldCon = this.container;
  var newCon = makeLimitedArray(newLimit);
  this.container = newCon;
  var current = this;
  
  oldCon.each(function(value, index,s ){
    
    //console.log(value,index);
    if (value){
      for (var j = 0; j < value.length; j++){
      //console.log(value, index, value[index])
        current.insert(value[j][0], value[j][1]);
      }
    }
    //console.log('hi', current._limit);
  });

}
=======
};

HashTable.prototype.refractor = function(someCont, limit){
  // this.container = makeLimitedArray(this._limit)
}

var makeLinkedList = function(){
  var list = {}; var previous;
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = makeNode(value);
    if(this.head === null){
      this.head = newNode;
      this.tail = newNode;
     } else {
      for (var item in list){
        if(list[item].next === null){
          previous = list[item];
        }
      }
      previous.next = newNode;
      this.tail = newNode;
    }
  };

  list.removeHead = function(){
      for(var item in this){
        if(this[item] === this.head){
          this.head = this[item].next;
          break;
        }
      }
  };

  list.contains = function(target, node){
    node = node || this.head; var res = false;
    if (node.value === target){
      res = true;
    } else {
      if(node.next === null){
        return false;
      }
      return this.contains(target, node.next);
    }
    return res;
  };
  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};
>>>>>>> 93b7bbf1ed4634aa35c1d77e094d3292620356c6
