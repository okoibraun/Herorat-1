var Task = function(name, diff, reward, complete){
  this.name = name;
  this.diff = diff;
  this.reward = reward;
  this.completion = complete;
}

Task.prototype.displayingthereward = function(){
  return this.reward;
};


module.exports = Task;