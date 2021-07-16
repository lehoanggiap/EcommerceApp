import { ApiService } from './../../shared/api.service';
import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControlName
} from "@angular/forms";
import { Router } from '@angular/router';
import { MatChipInputEvent } from '@angular/material/chips';



@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {
  submitted!: boolean;
  loginForm!: FormGroup;
  admin!:String;
 

  constructor(
     public formBuilder: FormBuilder,
     private router: Router,
     private ngZone: NgZone,
     private userApi: ApiService
 
   ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      adminName: ["", Validators.required],
      password: ["", Validators.required]
    });
  }
    public handleError = (controlName: string, errorName: string) => {
      return this.loginForm.controls[controlName].hasError(errorName);
    }  
  
  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
         return; 
      }
    console.log(this.loginForm.value);
   this.userApi.SignIn(this.loginForm.value).subscribe(data=> { 
     if(data!=null){ this.ngZone.run(() => this.router.navigateByUrl('/add-new-product-screen'))}
     else{
       alert('Bạn nhập sai thông tin, vui lòng nhập lại!')
    }
    }); 
   }

}
