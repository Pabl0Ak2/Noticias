import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private apiKey = 'c10630a81bbf4961a6a0ad8a2402c1f1';
  private apiUrl = 'https://newsapi.org/v2/top-headlines?country=us';

  constructor(private http: HttpClient) {}

  getTopHeadlines(): Observable<any> {
    return this.http.get(`${this.apiUrl}&apiKey=${this.apiKey}`);
  }
}
