import { UserService } from './service';

describe('UserService', () => {
  it('create user', () => {
    const result = new UserService().createUser('sabbir', 'siddiqui');
    expect(result).toEqual({
      hello: 'Hello sabbir siddiqui!',
    });
  });
  
  it('get user by id', () => {
    const result = new UserService().getUserById(14);
    expect(result).toEqual({
      id: 14,
      name: 'sabbir'
    });
  });
});
