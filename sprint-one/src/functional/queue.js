var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var headQ = 0;

  var tailQ = 0;
  var size = tailQ - headQ;

  // Implement the methods below

  instance.enqueue = function(value){
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
    }
  };

  instance.size = function(){
    return (tailQ - headQ);
  };

  return instance;
};
