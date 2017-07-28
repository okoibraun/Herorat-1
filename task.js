var Task = function(name, diff, reward){
  this.name = name;
  this.diff = diff;
  this.reward = reward;
  this.completion = false;
}


module.exports = Task;