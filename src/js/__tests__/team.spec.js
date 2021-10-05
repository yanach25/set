import Character from '../character';
import Team from '../team';

describe('test team', () => {
  let team;
  let tom;

  beforeEach(() => {
    tom = new Character('tom');
    team = new Team();
  });

  afterEach(() => {
    team = undefined;
    tom = undefined;
  });

  it('should add user', () => {
    team.add(tom);
    expect(team.members.has(tom)).toBeTruthy();
  });

  it('should throw error on adding user twice', () => {
    team.add(tom);
    expect(() => team.add(tom)).toThrowError('member already added');
  });

  it('should add all users', () => {
    const tim = new Character('tim');
    const ann = new Character('ann');
    team.addAll(tom, tom, tim, ann);
    const keys = team.members.keys();
    const names = Array.from(keys).map((item) => item.name);
    expect(names).toEqual(['tom', 'tim', 'ann']);
  });

  it('should return a list of members', () => {
    const tim = new Character('tim');
    const ann = new Character('ann');
    team.addAll(tom, tom, tim, ann);

    const names = team.toArray().map((item) => item.name);
    expect(names).toEqual(['tom', 'tim', 'ann']);
  });
});
