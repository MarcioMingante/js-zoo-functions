const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('caso não receba nenhum parametro deve retornar o valor undefined', () => {
    const actual = handlerElephants();
    const expected = undefined;

    expect(actual).toBe(expected);
  });

  it('caso o parametro recebido não seja do tipo string deve retornar uma mensagemd e parametro inválido', () => {
    const actual1 = handlerElephants(4);
    const actual2 = handlerElephants([]);
    const expected = 'Parâmetro inválido, é necessário uma string';

    expect(actual1).toBe(expected);
    expect(actual2).toBe(expected);
  });

  it('caso receba um parametro valido espera que a função retorne o valor da chave ao qual o parametro se refere', () => {
    const actual1 = handlerElephants('location');
    const actual2 = handlerElephants('popularity');
    const expected1 = 'NW';
    const expected2 = 5;

    expect(actual1).toBe(expected1);
    expect(actual2).toBe(expected2);
  });

  it('caso a função receba o argumento count como parametro espara-se receber o valor 4', () => {
    const actual = handlerElephants('count');
    const expected = 4;

    expect(actual).toBe(expected);
  });

  it('caso a função receba o argumento names como parametro espara-se receber um array com o nome de todos os residentes', () => {
    const actual = handlerElephants('names');
    const expected = ['Ilana', 'Orval', 'Bea', 'Jefferson'];

    expect(actual).toEqual(expected);
  });

  it('caso a função receba o argumento averageAge como parametro espera-se receber como resultado 10,5', () => {
    const actual = handlerElephants('averageAge');
    const expected = 10.5;

    expect(actual).toBe(expected);
  });
});
