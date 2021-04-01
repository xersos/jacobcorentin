import { Component } from '@angular/core';
import { ThemeService } from '@shared/services';


@Component({
  selector: 'jc-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  isDarkMode: boolean;
  showFiller = false;

  constructor(private _themeService: ThemeService) {
    this._themeService.initTheme();
    this.isDarkMode = this._themeService.isDarkMode();
  }

  toggleDarkMode() {
    this.isDarkMode = this._themeService.isDarkMode();

    this.isDarkMode
      ? this._themeService.update('light-mode')
      : this._themeService.update('dark-mode');
  }
}
