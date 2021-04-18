import { Component, EventEmitter, Output } from '@angular/core';
import { ThemeService } from '@shared/services';

@Component({
  selector: 'jc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() public sidenavToggle = new EventEmitter();

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

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

}
