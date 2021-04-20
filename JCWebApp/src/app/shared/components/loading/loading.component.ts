import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jc-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  windowWidth: string;
  // The screen starts with the maximum opacity
  public opacityChange = 1;
  public loadingTransition;
  // First access the splash is visible
  public showLoading = true;

  readonly ANIMATION_DURATION = 1;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.windowWidth = '-' + window.innerWidth + 'px';
      this.loadingTransition = `opacity ${this.ANIMATION_DURATION}s`;
      this.opacityChange = 0;
      setTimeout(() => {
        this.showLoading = !this.showLoading;
      }, 500);
    }, 4000);
  }
}
