import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-task2',
  templateUrl: './carousel-task2.component.html',
  styleUrls: ['./carousel-task2.component.css']
})
export class CarouselTask2Component implements OnInit {
  h5List:string[]=['First slide label','Second slide label','Third slide label']
  srcList :any []=['../../assets/background.jpg','../../assets/background.jpg','../../assets/background.jpg']

  constructor() { }

  ngOnInit(): void {
  }

}
