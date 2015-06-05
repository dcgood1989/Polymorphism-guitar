var Guitar = require('../guitar');
var BassGuitar = require('../bass_guitar');

describe('BassGuitar', function() {
  describe('prototype', function() {
    it('returns an instance of the Guitar constructor as its prototype', function() {
      var bass = new BassGuitar();
      expect(Object.getPrototypeOf(bass)).toEqual(new Guitar());
    });
  });

  describe('#numberOfStrings', function(argument) {
    it('returns 4 by default', function() {
      var bass = new BassGuitar();
      expect(bass.numberOfStrings).toEqual(4);
    });

    var validStrings = {
      four: 4,
      seven: 5,
      six: 6
    };
    Object.keys(validStrings).forEach(function(numberOfStrings) {
      it('can be set to ' + numberOfStrings + ' strings', function() {
        var bass = new BassGuitar(validStrings[numberOfStrings]);
        expect(bass.numberOfStrings).toEqual(validStrings[numberOfStrings]);
      });
    });
    
    it('throws an error when an invalid number of strings is supplied', function() {
      expect(function(){
        new BassGuitar(342);
      }).toThrow(new Error('Invalid string amount, must be one of 4, 5, 6'));
    });
  });

  describe('#handed', function() {
    it('returns right by default', function() {
      var bass = new BassGuitar();
      expect(bass.handed).toEqual('right');
    });

    it('can be set by a second, optional argument to the constructor', function() {
      var bass = new BassGuitar(5, 'left');
      expect(bass.handed).toEqual('left');
    });
  });
});
