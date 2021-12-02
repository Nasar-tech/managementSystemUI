import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router, private http: HttpClient) {}
  setToken(token: string) {
    localStorage.setItem('x-auth-token', token);
  }
  getToken(): string | null {
    return localStorage.getItem('x-auth-token');
  }

  isLoggedIn() {    
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('x-auth-token');

    this.router.navigate(['login']);
  }
  
  _url = 'http://localhost:3000/admin/login/adminlogin';
  login(user): Observable<any> {
    return this.http.post<any>(this._url, user);
  }

  setHeaders() {
    return new HttpHeaders({
      'x-auth-token': `${this.getToken()}`,
    });
  }
  token=localStorage.getItem('x-auth-token');
  getHeaders() {}
  getStudentsUrl = 'http://localhost:3000/admin/student';
  getFacultyUrl = 'http://localhost:3000/admin/faculty';
  getBatchesUrl = 'http://localhost:3000/admin/batches';
  getInterviewsUrl = 'http://localhost:3000/admin/interviews';
  getCoursesUrl = 'assets/courses.json';





  //*************************************** */ All methods about students

  getStudents(): Observable<any> {
    return this.http.get<any>(this.getStudentsUrl, {
      headers:new HttpHeaders({
        'x-auth-token':this.token          
      }),
    });
  }
  getStudentSpecific(id): Observable<any> {
    return this.http.get<any>(this.getStudentsUrl+"/"+id, {
      headers:new HttpHeaders({
        'x-auth-token':this.token          
      }),
    });
  }
  createStudent(data):Observable<any>{
    return this.http.post<any>(this.getStudentsUrl,data,{
      headers:new HttpHeaders({
        'x-auth-token':this.token
      })
    })
  }
  updateStudent(data):Observable<any>{
    return this.http.put<any>(this.getStudentsUrl,data,{
      headers:new HttpHeaders({
        'x-auth-token':this.token
      })
    })
  }
  deleteStudent(id):Observable<any>{
    return this.http.delete<any>(this.getStudentsUrl+"/"+id,
      {
        headers:new HttpHeaders({
          'x-auth-token':this.token
        })
      }  
    )
  }










  //****************************************/ All methods about Faculty routes

  getFaculty(): Observable<any> {
    return this.http.get<any>(this.getFacultyUrl, {
      headers: new HttpHeaders({
        'x-auth-token':this.token
      }),
    });
  }
  getSpecificFaculty(id:string): Observable<any> {
    return this.http.get<any>(this.getFacultyUrl +'/'+ id, {
      headers: new HttpHeaders({
        'x-auth-token':this.token
      }),
    });
  }
  createFaculty(data){
    return this.http.post<any>(this.getFacultyUrl,data,{
      headers:new HttpHeaders({
        'x-auth-token':this.token
      })
    })
  }
  deleteFaculty(id){
    return this.http.delete<any>(this.getFacultyUrl + '/' + id,{
      headers:new HttpHeaders({
        'x-auth-token':this.token
      })
    })
  }
  updateFaculty(data){
    return this.http.put<any>(this.getFacultyUrl,data,{
      headers:new HttpHeaders({
        'x-auth-token':this.token
      })
    })
  }
  

  // ************************************ *****All methods about  Batches 

  getBatches(): Observable<any> {
    return this.http.get<any>(this.getBatchesUrl,{
      headers:new HttpHeaders({
        'x-auth-token':this.token
      })
    });
  }
  getSpecificBatches(id):Observable<any>{
    return this.http.get<any>(this.getBatches +"/"+id,{
      headers:new HttpHeaders({
        'x-auth-token':this.token
      })
    })
  }


  // ********************************************* All methods about Courses
  getCourses() {
    return this.http.get(this.getCoursesUrl);
  }

  // ***********************************************All methods about interviews
  getInterviews() {

    return this.http.get(this.getInterviewsUrl,{
      headers:new HttpHeaders({
        'x-auth-token':this.token
      })
    });
  }
}
