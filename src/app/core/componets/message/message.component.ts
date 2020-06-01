import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

const templateParams = {
  from_name: 'antonyjm462@gmail.com',
  to_name: 'antonyjosemalakkaran@gmail.com',
  message_html: 'hai'
};
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  messageSent: boolean = false;
  constructor() { }

  ngOnInit() {
  }


  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('default_service','template_6PRcsGCk', e.target as HTMLFormElement, 'user_xwnRpuSoILpyvbq7gAMkA')
      .then((result: EmailJSResponseStatus) => {
        this.popup()
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  popup(){
    this.messageSent = !this.messageSent;
    console.log(this.messageSent)
    setTimeout(() => {
      this.messageSent = !this.messageSent;
      console.log(this.messageSent)
    }, 5000);
  }


}
