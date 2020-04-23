import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ControlContainer } from '@angular/forms';
import { CustomValidators } from '../../custom-validators';
import { User } from '../../models/users'
import { trigger, transition, style, animate } from '@angular/animations';
import { RegisterService } from 'src/app/services/register.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
export var nameid;
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  animations: [
    trigger(
      'inOutAnimation', 
      [
        transition(
          ':enter', 
          [
            style({height: 0, opacity: 0 }),
            animate('0.7s ease-out', 
                    style({height: '*', opacity: 1 }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({ height: '*', opacity: 1 }),
            animate('0.5s ease-in', 
                    style({ height:0, opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class RegisterPage implements OnInit {

  frmSignup: FormGroup;
  tempUser: User;
  submitted = false;
  loading = false;

  constructor(
    private router: Router, 
    private fb: FormBuilder,
    private registerService: RegisterService,
    private authenticationService: AuthenticationService
    ) {
      if(this.authenticationService.currentUser._isScalar){
        this.router.navigate(['menu', 'tabs']);
      }
    }

  ngOnInit() {
    this.frmSignup = this.createSignupForm();
  }

  registrarUsuario() {
    this.submitted = true;
    console.log(this.controls.password.value.length)

    if(this.frmSignup.invalid){
      return;
    }

    this.loading = true;

    let user = {
      "Email": this.controls.correo.value,
      "UserName": this.controls.correo.value,
      "Password": this.controls.password.value,
      "ConfirmPassword": this.controls.confirmPassword.value
    };

    this.registerService.registrar(user)
      .toPromise()
      .then(response => {
        console.log(response);
        nameid = response.id;
        this.router.navigate(['user-data']);
      }, error => {
        console.log(error);
      });

    /*
    console.log(this.usuario.correo);
    this.controller.getUsers().then((response) => {
      this.tempUser = response;
      var flag = true;
      for (let data of ((this.tempUser as unknown) as Iterable<User>)) {
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
    */
  }

  createSignupForm(): FormGroup {
    return this.fb.group(
      {
        correo: ["", Validators.compose([
          CustomValidators.patternValidator(new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/), {isEmail: true}),
          Validators.required])
        ],
        password: ["", Validators.compose([
          Validators.required,
          CustomValidators.patternValidator(/\d/, { hasNumber: true }),
          CustomValidators.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
          CustomValidators.patternValidator(/[a-z]/, { hasSmallCase: true }),
          Validators.minLength(8)
        ]
        )],
        confirmPassword: ["", Validators.compose([Validators.required])]
      },
      {
        // check whether our password and confirm password match
        validator: CustomValidators.passwordMatchValidator
      });
  }

  get controls(){ return this.frmSignup.controls; }
}
