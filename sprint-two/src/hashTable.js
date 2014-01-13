var HashTable = function(){
  this._limit = 8;
  this.counter = 0;
  this.container = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  console.log(this.counter, k, v);
  debugger
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this.container.get(i) || [];
  
  for (var j = 0; j < bucket.length; j++){
    if (bucket[j][0] === k){
      bucket[j][1] = v;
      return
    }
  }

  bucket.push([k, v]);
  this.container.set(i, bucket);
  this.counter++;

  if(this.counter / this._limit >= 0.75) {
    this.counter = 0;
    this.create(this._limit *= 2);
  }
}
  // this.each-- to download the storage
  // new Hash 

  // this.each(this.set) - to put the k v items back to the storage

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this.container.get(i) || [];
  
  for (var j = 0; j < bucket.length; j++){
    if (bucket[j][0] === k){
      return bucket[j][1];
    }

  }
  return null;
};

HashTable.prototype.remove = function(k){

  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this.container.get(i);
  
  for (var j = 0; j < bucket.length; j++){
    if (bucket[j][0] === k){
      bucket.splice(j, 1);
      }
  }
  this.counter--;  
  this.container.set(i, bucket);
  if(this.counter / this._limit < 0.25) {
    this.counter = 0;
    this.create(this._limit /= 2);
   }

  
};

HashTable.prototype.create = function (newLimit){
  var oldCon = this.container;
  var newCon = makeLimitedArray(newLimit);
  this.container = newCon;
  var current = this;
  
  oldCon.each(function(value, index,s ){
    
    //console.log(value,index);
    if (value){
      for (var j = 0; j < value.length; j++){
      //console.log(value, index, value[index])
        current.insert(value[j][0], value[j][1]);
      }
    }
    //console.log('hi', current._limit);
  });

}
