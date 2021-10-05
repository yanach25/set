import Character from '../character';

describe('test character', () => {
  it('throw error name is not type of string', () => {
    expect(() => new Character(20)).toThrow('name should be type of string');
  });

  it('throw error name length is less than 2', () => {
    expect(() => new Character('O')).toThrow('name should be more or equal 2');
  });

  it('throw error name length is more than 10', () => {
    expect(() => new Character('Osdlfjlsdfjdslfjdsljfdslfjs')).toThrow('name should be less or equal 10');
  });

  it('should create an instance of character', () => {
    expect(new Character('test')).toEqual({
      name: 'test',
      health: 100,
      level: 1,
    });
  });
});
