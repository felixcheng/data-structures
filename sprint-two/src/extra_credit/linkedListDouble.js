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
          newNode.previous = list[item];
          list[item].next = newNode;
        }
      }
      this.tail = newNode;
    }
  };
  list.addToHead = function(value){
      var oldNode = this.head;
      var newNode = makeNode(value);
      newNode.next = oldNode;
      oldNode.previous = newNode;
      this.head = newNode;
  };


  list.removeHead = function(){
      for(var item in list){
        if(list[item] === this.head){
          this.head = list[item].next;
          this.head.previous = null;
          break;
        }
      }
  };
  list.removeTail = function(){
    var oldTail;
    if(this.head === this.tail){
      return this.tail.value;
    }
    for(var item in this){
      if(this[item].next === this.tail){
        oldTail = this.tail;
        this.tail = list[item];
        return oldTail.value;
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
  node.previous = null;
  return node;
};
var foo = function(){
  return "aha!";
};