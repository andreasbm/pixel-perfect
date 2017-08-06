import { Component } from "@angular/core";

@Component({
	selector: "pp-theming",
	templateUrl: "./theming.component.html",
	styleUrls: ["./theming.component.scss"]
})
export class ThemingComponent {
	colors = [
		"primary",
		"accent",
		"warn",
		"error",
		"success"
	];

	variants = [
		"default",
		"lighter",
		"darker"
	];

	contrasts = [
		"default-contrast",
		"lighter-contrast",
		"darker-contrast"
	];

}
