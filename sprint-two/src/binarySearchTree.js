var makeBinarySearchTree = function(value){
  var binaryTree = {};
  binaryTree.parent = null;
  binaryTree.left = null;
  binaryTree.right = null;
  binaryTree.value = value;
  binaryTree.depth = 0;
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
        newTree.depth = father.depth++ 
      }
    } else {
      if (father.left) {
        createTree(value, father.left);
      } else {
        var newTree = makeBinarySearchTree(value);
        newTree.parent = father;
        father.left = newTree;
        newTree.depth = father.depth++
      }
    }
  }; // end createTree
  var minDepth = this.findMin();
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

binaryTreeMethods.rebalance = function(){
  var allNodeValue = [];
  this.depthFirstLog(allNodeValue.push);


  return allNodeValue;
};

binaryTreeMethods.findMin = function(nod, min) {
  node = node || this;
  min= min || null;
  if(node.value === value){
    return true;
  } else if(node.right && node.value < value ){
      return node.contains(value, node.right);
  } else if(node.left && node.value > value){
     return node.contains(value, node.left);
  }
  return min;


binaryTreeMethods.depthCheck = function() {
  
  var min = null;
  var provideMin = function (min){
    if (this.left){
      this.left.provideMin(min);
    }
    if (this.right){
      this.right.provideMin(min);
    }
    if ((!(this.left)) && (!(this.right)){
      if ((this.depth) < min || min===null){
        min = this.depth;
      }
    }
  }
  return min;
};
 








