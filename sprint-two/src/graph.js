var Graph = function(){
  this.graph = {};
  this.counter = 0;
};

Graph.prototype.addNode = function(newNode, toNode){
  var tempNode;
  if(this.counter === 1){
    for(var item in this.graph){
      tempNode = this.graph[item].value;
    }
    this.graph[newNode] = {
      'value' : newNode,
      'edges' : [] //
    };
    this.addEdge(newNode, tempNode);
  } else {
    this.graph[newNode] = {
      'value' : newNode, 
      'edges' : []
    };
  }
  if(toNode){
    this.addEdge(newNode, toNode);
  }
  // newNode addEdge toNode
  this.counter++;
};

Graph.prototype.contains = function(node){
  console.log((node in this.graph), node);
  return (node in this.graph);
};

Graph.prototype.removeNode = function(node){
  if(node in this.graph){
    delete this.graph[node];
  }
};

Graph.prototype.getEdge = function(fromNode, toNode){

  if(this.graph[fromNode].edges.indexOf(toNode) !== -1 && this.graph[toNode].edges.indexOf(fromNode) !== -1){
    return true;
  }
  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
      console.log(this.graph, fromNode, toNode)
  // if(this.graph[fromNode] && this.graph[toNode]){
  //   console.log("true")
  console.log(this.graph[fromNode].edges.push())
    this.graph[fromNode].edges.push(toNode);
    this.graph[toNode].edges.push(fromNode);
  // }
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  var from = this.graph[fromNode].edges.indexOf(toNode);
  var to = this.graph[toNode].edges.indexOf(fromNode);
  this.graph[fromNode].edges.splice(from, 1);
  this.graph[toNode].edges.splice(to, 1);

  if (!(this.graph[fromNode].edges.length)){
    this.removeNode(fromNode);
  }
  if (!(this.graph[toNode].edges.length)){
    this.removeNode(toNode);
  }
};

