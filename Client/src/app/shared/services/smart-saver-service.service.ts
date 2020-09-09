import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Observable, throwError } from 'rxjs';
import { tap, mapTo, catchError, map } from 'rxjs/operators';
import { CountryRegions } from '../models/country-regions';
import { Tokens } from '../models/tokens';
import { TxnsHistory } from '../models/txns-history';
import { AccountBalance } from '../models/account-balance';
import { InterestRuninngBalance } from '../models/interest-runinng-balance';

@Injectable({
  providedIn: 'root'
})
export class SmartSaverServiceService {



  private API_URL = environment.apiUrl;
  private loggedInUser: string;
  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient, private router: Router) { }


  buySmartSaverTokens(postData: FormGroup): Observable<boolean> {

    return this.http.post<any>(`${this.API_URL}/api/smartSaver/buySmartSaverTokens`, postData.value, this.httpOptions)

      .pipe(
        // tap(tokens => console.log(`${tokens}`)),
        // tap(tokens => this.doLoginUser(postData.value.main_contact_number, tokens)),
        mapTo(true),

        catchError(this.handleLoginError)

      );
  }



  withdrawSmartSaverTokens(postData: FormGroup): Observable<boolean> {

    return this.http.post<any>(`${this.API_URL}/api/smartSaver/withdrawSmartSaverTokens`, postData.value, this.httpOptions)

      .pipe(
        // tap(tokens => console.log(`${tokens}`)),
        // tap(tokens => this.doLoginUser(postData.value.main_contact_number, tokens)),
        mapTo(true),

        catchError(this.handleLoginError)

      );
  }


  mainInterestBalance(id: string) {

    const options1 = { params: new HttpParams().set('id', id) };

    return this.http.get<InterestRuninngBalance[]>(`${this.API_URL}/api/smartSaver/interestBalance`, options1)

      .pipe(

        // tap(response => console.log(`${response}`)),

        catchError(this.handleLoginError)
      );

  }


  mainBoxBalance(id: string) {

    const options1 = { params: new HttpParams().set('id', id) };

    return this.http.get<AccountBalance[]>(`${this.API_URL}/api/smartSaver/boxBalance`, options1)

      .pipe(

        // tap(response => console.log(`${response}`)),

        catchError(this.handleLoginError)
      );

  }


  txnHistoryBox(id: string): Observable<TxnsHistory[]> {

    const options1 = { params: new HttpParams().set('id', id) };

    return this.http.get<TxnsHistory[]>(`${this.API_URL}/api/smartSaver/txnHistory`, options1)

      .pipe(

        tap(response => console.log(`${response}`)),

        catchError(this.handleLoginError)
      );

  }

  registerUser(postData: FormGroup) {

    return this.http.post<string>(`${this.API_URL}/api/auth/register`, postData.value, this.httpOptions)

      .pipe(
        map((res: string) => res),
        // tap(res => console.log(`AFTER MAP: ${res}`)),
        catchError(this.handleRegisterError)
      );
  }


  registerAdminNow(postData: FormGroup) {

    return this.http.post<string>(`${this.API_URL}/api/auth/registerAdminNow`, postData.value, this.httpOptions)

      .pipe(
        map((res: string) => res),
        // tap(res => console.log(`AFTER MAP: ${res}`)),
        catchError(this.handleRegisterError)
      );
  }



  registerSmartAgent(postData: FormGroup) {

    return this.http.post<string>(`${this.API_URL}/api/auth/registerSmartAgent`, postData.value, this.httpOptions)

      .pipe(
        map((res: string) => res),
        // tap(res => console.log(`AFTER MAP: ${res}`)),
        catchError(this.handleRegisterError)
      );
  }

  registerSmartSaverAgent(postData: FormGroup) {

    return this.http.post<string>(`${this.API_URL}/api/auth/registerSmartSaverAgent`, postData.value, this.httpOptions)

      .pipe(
        map((res: string) => res),
        // tap(res => console.log(`AFTER MAP: ${res}`)),
        catchError(this.handleRegisterError)
      );
  }



  registerSmartSaverNoAgent(postData: FormGroup) {

    return this.http.post<string>(`${this.API_URL}/api/auth/registerSmartSaver`, postData.value, this.httpOptions)

      .pipe(
        map((res: string) => res),
        // tap(res => console.log(`AFTER MAP: ${res}`)),
        catchError(this.handleRegisterError)
      );
  }


  registerMobileNumberPasswordAdmin(postData: FormGroup) {

    return this.http.post<string>(`${this.API_URL}/api/auth/registerAdmin`, postData.value, this.httpOptions)

      .pipe(
        map((res: string) => res),
        tap(res => console.log(`AFTER MAP: ${res}`)),
        catchError(this.handleRegisterError)
      );
  }

  doLoginUser(phoneNubmer: string, tokens: Tokens) {
    this.loggedInUser = phoneNubmer;
    this.storeTokens(tokens);

  }

  doLogoutUser() {
    this.loggedInUser = null;
    this.removeTokens();
  }

  private removeTokens() {

    console.log('In it');

    localStorage.removeItem(this.JWT_TOKEN);

    // localStorage.removeItem(this.REFRESH_TOKEN);
  }


  isLoggedIn() {
    return !!this.getJwtToken();
  }


  getJwtToken() {

    return localStorage.getItem(this.JWT_TOKEN);
  }


  // refreshToken() {
  //   console.log('am refreshing');
  //   return this.http.post<any>(`${this.API_URL}/api/auth/refresh`, {
  //     // refreshToken: this.getRefreshToken()
  //   }).pipe(tap((tokens: Tokens) => {
  //     this.storeJwtToken(tokens.jwt);
  //   }));
  // }

  storeJwtToken(jwt: string) {
    localStorage.setItem(this.JWT_TOKEN, jwt);
  }

  // getRefreshToken() {
  //   return localStorage.getItem(this.REFRESH_TOKEN);
  // }

  private storeTokens(tokens: Tokens) {
    localStorage.setItem(this.JWT_TOKEN, tokens.jwt);
  }

  private handleLoginError(errorResponse: HttpErrorResponse) {

    if (errorResponse.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', errorResponse.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${errorResponse.status},` +
        `body was: ${errorResponse.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(`Authorisation Failed!!
    ${(errorResponse.status === 0 || errorResponse.status === 500 || errorResponse.status === 200) ?
        'The Back End was not able to Handle this Request' : errorResponse.error}
!!`);
  }


  private handleRegisterError(errorResponse: HttpErrorResponse) {

    if (errorResponse.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', errorResponse.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${errorResponse.status}, ` +
        `body was: ${errorResponse.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(`User Registration failed!!
    ${(errorResponse.status === 500 || errorResponse.status === 0 || errorResponse.status === 200) ?
        'The Back End was not able to Handle this Request' : errorResponse.error}
!!`);
  }



  private OtherErrors(errorResponse: HttpErrorResponse) {

    if (errorResponse.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', errorResponse.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${errorResponse.status}, ` +
        `body was: ${errorResponse.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('The backend was not able to handle this request. Please contact system admin 0781331616.');
  }


}
