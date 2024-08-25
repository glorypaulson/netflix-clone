import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  // email: string = '';
  // password: string = '';
  
  constructor(private router: Router) { }

  loginData: any = {
    email: '',
    password: ''
  }
  onSubmit() {
    console.log(this.loginData.email);
    
    if (this.loginData.email == 'glory@gmail.com' && this.loginData.password == '1234') {
      this.router.navigate(['home'])
    }
    else {
      alert('Invalid Credentials')
    }
  }


}
