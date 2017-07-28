var assert = require('assert')
var Hero = require('../hero.js')

describe('Hero Testing', function(){

  beforeEach(function(){
    hero1 = new Hero("Steven","Apples")
  })


  it('should have name', function(){
    assert.strictEqual(hero1.name,"Steven")
  })

  it('should have 100 health at start', function(){
    assert.strictEqual(hero1.health, 100)
  })

  it("should have fav food",function(){
    assert.strictEqual(hero1.favfood , "Apples")
  })

  it('should have a name', function(){
    assert.strictEqual(hero1.speak, "Steven is my name")
  })

  it("Should start task list empty", function(){
    assert.strictEqual(hero1.tastlistlength(),0)
  })











})