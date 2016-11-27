import { Component } from '@angular/core';
import * as firebase from 'firebase';
import * as $        from "jquery";
import { AppState } from '../app.service';
import { Title } from './title';
import { XLarge } from './x-large';
import { Headers, RequestOptions } from '@angular/http';
import { Http, Response } from '@angular/http';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { Observable     } from 'rxjs/Observable';
import 'rxjs/Rx';

// import 'rxjs/Rx'; // adds ALL RxJS statics & operators to Observable

// See node_module/rxjs/Rxjs.js
// Import just the rxjs statics and operators needed for THIS app.

// Statics
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';




//import { Pipe, PipeTransform } from "@angular/core";


var config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    storageBucket: "",
    messagingSenderId: ""
    };
firebase.initializeApp(config);
@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'home',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    Title
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './home.component.css' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './home.component.html'
  //pipes: [OrderByPipe]
})
//@Pipe({ name: 'orderBy' })
export class HomeComponent {
  // Set our default values
  
  constructor(public appState: AppState, public title: Title, public http: Http) {
    
  }
}