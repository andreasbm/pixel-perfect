import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "../app-routing.module";
import { NavbarComponent } from "./navbar/navbar.component";

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
}


