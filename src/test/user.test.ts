import { User } from '../model/User';

describe('User Class', () => {
    let user: User;

    beforeEach(() => {
        // Instancia um novo usuário antes de cada teste
        user = new User(
            'John Doe',
            25,
            'john.doe@example.com',
            'securePassword',
        );
    });

    it('should correctly initialize the properties through constructor', () => {
        expect(user.getName()).toBe('John Doe');
        expect(user.getAge()).toBe(25);
        expect(user.getEmail()).toBe('john.doe@example.com');
        expect(user.getPassword()).toBe('securePassword');
    });

    it('should update the name using setName', () => {
        user.setName('Jane Doe');
        expect(user.getName()).toBe('Jane Doe');
    });

    it('should update the age using setAge', () => {
        user.setAge(30);
        expect(user.getAge()).toBe(30);
    });

    it('should update the email using setEmail', () => {
        user.setEmail('jane.doe@example.com');
        expect(user.getEmail()).toBe('jane.doe@example.com');
    });

    it('should update the password using setPassword', () => {
        user.setPassword('newSecurePassword');
        expect(user.getPassword()).toBe('newSecurePassword');
    });
});
