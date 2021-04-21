import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { ThemeService } from '@shared/services';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'jc-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  isDarkMode: boolean;
  showFiller = false;

  isHandset$: Observable<boolean> = this._breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(
    private _breakpointObserver: BreakpointObserver,
    private _themeService: ThemeService) {
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