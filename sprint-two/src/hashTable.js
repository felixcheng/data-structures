var HashTable = function(){
  this._limit = 8;
  this.counter = 0;
  this.container = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this.container.set(i, v);
  // console.log('bucket', this.bucket);
  this.container[i] = v;
  this.counter++;

  if(this.counter / this._limit >= 0.75) {
    this._limit *= 2;
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  return this.container[i];
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  console.log('limit',this.limit, this._limit);
  this.container.set(i, null);
  this.container[i] = null;
  this.counter--;

  if(this.counter / this._limit < 0.25) {
    this._limit /= 2;
  // console.log(this._storage)
  }
};

