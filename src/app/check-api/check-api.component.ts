import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { protectedResources } from '../auth-config';
import { MsalBroadcastService } from '@azure/msal-angular';
import {
  AuthenticationResult,
  EventMessage,
  EventType,
} from '@azure/msal-browser';
import { filter } from 'rxjs';

@Component({
  selector: 'app-check-api',
  templateUrl: './check-api.component.html',
  styleUrls: ['./check-api.component.css'],
})
export class CheckApiComponent implements OnInit {
  partialURL = 'user/getusers'; // endpoint of the api call you have set in the nodejs server

  demoApiEndpoint: string = protectedResources.demoApi.endpoint;
  check_api: any;

  constructor(
    private http: HttpClient,
    private msalBroadcastService: MsalBroadcastService
  ) {}

  ngOnInit() {
    this.msalBroadcastService.msalSubject$
      .pipe(
        filter((msg: EventMessage) => msg.eventType === EventType.LOGIN_SUCCESS)
      )
      .subscribe((result: EventMessage) => {
        console.log(result);
      });
    this.getAPI();
  }

  getAPI() {
    console.log(`${this.demoApiEndpoint}/${this.partialURL}`);
    this.http.get(`http://localhost:5000/user/getusers`).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('completed');
      },
    });
  }
}
