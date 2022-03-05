import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class NavigationService {
  constructor(public router: Router) { }

  forceNavigate(name: string) {
    document.getElementById(name).scrollIntoView({
      behavior: 'smooth'
    });
  }

  scroll() {
    let navbar = document.getElementById('navbar') as HTMLElement;
    if (this.router.url !== '/imprint') {
      if (window.scrollY + window.innerHeight >= window.innerHeight) {
        navbar.style.top = '0';
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 1)'; //if Navbar is not on top then it get a backgroundcolor
        if (window.scrollY == 0) {
          navbar.style.backgroundColor = 'transparent'; //if Navbar is on top then it get a transparent backgroundcolor
        }
      }
    }
  }

  _visibilityChangeHandler(event: any) {
    console.log(event);
  }
}
