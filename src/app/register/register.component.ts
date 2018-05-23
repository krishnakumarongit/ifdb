import { Component, OnInit } from '@angular/core';
import { Http,Response } from '@angular/http';
 import {Observable} from "rxjs";
 import "rxjs/Rx";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  data : any = {};
  constructor(private http : Http) { 
	this.getContacts();
	
  }

  ngOnInit() {
  }

  getContacts(){
   this.getData().subscribe(data=>
     {
   	this.data = data;
        console.log(this.data);
     }
   )
  }
  
  getData(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts/10').map((resp: Response) => resp.json())
  }
}
