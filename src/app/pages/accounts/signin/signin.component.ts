import { Component, OnInit } from '@angular/core';
import { IonButton, IonCheckbox, IonCol, IonContent, IonGrid, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonList, IonRow, IonText, IonTitle } from '@ionic/angular/standalone';
import { FeatherIconsModule } from 'src/app/feather-icons/feather-icons.module';
import { ButtonComponent } from '../components/button/button.component';
import { AccountProvidersComponent } from '../components/account-providers/account-providers.component';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { UsersService } from 'src/app/service/users/users.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastService } from 'src/app/service/toast/toast.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  standalone: true,
  imports: [IonContent, IonImg, IonLabel, IonTitle, IonList, IonInput, IonItem, IonIcon, IonButton, FeatherIconsModule, IonCheckbox, IonText, ButtonComponent, AccountProvidersComponent, NgIf, FormsModule, ReactiveFormsModule],
  providers: [UsersService, ToastService]
})
export class SigninComponent implements OnInit {
  log: any;
  mainContent: String = ''
  routePath: any;
  buttonContent: any
  signEnable: boolean = false
  signupEnable: boolean = false
  sigupTemplate = {
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(16),
    ]),
    confirmPassword: new FormControl(null, [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(16),
    ])
  };
  signintemplate = {
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(16),
    ]),
  };
  reactiveForm: any = FormGroup

  constructor(private router: Router,
    private user: UsersService,
    private notification: ToastService,
  ) {

  }
  ngOnInit() {



    this.routePath = this.router.url
    this.mainContent = this.routePath === '/sign-up' ? "Sign up to create your account" : "Sign in to access your account"
    this.buttonContent = this.routePath === '/sign-up' ? "Sign up" : "Sign in"
    this.signEnable = this.routePath === '/sign-in' ? true : false

    let formTemplate = this.routePath === '/sign-up' ? this.sigupTemplate : this.signintemplate


    this.reactiveForm = new FormGroup(
      formTemplate
    )

  }



  ionViewWillEnter() {
    const currentImage = localStorage.getItem("aarthiyaktoken");

    if (currentImage) {
      this.router.navigate(['/home'])
    }

    this.log = '../../../../assets/icon/Screenshot__348_-removebg-preview 2.png'
  }



  async onFormSubmitted() {
    if (this.routePath === '/sign-up') {
      if (this.reactiveForm.value.password === this.reactiveForm.value.confirmPassword) {
        if (this.reactiveForm.status === "VALID") {
          const data = this.reactiveForm.value
          data.provider = 'email'
          await this.createAccount(data)
        } else {
          if (this.reactiveForm.controls.email.errors?.email) {
            this.notification.error("please provide a valid email address", "Email Address")
          } else if (this.reactiveForm.controls.password.errors?.minlength) {
            this.notification.error("Password must be at least 8 characters long.", "Password");
          }
          else if (this.reactiveForm.controls.password.errors?.maxlength) {
            this.notification.error("Password cannot exceed 16 characters.", "Password");
          }
        }
      } else {
        this.notification.error("Password and Confirm Password do not match.", "Password Mismatch");

      }

    } else {
      console.log(this.reactiveForm);

      if (this.reactiveForm.status === "VALID") {

        const data = this.reactiveForm.value
        await this.login(data)
      } else {
        if (this.reactiveForm.controls.email.errors?.email) {
          this.notification.error("please provide a valid email address", "Email Address")
        } else if (this.reactiveForm.controls.password.errors?.minlength) {
          this.notification.error("Password must be at least 8 characters long.", "Password");
        }
        else if (this.reactiveForm.controls.password.errors?.maxlength) {
          this.notification.error("Password cannot exceed 16 characters.", "Password");
        }
      }
    }

  }


  async createAccount(data: any) {
    this.user.createAccount(data).subscribe(async (res: any) => {
      if (res.status === 'Account Created') {
        this.notification.success(res.status, "signup")
        this.router.navigate([res.redirect])
      } else {
        this.notification.info(res.status, "signup")
      }

    })
  }
  async login(data: any) {
    this.user.login(data).subscribe(async (res: any) => {
      console.log(res)

      if (res.jwttoken) {
        // this.notification.success("Welcome back! You have successfully logged in", "login")
        localStorage.setItem("aarthiyaktoken", res.jwttoken)
        this.router.navigate(['/home'])
      } else {
        this.notification.warning(res.status, "login")
      }

    })
  }

  googleSignMethod(ev: any) {

    this.user.googleLoginMethod(ev).subscribe(async (res: any) => {

      console.log(res)
      if (res.jwttoken) {
        localStorage.setItem("aarthiyaktoken", res.jwttoken)
        this.router.navigate(['/home'])
      }
    })
  }

}
