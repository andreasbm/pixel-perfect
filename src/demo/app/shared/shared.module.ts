import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "../app-routing.module";
import { NavbarComponent } from "./navbar/navbar.component";
import { ThemeService } from "./theme/theme.service";

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		AppRoutingModule
	],
	exports: [
		CommonModule,
		FormsModule,
		AppRoutingModule,

		NavbarComponent
	],
	declarations: [
		NavbarComponent
	]
})
export class SharedModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: SharedModule,
			providers: [ThemeService]
		}
	}
}


