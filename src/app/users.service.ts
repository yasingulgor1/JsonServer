import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from './userDataset';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  apiUrl = 'http://localhost:3000/users';
  constructor(private http: HttpClient) { }

  getAll(): Observable<Users[]> {
    return this.http.get<Users[]>(this.apiUrl);
  }

  getById(id: number): Observable<Users> {
    return this.http.get<Users>(this.apiUrl + "/" + id);
  }

  send(obj: Users): Observable<Users> {
    return this.http.post<Users>(this.apiUrl, obj);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(this.apiUrl + "/" + id);
  }

  update(id:number,obj : Users):Observable<Users>{
    return this.http.put<Users>(this.apiUrl + "/" + id , obj);
  }


}
