import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-mainsection',
  templateUrl: './mainsection.component.html',
  styleUrls: ['./mainsection.component.scss']
})
export class MainsectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
AOS.init();
  }

}
