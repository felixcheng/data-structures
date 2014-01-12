var HashTable = function(){
  this._limit = 8;
  this.counter = 0;
  this.container = makeLimitedArray(this._limit);
  $.extend(this.container, makeLinkedList)
  // var this.container.storage = this.container.storage;
};
HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
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

};

HashTable.prototype.remove = function(k){

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
