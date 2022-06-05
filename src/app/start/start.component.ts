import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent implements OnInit {
  isActive = false;
  constructor() {}

  ngOnInit(): void {}

  onCloseButton() {
    this.isActive = false;
  }
  toggleNav() {
    console.log('toggle');
    this.isActive = !this.isActive;
  }
}
