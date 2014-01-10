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
      for(var item in list){
        if(list[item] === this.head){
          this.head = list[item].next;
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
