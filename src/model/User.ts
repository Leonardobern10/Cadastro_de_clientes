export class User {
    public name: string;
    public age: number;
    public email: string;
    public password: string;

    constructor(name: string, age: number, email: string, password: string) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.password = password;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public setAge(age: number): void {
        this.age = age;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    public setPassword(password: string): void {
        this.password = password;
    }

    public getName(): string {
        return this.name;
    }

    public getAge(): number {
        return this.age;
    }

    public getEmail(): string {
        return this.email;
    }

    public getPassword(): string {
        return this.password;
    }
}
