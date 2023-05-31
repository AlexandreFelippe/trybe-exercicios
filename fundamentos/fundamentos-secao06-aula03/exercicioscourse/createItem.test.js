const createItem = require('./createItem');

describe('a função createItem', () => {
  it('cria um item válido', () => {
  const actualItem = createItem('banana', 'kg', 1.99, 20);
  });
  it.todo('utiliza zero como quantidade padrão');
  it.todo('Lança um erro quando não recebe parâmetros');
  it.todo('Lança um erro se o nome do item não é uma string');
  it.todo('Lança um erro se o preço é negativo');
  it.todo('Lança um erro se o preço é zero');
});