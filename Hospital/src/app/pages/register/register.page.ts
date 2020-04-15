import { User } from './../../servicio';
import { UserControllerService } from './../../services/user-controller.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ControlContainer } from '@angular/forms';
import { CustomValidators } from '../../custom-validators';
export var usermail;
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  usuario = {
    'correo': "",
    'password': "",
    'confirm': ""
  };
  public frmSignup: FormGroup;
  tempuser: User;
  constructor(private controller: UserControllerService, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.usuario.correo = "";
    this.usuario.password = "";
    this.frmSignup = this.createSignupForm();
  }

  userData() {
    console.log(this.usuario.correo);
    this.controller.getUsers().then((response) => {
      this.tempuser = response;
      var flag = true;
      for (let data of ((this.tempuser as unknown) as Iterable<User>)) {
        console.log(data.Correo);
        if (data.Correo == this.usuario.correo) {
          flag = false;
        }
      }
      if (flag) {
        let usuariofinal = {
          "Correo": this.usuario.correo,
          "Password": this.usuario.password,
          "Cotizaciones": 1,
          "Rol": 3,
          "Estado": 1
        };
        this.controller.create(usuariofinal);
        usermail = this.usuario.correo;
        this.router.navigate(['user-data']);
      }
    }, (error) => {
      console.log("Error: " + error.statusText);
    })
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
          CustomValidators.patternValidator(/\d/, { hasNumber: true }),
          CustomValidators.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
          CustomValidators.patternValidator(/[a-z]/, { hasSmallCase: true }),
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
