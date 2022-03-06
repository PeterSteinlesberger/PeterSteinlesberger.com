import { Component, Input, OnInit } from '@angular/core';
import { InViewPortService } from '../in-view-port.service';
import { NavigationService } from '../navigation.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  changeImg = false;
  section: string = '';
  navOpened = false;

  constructor(
    public navigation: NavigationService,
    public inviewport: InViewPortService
  ) { }

  ngOnInit(): void { }

  toggleNav(event: any) {
    console.log(event);
    this.navOpened = !this.navOpened;
  }

  testFunction() {
    console.log('section:' + this.section);
  }

}

