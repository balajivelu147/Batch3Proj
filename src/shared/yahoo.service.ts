import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YahooService {

  constructor(private http: HttpClient) { }
public readonly url = 'https://query2.finance.yahoo.com/v1/finance/trending/US?count=5&lang=en-IN&region=IN';

  getYahooSampleInfo(): Observable<any>{
  return this.http.get(this.url);
 // this.http.post --> can be used as a get as well,
 //  if you want to update or add a value u can use this
  }
}
