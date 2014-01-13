var makeQueue = function(){
  var instance = {};
  var tail = 0; var head = 0;
  // Use an object with numeric keys to store values
  var storage = {};
  var headQ = 0;

  var tailQ = 0;
  var size = tailQ - headQ;

  // Implement the methods below

  instance.enqueue = function(value){
<<<<<<< HEAD
    storage[tailQ] = value;
    tailQ++

  };

  instance.dequeue = function(){
    if (tailQ - headQ){
      
      var result = storage[headQ];
      console.log(result, storage);
      
      delete storage[headQ];
      headQ++;
      return result;
=======
   storage[tail] = value;
   tail++;
  };

  instance.dequeue = function(){
    if(tail - head > 0){
      var res = storage[head];
      head++;
      delete storage[tail];
      return res;
>>>>>>> 93b7bbf1ed4634aa35c1d77e094d3292620356c6
    }
  };

  instance.size = function(){
<<<<<<< HEAD
    return (tailQ - headQ);
=======
    return tail-head;
>>>>>>> 93b7bbf1ed4634aa35c1d77e094d3292620356c6
  };

  return instance;
};
