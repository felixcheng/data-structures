var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  this._storage[item] = item;
};

setPrototype.contains = function(item){
  if(item in this._storage){
    return true;
  } return false;
};

setPrototype.remove = function(item){
  delete this._storage[item];
};
