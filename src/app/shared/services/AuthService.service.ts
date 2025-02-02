import { Injectable } from '@angular/core';
import { Role } from '../../core';
import { User } from '../../core/models/User';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private currentUserSubject!: BehaviorSubject<User>;

  public currentUser: Observable<User> | undefined;
  private users = [
    {
      id: 1,
      img: 'assets/images/user/admin.jpg',
      username: 'admin@hospital.org',
      password: 'admin@123',
      firstName: 'Sarah',
      lastName: 'Smith',
      role: Role.Admin,
      token: 'admin-token',
      tel: 1234567890,
    },
    {
      id: 2,
      img: 'assets/images/user/doctor.jpg',
      username: 'doctor@hospital.org',
      password: 'doctor@123',
      firstName: 'Ashton',
      lastName: 'Cox',
      role: Role.Conducteur,
      tel: 1234567890,
      token: 'doctor-token',
    },
  ];



  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('currentUser') || '{}')
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }
  login(username: string, password: string) {

    const user = this.users.find((u) => u.username === username && u.password === password);

    if (!user) {
      return this.error('Username or password is incorrect');
    } else {
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
      return this.ok({
        id: user.id,
        img: user.img,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        token: user.token,
      });
    }
  }
  ok(body?: {
    id: number;
    img: string;
    username: string;
    firstName: string;
    lastName: string;
    token: string;
  }) {
    return of(new HttpResponse({ status: 200, body }));
  }
  error(message: string) {
    return throwError(message);
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(this.currentUserValue);
    return of({ success: false });
  }
}
