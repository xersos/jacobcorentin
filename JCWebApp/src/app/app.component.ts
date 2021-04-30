import { Component, OnInit } from '@angular/core';
import { RouteConfigLoadEnd, RouteConfigLoadStart, Router, RouterEvent } from '@angular/router';
import { environment } from '@env/environment';
import { EnvironmentConfigService } from '@shared/services';

@Component({
  selector: 'jc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loading: boolean;
  isTestEnv = false;
  title = 'JCWebApp';
  version = environment.version;

  constructor(
    router: Router,
    private _environmentConfigService: EnvironmentConfigService
  ) {
    this.loading = false;

    router.events.subscribe(
      (event: RouterEvent): void => {
        if (event instanceof RouteConfigLoadStart) {
          this.loading = true;
        } else if (event instanceof RouteConfigLoadEnd) {
          this.loading = false;
        }
      }
    );
  }

  ngOnInit() {
    this.isTestEnv = !this._environmentConfigService.config.isProd;
  }
}
