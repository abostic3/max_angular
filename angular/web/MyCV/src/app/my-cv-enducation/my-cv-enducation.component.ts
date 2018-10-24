import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-cv-enducation',
  templateUrl: './my-cv-enducation.component.html',
  styleUrls: ['./my-cv-enducation.component.css']
})
export class MyCvEnducationComponent implements OnInit {
contact_info = ["513-111-1111","austin@email.com"];

education =  [{ name:"University of Cincinnati", start: "2014", end: "2018", level: "Batchlors in Software Development" }, 
              { name:"Milford", start: "2009", end: "2013", level: "GED" }];

  constructor() { }

  ngOnInit() {
  }

}
