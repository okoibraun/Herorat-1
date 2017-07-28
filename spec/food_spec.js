var assert = require('assert')
var Food = require('../food.js')


describe('food information testing', function(){

  beforeEach(function(){
    food1 = new Food("Apple", 20)
  })

  it('should have a name', function(){
    assert.strictEqual(food1.name, "Apple")
  })

  it('should have a valee', function(){
    assert.strictEqual(food1.value, 20)
  })
})