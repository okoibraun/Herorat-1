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


module.exports = Hero;