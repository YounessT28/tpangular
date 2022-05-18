export class User {
  id !: number;
  name !: string;
  password !: string;
  email !: string;
  dateCreation !: Date;
  role !: string;

  constructor(name: string, email: string, password: string, role: string) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.role = role;
  }
}