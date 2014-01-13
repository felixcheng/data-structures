var Stack = function() {
  // Hey! Copy your code from src/prototypal/stack.js and paste it here
  this.size1 = 0;
  this.storage = {};
};

Stack.prototype.push = function(value){
    this.storage[this.size1]= value;
    this.size1++;
};

Stack.prototype.pop = function(){
    if (this.size1){
      this.size1--;
      var result = this.storage[this.size1];
      delete this.storage[this.size1];
      return result;
    }
  };

Stack.prototype.size = function(){
    return this.size1;
  };

var Instance = new Stack();

