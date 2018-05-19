import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../signin-screen/user.model';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  signupForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      name: new FormControl(null,Validators.required),
      lastname: new FormControl(null,Validators.required),
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
      ]),
      password: new FormControl(null,Validators.required)
    });
  }

  onSubmit(){
    if(this.signupForm.valid){
      const {name, lastname, email, password } = this.signupForm.value; 
      const user = new User(email,password,name,lastname);
      console.log(user); 
    }
  }

}
