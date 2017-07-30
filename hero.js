var Task = require('./task.js')


var Hero = function(name, favfood, speak){
  this.name = name;
  this.health = 100;
  this.favfood = favfood;
  this.speak = this.name + " is my name";
  this.tasks = [];
}

Hero.prototype.tastlistlength = function(){
  return this.tasks.length;
};

Hero.prototype.addingTaskeTolist = function(task){
  this.tasks.push(task);
};

Hero.prototype.eatsomefood = function(food){
  if(food.name === this.favfood){
    return this.health += (food.value * 1.5)}
    else
    {
     return this.health += food.value
   }
 };

 Hero.prototype.sortingtasks = function(search){
  this.tasks.sort(function(a,b){
    return a[search] - b[search];
  });
}



















module.exports = Hero;