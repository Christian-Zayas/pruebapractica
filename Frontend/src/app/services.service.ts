import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { dataPeople } from './models/dataPeople';

    
@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  URL = 'http://localhost:3000/api';
  private _refresh$ = new Subject<void>();
  constructor(private http : HttpClient) { }

  get refresh$():  any {
    return this._refresh$;
  }

  // Get all users
  getUsers() : Observable<any> {
    return this.http.get(this.URL + '/');
  }
  // Get user by id
  getUser(id: string) : Observable<any> {
    return this.http.get(this.URL + '/oneuser/' + id);
  }
  // Create user  
  createUser(data: dataPeople) : Observable<dataPeople> {
    return this.http.post(this.URL + '/signin', data)
    .pipe(
      tap(() => {
        this._refresh$.next();
      }));
  }
  // Update user
  updateUser(id: string, data: dataPeople) : Observable<any> {
    return this.http.put(this.URL + '/updateUser/' + id, data);
  }

  // Delete user
  deleteUser(id: string) : Observable<dataPeople> {
    return this.http.delete(this.URL + '/deleteoneUser/' + id);
  }

  // Search user
  search(value: any): Observable<any> {
    console.log(value );
    return this.http.get(this.URL + '/searchUser/' + value);
  }

}
