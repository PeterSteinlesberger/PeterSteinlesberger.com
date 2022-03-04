import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class NavigationService {
  constructor(public router: Router) {}

  forceNavigate(name: string) {
    document.getElementById(name).scrollIntoView({ 
      behavior: 'smooth' 
    });
    // this.router
    //   .navigate(['/'], { fragment: name })
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  }

  scroll() {
    let navbar = document.getElementById('navbar') as HTMLElement;
    if (this.router.url !== '/imprint') {
      if (window.scrollY + window.innerHeight >= window.innerHeight) {
        navbar.style.top = '0';
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 1)';
        if(window.scrollY == 0) {
          navbar.style.backgroundColor = 'transparent';
        }
      } 
      // else { 
      //  // navbar.style.top = window.innerHeight - window.scrollY + 'px';
      // }
    }
  }

  _visibilityChangeHandler(event: any) {
    console.log(event);
  }
}