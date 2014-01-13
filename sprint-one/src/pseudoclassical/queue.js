var Queue = function() {
  // Hey! Copy your code from src/prototypal/queue.js and paste it here
  this.tail = 0;
  this.head = 0;
  // Use an object with numeric keys to store values
  this.storage = {};
};

Queue.prototype.enqueue = function(value){
   this.storage[this.tail] = value;
   this.tail++;
  };

Queue.prototype.dequeue = function(){
    if(this.tail - this.head > 0){
      var res = this.storage[this.head];
      this.head++;
      delete this.storage[this.tail];
      return res;
    }
  };

Queue.prototype.size = function(){
    return this.tail-this.head;
  };

var Instance = new Queue();
