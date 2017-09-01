import { AfterViewInit, Component } from "@angular/core";
import { CssVariable, ThemeService } from "../shared/theme/theme.service";

@Component({
	templateUrl: "./playground.component.html",
	styleUrls: ["./playground.component.scss"]
})
export class PlaygroundComponent implements AfterViewInit {
	zIndexes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	navbarColor: CssVariable;
	navbarColorBg: CssVariable;
	appText: CssVariable;
	appBg: CssVariable;

	constructor (private theme: ThemeService) {
	}

	ngAfterViewInit () {
		this.navbarColor = this.theme.get("navbar-color");
		this.navbarColorBg = this.theme.get("navbar-bg");
		this.appText = this.theme.get("app-text");
		this.appBg = this.theme.get("app-bg");

		console.log(this.getTheme());
	}

	private getTheme () {
		return {
			"navbar-color": this.navbarColor,
			"navbar-bg": this.navbarColorBg,
			"app-text": this.appText,
			"app-bg": this.appBg
		};
	}

	updateTheme () {
		this.theme.setVars(this.getTheme());
	}

}
