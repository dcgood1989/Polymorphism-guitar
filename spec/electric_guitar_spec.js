var Guitar = require('../guitar');
var ElectricGuitar = require('../electric_guitar');

describe('ElectricGuitar', function() {
  describe('prototype', function() {
    it('returns an instance of the Guitar constructor as its prototype', function() {
      var electricGuitar = new ElectricGuitar();
      expect(Object.getPrototypeOf(electricGuitar)).toEqual(new Guitar());
    });
  });

  describe('#numberOfStrings', function(argument) {
    it('returns 6 by default', function() {
      var guitar = new ElectricGuitar();
      expect(guitar.numberOfStrings).toEqual(6);
    });

    var validStrings = {
      six: 6,
      four: 4,
      seven: 7,
      eight: 8,
      nine: 9,
      ten: 10,
      eleven: 11,
      twelve: 12,
      thirteen: 13,
      eighteen: 18
    };
    Object.keys(validStrings).forEach(function(numberOfStrings) {
      it('can be set to ' + numberOfStrings + ' strings', function() {
        var electricGuitar = new ElectricGuitar(validStrings[numberOfStrings]);
        expect(electricGuitar.numberOfStrings).toEqual(validStrings[numberOfStrings]);
      });
    });
    
    it('throws an error when an invalid number of strings is supplied', function() {
      expect(function(){
        new ElectricGuitar(342);
      }).toThrow(new Error('Invalid string amount, must be one of 6, 4, 7, 8, 9, 10, 11, 12, 13, 18'));
    });
  });

  describe('#handed', function() {
    it('returns right by default', function() {
      var electricGuitar = new ElectricGuitar();
      expect(electricGuitar.handed).toEqual('right');
    });

    it('can be set by a second, optional argument to the constructor', function() {
      var electricGuitar = new ElectricGuitar(7, 'left');
      expect(electricGuitar.handed).toEqual('left');
    });
  });
});
