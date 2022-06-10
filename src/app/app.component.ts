import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor() {}
  isHidden = false;

  ngOnInit(): void {
    const cookie = localStorage.getItem('cookie');
    if (cookie) {
      this.isHidden = true;
    }
  }

  onClick() {
    localStorage.setItem('cookie', 'true');
    this.isHidden = true;
  }

  title = 'pwiProjekt';
}
