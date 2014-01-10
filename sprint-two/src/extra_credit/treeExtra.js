var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  newTree.parent = null;
  $.extend(newTree, treeMethods);
  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.parent = this;
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

treeMethods.removeFromParents = function (obj){
  if (obj.parent){
    var index = obj.parent.children.indexOf(obj);
    obj.parent.children.splice(index, 1);
    obj.parent = null;
  }
};

