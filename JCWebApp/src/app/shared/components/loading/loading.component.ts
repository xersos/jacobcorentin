import { Component, OnInit } from '@angular/core';
import { LoadingService } from '@shared/services';

@Component({
  selector: 'jc-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  // The screen starts with the maximum opacity
  public opacityChange = 1;
  public loadingTransition;
  // First access the splash is visible
  public showLoading = true;

  readonly ANIMATION_DURATION = 1;

  constructor(private _loadingService: LoadingService) { }

  ngOnInit(): void {
    // Somewhere the stop method has been invoked
    this._loadingService.subscribe(res => {
      this.hideLoadingAnimation();
    });
  }

  private hideLoadingAnimation() {
    // Setting the transition
    this.loadingTransition = `opacity ${this.ANIMATION_DURATION}s`;
    this.opacityChange = 0;
    setTimeout(() => {
      // After the transition is ended the loading will be hided
      this.showLoading = !this.showLoading;
    }, 1000);
  }

}