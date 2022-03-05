import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss']
})
export class ContactSectionComponent implements OnInit {

  sentMessage = false;
  showDialog = false;
  contact = {
    name: '',
    email: '',
    message: '',
  };

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

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
    if (ngForm.submitted && ngForm.form.valid) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contact))
        .subscribe({
          next: (response) => console.log(response),
          error: (error) => console.error(error),
          complete: () => console.info('send post complete'),
        });
      this.sentMessage = true;
      this.switchInfoBox();
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
    }, 2400);
  }
}

