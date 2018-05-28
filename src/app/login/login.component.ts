import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title : any;
  loginForm : FormGroup;
  constructor(private meta: Meta, private fb: FormBuilder) {
      this.meta.addTag({ property: 'description', name: 'description', content: 'How to use Angular 4 meta service' });
      this.meta.addTag({ property: 'keywords', name: 'keywords', content: 'Angular, Meta Service' });
      this.meta.addTag({ property: 'title',  content: 'Angular, Meta Service' });
      this.createLoginForm();
   }

  ngOnInit() {
  }

  createLoginForm(){
    this.loginForm = this.fb.group({
      name: ['', Validators.required ],
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required ],
      cpassword: ['', Validators.required ]
    });
  }

}
