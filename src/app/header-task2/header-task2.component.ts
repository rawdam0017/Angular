import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-task2',
  templateUrl: './header-task2.component.html',
  styleUrls: ['./header-task2.component.css']
})
export class HeaderTask2Component implements OnInit {
  cardlist: any = [
    {
      img:"../../assets/background.jpg",
      title: "Heading",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum placeat",
      btn: "view details >"
    },
    {
      img:"../../assets/background.jpg",
      title: "Heading",
      text: "sapiente accusantium aliquam magni at aut quas, numquam dolor perferendis",
      btn: "view details >"
    },
    {
      img:"../../assets/background.jpg",
      title: "Heading",
      text: "  neque tempore? Nemo similique id aspernatur, officia voluptatibus maiores .",
      btn: "view details >"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
