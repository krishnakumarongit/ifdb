import { Component, OnInit } from '@angular/core';
import { Http,Response } from '@angular/http';
import { map, retry, catchError } from 'rxjs/operators';
import { FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  loginForm : FormGroup;
  data : any = {};
  constructor(private http : Http) { 
	
	this.data ={title:'loading...'};
  }

  ngOnInit() {
    this.getContacts();
    this.createLoginForm();
  }

  getContacts(){
   this.getData().subscribe(data=>
     {
   	this.data = data;
        console.log(this.data);
     }
   )
  }

  createLoginForm(){
    this.loginForm = new FormGroup({
      name: new FormControl('dfgdfgfd', [Validators.required, Validators.minLength(4)] ),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      cpassword: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }
  
  getData(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts/10').pipe(map((resp: Response) => resp.json()))
  }
}
