import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PlaygroundComponent } from "./playground/playground.component";
import { StackGridComponent } from "./stack-grid/stack-grid.component";
import { StackComponent } from "./stack/stack.component";
import { ThemingComponent } from "./theming/theming.component";
import { TypographyComponent } from "./typography/typography.component";

const routes: Routes = [
	{
		path: "playground",
		component: PlaygroundComponent
	},
	{
		path: "typography",
		component: TypographyComponent
	},
	{
		path: "theming",
		component: ThemingComponent
	},
	{
		path: "stack",
		component: StackComponent
	},
	{
		path: "stack-grid",
		component: StackGridComponent
	},
	{
		path: "**",
		redirectTo: "playground"
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule {
}