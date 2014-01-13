var makeStack = function() {
  // Hey! Copy your code from src/functional/stack.js and paste it here
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