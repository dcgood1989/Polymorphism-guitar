var inquirer = require('inquirer');
var AcousticGuitar = require('./acoustic_guitar');
var ElectricGuitar = require('./electric_guitar');
var BassGuitar = require('./bass_guitar');

var validGuitarTypes = {
  electric: ElectricGuitar,
  acoustic: AcousticGuitar,
  bass: BassGuitar
};

var questions = [
  {
    type: "input",
    name: "type",
    message: "Electric, Acoustic, or Bass",
    validate: function( value ) {
      if (Object.keys(validGuitarTypes).indexOf(value) == -1) {
        return "Please enter a valid guitar type (electric, acoustic, or bass)";
      } else {
        return true;
      }
    }
  },
  {
    type: "input",
    name: "numberOfStrings",
    message: "How many strings do you want?",
    validate: function( value ) {
      var valid = !isNaN(parseInt(value));
      return valid || "Please enter a number";
    },
    filter: Number
  },
  {
    type: "list",
    name: "hand",
    message: "What hand do you need",
    choices: [ "Right", "Left" ],
    filter: function( val ) { return val.toLowerCase(); }
  }
];


console.log();
console.log("Welcome to the automated sales assistant for Bob's Guitar Store!");
console.log("My job is to help you browse our selection.");
console.log("Lets start with the questions!");
console.log();
console.log();
console.log();

inquirer.prompt(questions, function( answers ) {
  var inputGuitar = answers["type"];
  // dynamically determine what type of guitar to construct based on the user's input from the command line
  var GuitarType = validGuitarTypes[inputGuitar];
  var numberOfStrings = answers["numberOfStrings"];
  var handed = answers["hand"];

  console.log();
  console.log('...');
  console.log('...');
  console.log('...');
  console.log("Checking validity...");
  console.log('...');
  console.log('...');
  console.log('...');

  try {
    var guitar = new GuitarType(numberOfStrings, handed);
    console.log("Congrats, great choice for a " + inputGuitar + " with " + numberOfStrings + " strings!")
  }
  catch (e) {
    console.log();
    console.log("Unfortunately you made some invalid choices; " + e.message + '\n' + "Please start over.");
  }
});
