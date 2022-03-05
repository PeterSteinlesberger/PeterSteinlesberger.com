import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
@Component({
  selector: 'app-mainsection',
  templateUrl: './mainsection.component.html',
  styleUrls: ['./mainsection.component.scss'],
//  encapsulation: ViewEncapsulation.None
})
export class MainsectionComponent implements OnInit {
  changeImg = false;

  constructor() { }

  ngOnInit(): void {
    Aos.init();
  }

}
