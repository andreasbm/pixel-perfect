import { APP_BASE_HREF } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PlaygroundComponent } from "./playground/playground.component";
import { SharedModule } from "./shared/shared.module";
import { TypographyComponent } from './typography/typography.component';
import { StackComponent } from './stack/stack.component';
import { StackGridComponent } from './stack-grid/stack-grid.component';
import { ThemingComponent } from './theming/theming.component';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		AppRoutingModule,
		SharedModule.forRoot()
	],
	declarations: [AppComponent, PlaygroundComponent, TypographyComponent, StackComponent, StackGridComponent, ThemingComponent],
	providers: [
		{
			provide: APP_BASE_HREF,
			useValue: "/"
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}

