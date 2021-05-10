import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jc-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  experimentsSection() {
    document.getElementById('experiments').scrollIntoView({behavior: 'smooth'});
  }

}
