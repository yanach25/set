class Character {
  constructor(name) {
    if (typeof name !== 'string') {
      throw new Error('name should be type of string');
    }

    if (name.length < 2) {
      throw new Error('name should be more or equal 2');
    }

    if (name.length > 10) {
      throw new Error('name should be less or equal 10');
    }

    this.name = name;
    this.health = 100;
    this.level = 1;
  }
}

export default Character;
