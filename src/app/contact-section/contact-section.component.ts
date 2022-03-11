import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss']
})
export class ContactSectionComponent implements OnInit, AfterViewInit {


  @ViewChild('contactForm') contactForm : NgForm;
  
  sentMessage = false;
  showDialog = false;
  showErrorDialog = false;
  contact = {
    name: '',
    email: '',
    message: '',
  };

  constructor(private http: HttpClient) { }
  ngAfterViewInit(): void {
    console.log(this.contactForm);
    
  }

  ngOnInit(): void {
  }

  /**
   * sendMail 
   * 
   */
  post = {
    endPoint: 'http://peter-steinlesberger.developerakademie.com/sendMail.php', // Ex. www.my-domain/sendMail.php

    body: (payload: any) => JSON.stringify(payload),

    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };


  /**
   * Control the form-field if all entries are valid, if not a error pop up in the console
   * @param ngForm 
   */
  onSubmit(ngForm: any) {
    this.showErrorDialog = true; 
    if (ngForm.submitted && ngForm.form.valid) {
      console.log(ngForm);
      this.http
        .post(this.post.endPoint, this.post.body(this.contact))
        .subscribe({
          next: (response) => console.log(response),
          error: (error) => console.error(error),
          complete: () => console.info('send post complete'),
        });
      this.sentMessage = true; 
      this.switchInfoBox();  
      this.contactForm.reset();
    } else {
       this.showErrorDialog = true; 
    }
  }


  /**
   * hide and show the infoboxes
   * 
   */
  switchInfoBox() {
    setTimeout(() => {
      document.getElementById('infoSent').style.display = "none";
      this.showDialog = true;
    }, 2600);
    setTimeout(() => { 
      this.showDialog = false;
      this.sentMessage = false;
    }, 8400);
  }
}

/*
 *This function clear the Formfield 
 * 
 */

