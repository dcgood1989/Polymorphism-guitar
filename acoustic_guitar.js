var Guitar = require('./guitar');

function AcousticGuitar(numberOfStrings, handed) {
  numberOfStrings = numberOfStrings || this.numberOfStrings;
  handed = handed || this.handed;

  var validNumberOfStrings = [4, 6, 8, 12]
  if (validNumberOfStrings.indexOf(numberOfStrings) === -1) {
    throw new Error('Invalid string amount, must be one of 6, 4, 8, 12');
  }
  this.numberOfStrings = numberOfStrings
  this.handed = handed
}
AcousticGuitar.prototype = new Guitar();

module.exports = AcousticGuitar;
