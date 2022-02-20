import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  changeImg = false;

  navbarfixed: boolean = false;


  @HostListener('window:scroll', ['$event']) onWindowScroll() {
    if (window.scrollY > 20) {
      this.navbarfixed = true;
    }
    else {
      this.navbarfixed = false;
    }
  }


  ngOnInit(): void {

  }


}
