import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Pessoa } from './pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private apiURL = "http://localhost:3000/pessoa/";

  httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json',
       'Access-Control-Allow-Origin':'*',
       'Access-Control-allowed_headers':'*'
     })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Pessoa[]> {
   return this.httpClient.get<Pessoa[]>(this.apiURL)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 create(pessoa: any): Observable<Pessoa> {
   return this.httpClient.post<Pessoa>(this.apiURL, JSON.stringify(pessoa), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 find(id: number): Observable<Pessoa> {
   return this.httpClient.get<Pessoa>(this.apiURL + id)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 update(id:number, pessoa:any): Observable<Pessoa> {
   return this.httpClient.put<Pessoa>(this.apiURL + id, JSON.stringify(pessoa), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 delete(id:number){
   return this.httpClient.delete<Pessoa>(this.apiURL + id, this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
   let errorMessage = '';
   if(error.error instanceof ErrorEvent) {
     errorMessage = error.error.message;
   } else {
     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
   }
   return throwError(errorMessage);
 }

}