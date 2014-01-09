var makeStack = function() {
  // Hey! Copy your code from src/functional-shared/stack.js and paste it here
  var instance = Object.create(stackMethods);
  // instance.size = 0;//some method)
  instance.size1 = 0;//some method)
  instance.storage = {};
  return instance;
};

stackMethods = {};
stackMethods.push = function(value){
    this.storage[this.size1]= value;
    this.size1++;
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