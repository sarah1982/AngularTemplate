import {PassDataService} from '../../service/pass-data.service';
import { Component, EventEmitter, Output,OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-section',
  templateUrl: './sectionheader.component.html',
  styleUrls: ['./sectionheader.component.css']
})
export class SectionheaderComponent implements OnInit {
@Input() title:string;
  constructor(private passdata:PassDataService,
    ) { }

  ngOnInit() {
  

  }



}
