var Task = function(name, diff, reward){
  this.name = name;
  this.diff = diff;
  this.reward = reward;
  this.completion = false;
}

Task.prototype.displayingthereward = function(){
  return this.reward;
};


module.exports = Task;