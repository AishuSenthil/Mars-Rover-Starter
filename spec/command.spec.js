const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Command class", function() {
// Test 1
  it("throws error if command type is NOT passed into constructor as the first parameter", function() {
    expect( function() { new Command();}).toThrow(new Error('Command type required.'));
  });

  // Test 2 Setting the description where it defines whcich is command and which is the value
  it("constructor sets command type", function() {
    let commandTest = new Command("this is a Command", "this is a value")
    expect(commandTest.commandType).toEqual("this is a Command");
  });

  // Test 3
  it("constructor sets a value passed in as the 2nd argument", function() {
    let commandTest = new Command("this is a Command", "this is a value")
    expect(commandTest.value).toEqual("this is a value");
  });

});