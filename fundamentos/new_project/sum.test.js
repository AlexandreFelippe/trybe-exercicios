const removeItem = require('./sun.js');
  
  describe('testa a função removeItem', () => {
      it('retorna um array sem o item a ser retirado', () => {
      expect(removeItem([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
      expect(removeItem([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
      expect(removeItem([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    });
  });
  