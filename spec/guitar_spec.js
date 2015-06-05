var Guitar = require('../guitar');

describe('Guitar', function() {
  describe('#numberOfStrings', function(argument) {
    it('returns 6 by default', function() {
      var guitar = new Guitar();
      expect(guitar.numberOfStrings).toEqual(6);
    });
  });

  describe('#handed', function() {
    it('returns right by default', function() {
      var guitar = new Guitar();
      expect(guitar.handed).toEqual('right');
    });
  });
});
