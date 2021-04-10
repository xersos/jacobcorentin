import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';
import { EnvironmentConfigService } from '@shared/services';

@Component({
  selector: 'jc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isTestEnv = false;
  title = 'JCWebApp';
  version = environment.version;

  constructor(
    private _environmentConfigService: EnvironmentConfigService
  ) {}

  ngOnInit() {
    this.isTestEnv = !this._environmentConfigService.config.isProd;
  }
}
