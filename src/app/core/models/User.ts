import { Role } from './roles';

export class User {
  id!: number;
  img!: string;
  password!: string;
  firstName!: string;
  lastName!: string;
  tel!:number;
  role!: Role;
  token!: string;
}
