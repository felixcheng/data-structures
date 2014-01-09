var makeLinkedList = function(){
  var list = {};
  list.head = null;

  list.tail = null;
  list.addToTail = function(value){
    var newNode = makeNode(value);
    if(this.head === null){
      this.head = newNode;
      this.tail = newNode;

     } else {
      this.tail = newNode;
    }
    console.log(this.tail.value);
  };


  list.removeHead = function(){
  };

  list.contains = function(target, node){
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};
