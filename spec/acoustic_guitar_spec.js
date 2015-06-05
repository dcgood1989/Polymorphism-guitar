var Guitar = require('../guitar');
var AcousticGuitar = require('../acoustic_guitar');

describe('AcousticGuitar', function() {
  describe('prototype', function() {
    it('returns an instance of the Guitar constructor as its prototype', function() {
      var acousticGuitar = new AcousticGuitar();
      expect(Object.getPrototypeOf(acousticGuitar)).toEqual(new Guitar());
    });
  });

  describe('#numberOfStrings', function(argument) {
    it('returns 6 by default', function() {
      var acounsticGuitar = new AcousticGuitar();
      expect(acounsticGuitar.numberOfStrings).toEqual(6);
    });

    var validStrings = {
      six: 6,
      four: 4,
      eight: 8,
      twelve: 12
    };
    Object.keys(validStrings).forEach(function(numberOfStrings) {
      it('can be set to ' + numberOfStrings + ' strings', function() {
        var acousticGuitar = new AcousticGuitar(validStrings[numberOfStrings]);
        expect(acousticGuitar.numberOfStrings).toEqual(validStrings[numberOfStrings]);
      });
    });

    it('throws an error when an invalid number of strings is supplied', function() {
      expect(function(){
        new AcousticGuitar(342);
      }).toThrow(new Error('Invalid string amount, must be one of 6, 4, 8, 12'));
    });
  });

  describe('#handed', function() {
    it('returns right by default', function() {
      var acousticGuitar = new AcousticGuitar();
      expect(acousticGuitar.handed).toEqual('right');
    });

    it('can be set by a second, optional argument to the constructor', function() {
      var acousticGuitar = new AcousticGuitar(4, 'left');
      expect(acousticGuitar.handed).toEqual('left');
    });
  });
});
