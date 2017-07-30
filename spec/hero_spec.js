var assert = require('assert')
var Hero = require('../hero.js')
var Food = require('../food.js')
var Task = require('../task.js')

describe('Hero Testing', function(){

  beforeEach(function(){
    food1 = new Food("Apple", 20)
    food2 = new Food("Pear", 10)
    task1 = new Task("Cave Adventure",1,1000)
    task2 = new Task("lava Adventure",3,190)
    task3 = new Task("Water Adventure",2,150)
    hero1 = new Hero("Steven","Apple")
    comparison = new Hero("testing", "Apple")
    comparison.addingTaskeTolist(task3)
    comparison.addingTaskeTolist(task2)
    comparison.addingTaskeTolist(task1)

  })


  it('should have name', function(){
    assert.strictEqual(hero1.name,"Steven")
  })

  it('should have 100 health at start', function(){
    assert.strictEqual(hero1.health, 100)
  })

  it("should have fav food",function(){
    assert.strictEqual(hero1.favfood , "Apple")
  })

  it('should have a name', function(){
    assert.strictEqual(hero1.speak, "Steven is my name")
  })

  it("Should start task list empty", function(){
    assert.strictEqual(hero1.tastlistlength(),0)
  })

  it("should be adding a task to the list", function(){
    hero1.addingTaskeTolist(task1);
    assert.strictEqual(hero1.tastlistlength(), 1)

  })

  it('hero health should increase when eating (none fav', function(){
    hero1.eatsomefood(food2);
    assert.strictEqual(hero1.health, 110)
  })

  it('hero health should increase 1.5 if fav when eating', function(){
    hero1.eatsomefood(food1);
    assert.strictEqual(hero1.health, 130)
  })

  it('sorting tasks by reward', function(){
    hero1.addingTaskeTolist(task1);
    hero1.addingTaskeTolist(task2);
    hero1.addingTaskeTolist(task3);
    hero1.sortingtasks("reward")
    assert.deepEqual(hero1.tasks,[task3,task2,task1])
  })

  it('sorting by Diff', function(){
    hero1.addingTaskeTolist(task1);
    hero1.addingTaskeTolist(task2);
    hero1.addingTaskeTolist(task3);
    hero1.sortingtasks("diff");
    assert.deepEqual(hero1.tasks, [task1,task3,task2])
  })














})