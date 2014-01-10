var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  $.extend(newTree, treeMethods);
  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(makeTree(value));
};

treeMethods.contains = function(target){
  if (this.value === target){
    return true;
  } else {
    if (this.children.length > 0){
      for(var i = 0; i < this.children.length; i++){
        if(this.children[i].contains(target)){
          return true;
        }
      }
    }
  }
return false;
};


