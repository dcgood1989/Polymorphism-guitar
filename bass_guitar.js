var Guitar = require("./guitar")
function BassGuitar(numberOfStrings, handed) {
  numberOfStrings = numberOfStrings || 4
  handed = handed || "right"

var validNumberOfStrings = [4, 5, 6];
if (validNumberOfStrings.indexOf(numberOfStrings) === -1) {
  throw new Error('Invalid string amount, must be one of 4, 5, 6')
  }
  this.numberOfStrings = numberOfStrings
  this.handed = handed
}






BassGuitar.prototype = new Guitar();
module.exports = BassGuitar;
