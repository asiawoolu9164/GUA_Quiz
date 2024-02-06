import { Component } from '@angular/core';

@Component({
  selector: 'app-myquiz',
  templateUrl: './myquiz.component.html',
  styleUrls: ['./myquiz.component.css']
})
export class MyquizComponent {


// สร้างตัวแปรเพื่อเก็บชื่อผู้สร้าง Quiz
quizCreator: string;

// สร้าง constructor และกำหนดค่าเริ่มต้นให้กับ quizCreator
constructor() {
  this.quizCreator = 'John Doe'; // เปลี่ยนเป็นชื่อผู้สร้างที่ต้องการ
}

// ฟังก์ชันสำหรับการเปลี่ยนชื่อผู้สร้าง Quiz
changeQuizCreator(newCreator: string) {
  this.quizCreator = newCreator;
}

}
