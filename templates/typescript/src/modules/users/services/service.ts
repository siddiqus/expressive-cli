export class UserService {
  createUser(firstName: string, lastName: string) {
    return {
      hello: `Hello ${firstName} ${lastName}!`,
    };
  };

  getUserById(userId: number) {
    return {
      id: userId,
      name: 'sabbir'
    }
  }
}
