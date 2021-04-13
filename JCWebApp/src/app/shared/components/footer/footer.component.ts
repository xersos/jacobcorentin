import { Component } from '@angular/core';

@Component({
  selector: 'jc-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  test: Date = new Date();
  isDarkMode: boolean;

}
