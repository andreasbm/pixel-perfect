import { Component } from '@angular/core';

const template = `
<pp-navbar></pp-navbar>
<div style="padding: 12px;">
  <router-outlet></router-outlet>
</div>

`;

@Component({
  selector: 'app',
  template: template
})
export class AppComponent {



  constructor() {
  }

}

