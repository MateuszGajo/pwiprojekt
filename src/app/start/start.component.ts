import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent implements OnInit {
  isActive = false;
  isFixed = true;
  constructor() {}

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if (this.isFixed && window.scrollY > 0) this.isFixed = false;
    else if (!this.isFixed && window.scrollY === 0) this.isFixed = true;
    console.log(this.isFixed);
  }

  ngOnInit(): void {}

  onCloseButton() {
    this.isActive = false;
  }
  toggleNav() {
    console.log('toggle');
    this.isActive = !this.isActive;
  }
}
