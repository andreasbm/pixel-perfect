import { Component } from '@angular/core';

const template = `
<a routerLink="playground">Playground</a>
<router-outlet></router-outlet>
`;

@Component({
  selector: 'app',
  template: template
})
export class AppComponent {

  constructor() {
  }

}

