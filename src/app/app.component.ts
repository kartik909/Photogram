import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    const config = {
      apiKey: "AIzaSyBv-QbcOHdsAFdXqiguExyB27PEMmZ1tn0",
      authDomain: "photogram-1.firebaseapp.com",
      databaseURL: "https://photogram-1.firebaseio.com",
      projectId: "photogram-1",
      storageBucket: "photogram-1.appspot.com",
      messagingSenderId: "508464429146"
    };
    firebase.initializeApp(config);
  }

}
