import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  @Input('label') label;
  @Input('placeholder') placeholder;

  constructor() { }

  ngOnInit() {
  }

}
