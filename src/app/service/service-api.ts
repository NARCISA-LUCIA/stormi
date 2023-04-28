import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ComponentResults } from '../model/model';
import { Observable } from 'rxjs';
import { Weather } from '../model/weather';

@Injectable()
export class ServiceApi {
  constructor(private http: HttpClient) {}

  getWeatherData(latitude: number, longitude: number): Observable<Weather> {
    let coordinates = 'latitude=' + latitude + '&longitude=' + longitude;
    let url =
      'https://api.open-meteo.com/v1/forecast?' +
      coordinates +
      '&current_weather=true&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min&timezone=auto';
    console.log('COORDINATES: ' + coordinates);
    return this.http.get<Weather>(url);
  }

  getCoordinates(cityName: string): Observable<ComponentResults> {
    let url =
      'https://api.opencagedata.com/geocode/v1/json?key=2171aee5f664429eac7991bf306dd72c&q=' +
      cityName;
    return this.http.get<ComponentResults>(url);
  }
}
