import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-cv-work',
  templateUrl: './my-cv-work.component.html',
  styleUrls: ['./my-cv-work.component.css']
})
export class MyCvWorkComponent implements OnInit {

  work_experience =  [{ name:"Kroger", start: "2017", end: "Present",position: "Dev2" }, 
                      { name:"GAIG", start: "2015", end: "2017", position: "Intern" },
                      { name:"Steak n Shake", start: "2013", end: "2015", position: "Burger Boy" }];
  
  constructor() {
    
   }

  ngOnInit() {
    
  }

}
