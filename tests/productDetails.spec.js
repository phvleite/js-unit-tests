const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  // it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    //fail('Teste vazio!');
    // ESCREVA SEUS TESTES ABAIXO:
    // - Teste se productDetails é uma função.
    // - Teste se o retorno da função é um array.
    // - Teste se o array retornado pela função contém dois itens dentro.
    // - Teste se os dois itens dentro do array retornado pela função são objetos.
    // - Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    // Teste se os dois productIds terminam com 123.
  // });

  it('Verifica se productDetails é uma função.', () => {
    expect(typeof productDetails).toBe('function');
  });

  it('Verifica se o retorno da função é um array.', () => {
    expect(Array.isArray(productDetails('Cerveja Heineken', 'Calabresa Defumada Seara'))).toEqual(true);
  });

  it('Verifica se o array retornado pela função contém dois itens dentro.', () => {
    expect((productDetails('Cerveja Heineken', 'Calabresa Defumada Seara').length)).toEqual(2);
  });

  it('Verifica se os dois itens dentro do array retornado pela função são objetos.', () => {
    expect((typeof productDetails('Cerveja Heineken', 'Calabresa Defumada Seara')[0])).toBe('object');
    expect((typeof productDetails('Cerveja Heineken', 'Calabresa Defumada Seara')[1])).toBe('object');
  });

  it('Verifica se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.', () => {
    expect((productDetails('Cerveja Heineken', 'Calabresa Defumada Seara')[0].name)).not.toEqual((productDetails('Cerveja Heineken', 'Calabresa Defumada Seara')[1].name));
    expect((productDetails('Cerveja Heineken', 'Calabresa Defumada Seara')[0].details.productId)).not.toEqual((productDetails('Cerveja Heineken', 'Calabresa Defumada Seara')[1].details.productId));
  });

  it('Verifica se se os dois productIds contem 123.', () => {
    expect((productDetails('Cerveja Heineken', 'Calabresa Defumada Seara')[0].details.productId.includes('123'))).toBe(true);
    expect((productDetails('Cerveja Heineken', 'Calabresa Defumada Seara')[1].details.productId.includes('123'))).toBe(true);
  });

  it('Verifica se se os dois productIds terminam com 123.', () => {
    const produto = productDetails('Cerveja Heineken', 'Calabresa Defumada Seara');
    const cod1 = produto[0].details.productId;
    const subCod1 = cod1.substring(cod1.length - 3);
    const cod2 = produto[1].details.productId;
    const subCod2 = cod2.substring(cod2.length - 3);
    expect(subCod1).toEqual('123');
    expect(subCod2).toEqual('123');
  });
});
