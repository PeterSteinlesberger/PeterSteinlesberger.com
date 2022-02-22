import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';


@Component({
  selector: 'app-mainsection',
  templateUrl: './mainsection.component.html',
  styleUrls: ['./mainsection.component.scss']
})
export class MainsectionComponent implements OnInit {
  AOS: any;


  constructor() { }

  ngOnInit(): void {
    Aos.init();
  }

}
