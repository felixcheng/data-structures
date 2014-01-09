var makeQueue = function() {
  // Hey! Copy your code from src/functional-shared/queue.js and paste it here
  var instance = Object.create(queueMethods);
  instance.tail = 0;
  instance.head = 0;
  // Use an object with numeric keys to store values
  instance.storage = {};
  return instance;
};

  // Implement the methods below



var queueMethods = {};

queueMethods.enqueue = function(value){
   this.storage[this.tail] = value;
   this.tail++;
  };

queueMethods.dequeue = function(){
    if(this.tail - this.head > 0){
      var res = this.storage[this.head];
      this.head++;
      delete this.storage[this.tail];
      return res;
    }
  };

queueMethods.size = function(){
    return this.tail-this.head;
  };
