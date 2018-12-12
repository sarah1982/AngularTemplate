
import { Component, OnInit } from '@angular/core';
import { PassDataService } from 'src/app/service/pass-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private passdata:PassDataService,private router:Router) { }
  componentname: string="contact";
  name: string
  email: string;
  message: string;
  ngOnInit() {
    this.passdata.setData('contact');
  }
 /**
   * Process the form we have. Send to whatever backend
   * Only alerting for now
   */
  processForm() {
    const allInfo = `Thanks ${this.name}.`;
    alert(allInfo); 
  }
}
