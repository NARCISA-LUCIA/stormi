import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ComponentResults, Components} from '../model/model';
import { ServiceApi } from './../service/service-api';
import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Weather } from '../model/weather';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  @Output() searchKeywordEvent = new EventEmitter<string>();
  formControlGroup: FormGroup;
  currentComponents: Components;
  currentWeatherData: Weather;

  constructor(
    private serviceApi: ServiceApi,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formControlGroup = this.formBuilder.group({
      city: new FormControl(''),
    });
  }
  getData(): void {
    let city = this.formControlGroup.controls['city'].value;
    this.searchKeywordEvent.emit(city);
    this.serviceApi
      .getCoordinates(city)
      .subscribe((result: ComponentResults) => {
        this.currentComponents = result.results[0].components;
        console.log('city: ' + result.results[0].components.city);
        console.log('lat: ' + result.results[0].geometry.lat);
        console.log('lng: ' + result.results[0].geometry.lng);
        let latitude = result.results[0].geometry.lat;
        let longitude = result.results[0].geometry.lng;
        this.getWeatherDataLocation(latitude, longitude);
      });
  }

  getWeatherDataLocation(latitude: number, longitude: number) {
    this.serviceApi
      .getWeatherData(latitude, longitude)
      .subscribe((result: Weather) => {
        if (result) {
          this.currentWeatherData = result;
        }
      });
  }
}

