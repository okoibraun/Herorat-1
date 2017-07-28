var assert = require('assert')
var Hero = require('../hero.js')

describe('Hero Testing', function(){

  beforeEach(function(){
    hero1 = new Hero("Steven")
  })


  it('should have name', function(){
    assert.strictEqual(hero1.name,"Steven")
  })

  it('should have 100 health at start', function(){
    assert.strictEqual(hero1.health, 100)
  })
})