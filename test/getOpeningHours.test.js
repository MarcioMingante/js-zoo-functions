const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('caso a função não receba nenhum parametro deve retornar um objeto', () => {
    const actual = getOpeningHours();
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };

    expect(actual).toEqual(expected);
  });

  it('caso a função receba como parametro "Monday" deve retornar "The zoo is closed"', () => {
    const actual = getOpeningHours('Monday', '09:00-AM');
    const expected = 'The zoo is closed';

    expect(actual).toBe(expected);
  });

  it('caso a função receba como parametro "Tuesday" deve retornar "The zoo is open"', () => {
    const actual = getOpeningHours('Tuesday', '09:00-AM');
    const expected = 'The zoo is open';

    expect(actual).toBe(expected);
  });

  it('caso a função receba como parametro "Wednesday" deve retornar "The zoo is closed"', () => {
    const actual = getOpeningHours('Wednesday', '09:00-PM');
    const expected = 'The zoo is closed';

    expect(actual).toBe(expected);
  });

  it('caso a função receba como parametro "Thu" deve retornar um erro: "The day must be valid. Example: Monday"', () => {
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrow(new Error('The day must be valid. Example: Monday'));
  });

  it('caso a função receba como parametro um horario com abreviação diferente de "AM" ou "PM" deve retornar um erro: "The abbreviation must be \'AM\' or \'PM\'"', () => {
    expect(() => getOpeningHours('Friday', '09:00-PJ')).toThrow(new Error('The abbreviation must be \'AM\' or \'PM\''));
  });

  it('caso a função receba como parametro um horario com algum caractere que não seja um numero onde estão as horas deve retornar um erro: "The hour should represent a number"', () => {
    expect(() => getOpeningHours('Friday', 'Z9:00-AM')).toThrow(new Error('The hour should represent a number'));
  });

  it('caso a função receba como parametro um horario com algum caractere que não seja um numero onde estão os minutos deve retornar um erro: "The minutes should represent a number"', () => {
    expect(() => getOpeningHours('Friday', '09:a0-AM')).toThrow(new Error('The minutes should represent a number'));
  });

  it('caso a função receba como parametro um horario onde a hora não esteja entre 0 e 12 deve retornar um erro: "The hour must be between 0 and 12"', () => {
    expect(() => getOpeningHours('Friday', '15:00-AM')).toThrow(new Error('The hour must be between 0 and 12'));
  });

  it('caso a função receba como parametro um horario onde os minutos não estejam entre 0 e 59 deve retornar um erro: "The minutes must be between 0 and 59"', () => {
    expect(() => getOpeningHours('Friday', '09:99-AM')).toThrow(new Error('The minutes must be between 0 and 59'));
  });
});
