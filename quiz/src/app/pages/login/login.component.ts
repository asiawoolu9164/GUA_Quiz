import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username:string = ""
  password:string = ""
  login(){
      // Implement your login logic here
      // For example, you can make an API request to a backend server
      console.log('Logging in with:', this.username, this.password);
  }
}
// วิธีสร้าง โฟเดอร์ ng g c ชื่อที่เก็บ/ชื่อไฟล์
