import { Component, OnInit } from '@angular/core';
import { PassDataService } from 'src/app/service/pass-data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
title;
  constructor(private passdata:PassDataService,
    private router:Router) { }
name:string='company';
  ngOnInit() {
    this.passdata.setData('company');
  }

}
