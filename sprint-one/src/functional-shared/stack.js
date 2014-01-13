var makeStack = function() {
  // Hey! Copy your code from src/functional/stack.js and paste it here
<<<<<<< HEAD
    var instance = {};
    _.extend(instance, stackMethods);

  // Use an object with numeric keys to store values
    var storage = {};
  
    this.size = 0;

  //Implemnt the methods below


  instance.pop = function(){
    if (size){
      size--;
      var result = storage[size];
      delete storage[size]
      return result;
    }
  };

  instance.size = function(){
    return size;
  };
};
  
var stackMethods = { };

makeStack.stackMethods.push = function(value){
    storage[size] = value;
    size++;
  };
=======
  var instance = {};
  // instance.size = 0;//some method)
  instance.size1 = 0;//some method)
  instance.storage = {};
  _.extend(instance, stackMethods);
  return instance;
};

  // Use an object with numeric keys to store values
var stackMethods = {};

stackMethods.push = function(value){
    this.storage[this.size1]= value;
    this.size1++;
    // console.log(storage, this.storage)
};

stackMethods.pop = function(){
  if (this.size1){
    this.size1--;
    var result = this.storage[this.size1];
    delete this.storage[this.size1];
    return result;
  }
};

stackMethods.size = function(){
  return this.size1;
};
>>>>>>> 93b7bbf1ed4634aa35c1d77e094d3292620356c6
