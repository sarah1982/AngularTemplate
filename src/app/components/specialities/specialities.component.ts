import { Component, OnInit } from '@angular/core';
import { PassDataService } from 'src/app/service/pass-data.service';
@Component({
  selector: 'app-specialities',
  templateUrl: './specialities.component.html',
  styleUrls: ['./specialities.component.css']
})
export class SpecialitiesComponent implements OnInit {
  componentname:string="services";
  constructor(private passdata:PassDataService) { }

  


  ngOnInit() {
    this.passdata.setData('services');
  }

}
