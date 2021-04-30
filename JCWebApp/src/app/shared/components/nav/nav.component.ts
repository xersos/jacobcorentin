import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ThemeService } from '@shared/services';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ContactComponent } from '../contact/contact.component';

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
    public dialog: MatDialog,
    private _breakpointObserver: BreakpointObserver,
    private _themeService: ThemeService) {
    this._themeService.initTheme();
    this.isDarkMode = this._themeService.isDarkMode();
  }

  openDialog() {
    const dialogRef = this.dialog.open(ContactComponent, {width: 'auto'});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  toggleDarkMode() {
    this.isDarkMode = this._themeService.isDarkMode();

    this.isDarkMode
      ? this._themeService.update('light-mode')
      : this._themeService.update('dark-mode');
  }

}
