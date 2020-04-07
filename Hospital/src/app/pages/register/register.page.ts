import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../usuario';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../../custom-validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  private usuario = {
    'correo': "",
    'password': "",
    'confirm':""
  };
  public frmSignup: FormGroup;

  constructor( private router:Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.usuario.correo = "";
    this.usuario.password = "";
    this.frmSignup = this.createSignupForm();
  }

  userData(){
    console.log(this.usuario.correo);
    this.router.navigate(['user-data']);
  }
  createSignupForm(): FormGroup {
    return this.fb.group(
      {
        // email is required and must be a valid email email
        email: [null, Validators.compose([
           Validators.email,
           Validators.required])
        ],
        password: [null, Validators.compose([
          Validators.required,
          CustomValidators.patternValidator(/\d/,{hasNumber: true}),
          CustomValidators.patternValidator(/[A-Z]/,{hasCapitalCase: true}),
          CustomValidators.patternValidator(/[a-z]/, {hasSmallCase: true}),
          Validators.minLength(8)
          ]
        )],
        confirmPassword: [null, Validators.compose([Validators.required])]
     },
     {
        // check whether our password and confirm password match
        validator: CustomValidators.passwordMatchValidator
     });
  }
}
