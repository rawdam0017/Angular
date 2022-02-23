import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-task2',
  templateUrl: './main-task2.component.html',
  styleUrls: ['./main-task2.component.css']
})
export class MainTask2Component implements OnInit {
  cardlist: any = [
    {
      img: "../../assets/background.jpg",
      title: "Card title",
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      small: "Last updated 3 mins ago"
    },
    {
      img: "../../assets/background.jpg",
      title: "Card title",
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      small: "Last updated 3 mins ago"
    },
    {
      img: "../../assets/background.jpg",
      title: "Card title",
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      small: "Last updated 3 mins ago"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
