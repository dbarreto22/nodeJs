import { Component, OnInit } from '@angular/core';
import {
  AuthService,
  GoogleLoginProvider,
  LinkedinLoginProvider
} from 'angular-6-social-login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( private socialAuthService: AuthService , private router: Router) { }

  public nombre:string;
  public email :string;
  ngOnInit() {
  }
  public socialSignIn(socialPlatform : string) {
    console.log(socialPlatform);
    let socialPlatformProvider;
     if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    } else if (socialPlatform == "linkedin") {
      socialPlatformProvider = LinkedinLoginProvider.PROVIDER_ID;
    }

    this.socialAuthService.signIn(socialPlatformProvider).then(
      
      (userData) => {
        console.log(socialPlatform+" sign in data : " , userData);
        this.nombre = userData.name;
        this.email = userData.email;
        
            
      }
    );
  }

  loginGoogle(){
   

    
  
  }





}