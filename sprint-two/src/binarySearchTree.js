var makeBinarySearchTree = function(value){
  var binaryTree = {};
  binaryTree.parent = null;
  binaryTree.left = null;
  binaryTree.right = null;
  binaryTree.value = value;
  $.extend(binaryTree, binaryTreeMethods);
  return binaryTree;
};

var binaryTreeMethods = {};

binaryTreeMethods.contains = function(value, node) {
  node = node || this;
  if(node.value === value){
    return true;
  } else if(node.right && node.value < value ){
      return node.contains(value, node.right);
  } else if(node.left && node.value > value){
     return node.contains(value, node.left);
  }
  return false;
};

binaryTreeMethods.insert = function(value, node) {

var createTree = function(value, father){
    if (value > father.value){
      if (father.right){
        createTree(value, father.right);
      } else {
        var newTree = makeBinarySearchTree(value);
        newTree.parent = father;
        father.right = newTree;
      }
    } else {
      if (father.left) {
        createTree(value, father.left);
      } else {
        var newTree = makeBinarySearchTree(value);
        newTree.parent = father;
        father.left = newTree;
      }
    }
  }; // end createTree
  if(!(this.contains(value))){
    return createTree(value, this);
  }
};


binaryTreeMethods.depthFirstLog = function(callback) {
  if (this.left){
    this.left.depthFirstLog(callback);
  }
  if (this.right){
    this.right.depthFirstLog(callback);
  }
  callback(this.value);
};










