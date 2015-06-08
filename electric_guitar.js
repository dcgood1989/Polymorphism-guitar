var Guitar = require('./guitar');

function ElectricGuitar(numberOfStrings, handed) {
  numberOfStrings = numberOfStrings || this.numberOfStrings
  handed = handed || this.handed

  var validNumberOfStrings = [6, 4, 7, 8, 9, 10, 11, 12, 13, 18];
  if (validNumberOfStrings.indexOf(numberOfStrings) === -1) {
    throw new Error('Invalid string amount, must be one of ' + validNumberOfStrings.join(', '));
    }
    this.numberOfStrings = numberOfStrings
    this.handed = handed
  }




ElectricGuitar.prototype = new Guitar();


module.exports = ElectricGuitar;
