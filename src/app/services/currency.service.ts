import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CurrencyRequestHistory} from "../model/currency-request-history";
import {CurrencyRequest} from "../model/currency-request";
import {CurrencyResponse} from "../model/currency-response";

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private readonly GET_CURRENCY_VALUE = 'http://localhost:8080/currencies/get-current-currency-value-command';
  private readonly GET_CURRENCY_REQUESTS_HISTORY = 'http://localhost:8080/currencies/requests';

  constructor(private http: HttpClient) {}

  public getCurrencyValue(currencyRequest: CurrencyRequest): Observable<CurrencyResponse> {
    return this.http.post<CurrencyResponse>(this.GET_CURRENCY_VALUE, currencyRequest);
  }

  public getCurrencyRequestsHistory(): Observable<CurrencyRequestHistory[]> {
    return this.http.get<CurrencyRequestHistory[]>(this.GET_CURRENCY_REQUESTS_HISTORY);
  }

}
