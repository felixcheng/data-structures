var makeStack = function(){
    var instance = {};

  // Use an object with numeric keys to store values
    var storage = {};
<<<<<<< HEAD
  
    var size = 0;

  //Implemnt the methods below
  instance.push = function(value){
    storage[size] = value;
=======
    var size = 0;

  instance.push = function(value){
    storage[size]= value;
>>>>>>> 93b7bbf1ed4634aa35c1d77e094d3292620356c6
    size++;
  };

  instance.pop = function(){
    if (size){
      size--;
<<<<<<< HEAD
      return storage[size];
=======
      var result = storage[size];
      delete storage[size];
      return result;
>>>>>>> 93b7bbf1ed4634aa35c1d77e094d3292620356c6
    }
  };

  instance.size = function(){
    return size;
  };
  return instance;
};
