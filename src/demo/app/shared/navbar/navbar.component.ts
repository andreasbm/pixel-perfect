import { Component, OnInit } from '@angular/core';

function themeClass (theme: string) {
	return `theme-${theme}`;
}

@Component({
  selector: 'pp-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

	routes = [
		"playground",
		"typography",
		"stack",
		"stack-grid",
		"theming"
	];

	private currentTheme: string;

  constructor() { }

  ngOnInit() {
  	this.setTheme("light");
  }

  setTheme (theme: string) {
		const html = document.documentElement;
		html.classList.remove(themeClass(this.currentTheme));
		html.classList.add(themeClass(theme));
		this.currentTheme = theme;
  }

}
