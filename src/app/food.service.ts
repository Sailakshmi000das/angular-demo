import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'user-key': '9eebbdd12e5f979e3f8c9a249f9bcefd'
    })
  };

  getAllRestaurants() {
     return this.http.get('https://developers.zomato.com/api/v2.1/search', this.httpOptions);
  }
}