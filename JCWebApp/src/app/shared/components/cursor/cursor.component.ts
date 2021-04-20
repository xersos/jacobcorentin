import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'jc-cursor',
  templateUrl: './cursor.component.html',
  styleUrls: ['./cursor.component.scss']
})
export class CursorComponent {
  top: any;
  left: any;
  expand = false;

  constructor() {}


  @HostListener('document:click', ['$event'])
  onClick($event) {
     this.expand = true;
     setTimeout(() => {
      this.expand = false;
     }, 500);
 }

@HostListener('document:mousemove', ['$event'])
  onMousemove($event) {
    this.top = ($event.pageY - 10) + 'px';
    this.left = ($event.pageX - 10) + 'px';
 }

}
