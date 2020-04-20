import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CustomValidators } from 'src/app/custom-validators';
import { trigger, style, animate, transition } from '@angular/animations';
import { first } from 'rxjs/operators';
import { JwtHelper } from '../../helpers/jwthelper'
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/models/users';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
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

export class LoginPage implements OnInit {
  
  //url = "";
  loading = false;
  submitted = false;
  returnUrl: string;
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router, 
    private authenticationService: AuthenticationService,
    private jwtHelper: JwtHelper
    ) { 
      console.log(this.authenticationService.isAuthenticated )
      if((this.authenticationService.currentUser.source as BehaviorSubject<User>).value ){
        this.router.navigate(['menu', 'tabs']);
      }
    }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      correo: ['', Validators.compose([
        CustomValidators.patternValidator(new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/), {isEmail: true}),
        Validators.required])
      ],
      password: ['', Validators.compose([
        Validators.minLength(8),
        Validators.required])
      ]
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || ['menu', 'tabs'];
  }

  get controls(){ return this.loginForm.controls; }

  toRegister() {
    this.router.navigate(['register']);
  }

  autenticarUsuario() {
    this.submitted = true;
    
    if(this.loginForm.invalid){
      return;
    }

    this.loading = true;
    this.authenticationService.login(this.controls.correo.value, this.controls.password.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
          console.log(data);
          console.log(this.jwtHelper.decodeToken(data.access_token));
          console.log((this.authenticationService.currentUserValue as any).access_token)
        },
        error => {
          this.loading = false;
          console.log(error.statusText);
        }
      )
    
    //this.router.navigate(['menu', 'tabs']);
  /*valido() {
    this.controller.getUsers().then((response) => {
      this.temporal = response;
      for (let data of ((this.temporal as unknown) as Iterable<User>)) {
        if (data.Correo == this.user.Correo && data.Password == this.user.Password) {
          mail = this.user.Correo;
          this.router.navigate(['menu', 'tabs']);
        }
      }
    }, (error) => {
      console.log("Error: " + error.statusText);
    });
    */
  }
}

