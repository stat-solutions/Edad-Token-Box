import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, mapTo } from 'rxjs/operators';
import { AdminApprovalDetails } from '../models/admin-approval-details';
import { TokensRuninngBalance } from '../models/tokens-runinng-balance';

@Injectable({
  providedIn: 'root'
})
export class AdminDashboardService {


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

  getAllDetailsOfTokenPurchaseApprovals(): Observable<AdminApprovalDetails[]> {
      return this.http
      .get<AdminApprovalDetails[]>(
        `${this.API_URL}/api/adminUserDashboard/allPurchaseClients`,
        this.httpOptions
      )

      .pipe(
        tap(response => console.log(`${response}`)),

        catchError(this.handleSmartSavingRegError)
      );
  }


  getAllDetailsOfTokenWithdrawApprovals(): Observable<AdminApprovalDetails[]> {
    return this.http
    .get<AdminApprovalDetails[]>(
      `${this.API_URL}/api/adminUserDashboard/allWithdrawClients`,
      this.httpOptions
    )

    .pipe(
      tap(response => console.log(`${response}`)),

      catchError(this.handleSmartSavingRegError)
    );
}



  getAllBalanceRunningTokens(): Observable<TokensRuninngBalance[]> {
    return this.http
    .get<TokensRuninngBalance[]>(
      `${this.API_URL}/api/adminUserDashboard/runningTokenBalance`,
      this.httpOptions
    )

    .pipe(
      tap(response => console.log(`${response}`)),

      catchError(this.handleSmartSavingRegError)
    );
}

  rejectTokenAdminS(id: string): Observable<boolean> {


    const options1 = { params: new HttpParams().set('id', id) };

    return this.http.get<boolean>(`${this.API_URL}/api/adminUserDashboard/rejectTokenAdmin`, options1)

      .pipe(
        mapTo(true),
        catchError(this.handleSmartSavingRegError)
      );

  }


  approveTokensAdminPurchase(id: string): Observable<any> {


    const options1 = { params: new HttpParams().set('id', id) };

    return this.http.get<any>(`${this.API_URL}/api/adminUserDashboard/approveTokenAdminPurchase`, options1)

      .pipe(
        mapTo(true),
        catchError(this.handleSmartSavingRegError)
      );

  }


  approveTokensAdminWithdraw(id: string): Observable<any> {


    const options1 = { params: new HttpParams().set('id', id) };

    return this.http.get<any>(`${this.API_URL}/api/adminUserDashboard/approveTokenAdminWithdraw`, options1)

      .pipe(
        mapTo(true),
        catchError(this.handleSmartSavingRegError)
      );

  }

  private handleSmartSavingRegError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', errorResponse.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${errorResponse.status}, ` +
          `body was: ${errorResponse.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError(`Token approval or Rejection  failed!!
       ${
         errorResponse.status === 500 ||
         errorResponse.status === 0 ||
         errorResponse.status === 200 ||
         errorResponse.status === 404
           ? 'The Back End was not able to Handle this Request'
           : errorResponse.error
       }
   !!`);
  }

  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', errorResponse.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${errorResponse.status}, ` +
          `body was: ${errorResponse.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError(`Get Error!!
       ${
         errorResponse.status === 500 ||
         errorResponse.status === 0 ||
         errorResponse.status === 200
           ? 'The Back End was not able to Handle this Request'
           : errorResponse.error
       }
   !!`);
  }
}
