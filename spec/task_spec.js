var assert = require('assert')
var Task = require('../task.js')

describe('tasks', function(){

  beforeEach(function(){
    task1 = new Task("Cave Adventure","Medium",100);
  })

  it('should have a name', function(){
    assert.strictEqual(task1.name, 'Cave Adventure');
  })

  it('should have a diff level', function(){
    assert.strictEqual(task1.diff, "Medium");
  })

  it('checking the reward', function(){
    assert.strictEqual(task1.reward, 100)
  })

  it('should be incomplete', function(){
    assert.strictEqual(task1.completion, false)
  })

})