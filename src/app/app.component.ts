import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { getMessaging, getToken, onMessage } from "firebase/messaging";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'af-notification';
  message:any = null;

  constructor(){}

  ngOnInit(): void {
    this.requestPermission();
    this.listen();
  }

  requestPermission() {
    const messaging = getMessaging();
    getToken(messaging, 
     { vapidKey: environment.firebase.vapidKey}).then(
       (currentToken:any) => {
         if (currentToken) {
           console.log("TOKEN ===>");
           console.log(currentToken);
         } else {
           console.log('Token not available. Request permission to generate one.');
         }
     }).catch((err:any) => {
        console.log('An error occurred while retrieving token. ', err);
    });
  }
  listen() {
    const messaging = getMessaging();
    onMessage(messaging, (payload) => {
      console.log('Message received. ', payload);
      this.message=payload;
    });
  }



}
