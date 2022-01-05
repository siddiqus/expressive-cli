import { UserService } from './service';

describe('UserService', () => {
  it('create user', () => {
    const result = new UserService().createUser('sabbir', 'siddiqui');
    expect(result).toEqual({
      hello: 'Hello sabbir siddiqui!',
    });
  });
});
