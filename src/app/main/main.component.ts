import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  focusList: string[] = ["UI/UX Design","Responsive Design","Wed Design","Mobile App Design"];
  // supList: string[]=["HTML","CSS","JS","Nod.js"];
  protfolio : string[] =['Web Design','Web Design','Web Design','Web Design','Web Design','Web Design']

  constructor() { }

  ngOnInit(): void {
  }

}
