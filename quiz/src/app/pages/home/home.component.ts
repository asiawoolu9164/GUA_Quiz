import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  data = [
    {
      title:"ควิชยอดนิยม",
      quize:[
        {
          image:"../../../assets/img/Rectangle 20.png",
          name:'ทายชื่อตัวละครใน rov'
        },
        {
          image:"../../../assets/img/Rectangle 20.png",
          name:'ทายชื่อตัวละครใน rov'
        },
        {
          image:"../../../assets/img/Rectangle 20.png",
          name:'ทายชื่อตัวละครใน rov'
        }
      ]
    },
    {
      title:"ควิชมีคนเล่นล่าสุด",
      quize:[
        {
          image:"../../../assets/img/Rectangle 20.png",
          name:'ทายชื่อตัวละครใน rov'
        },
        {
          image:"../../../assets/img/Rectangle 20.png",
          name:'ทายชื่อตัวละครใน rov'
        },
        {
          image:"../../../assets/img/Rectangle 20.png",
          name:'ทายชื่อตัวละครใน rov'
        }
      ]
    }
  ]
}
