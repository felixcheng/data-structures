var makeQueue = function(){
  var instance = {};
  var tail = 0; var head = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  instance.enqueue = function(value){
   storage[tail] = value;
   tail++;
  };

  instance.dequeue = function(){
    if(tail - head > 0){
      var res = storage[head];
      head++;
      delete storage[tail];
      return res;
    }
  };

  instance.size = function(){
    return tail-head;
  };

  return instance;
};
