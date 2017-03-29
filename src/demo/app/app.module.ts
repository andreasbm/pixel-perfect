import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {PlaygroundComponent} from './playground/playground.component';
import {AppRoutingModule} from './app-routing.module';
import {APP_BASE_HREF} from '@angular/common';

@NgModule({
  imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		AppRoutingModule
	],
  declarations: [AppComponent, PlaygroundComponent],
	providers: [
		{
			provide: APP_BASE_HREF,
			useValue: '/'
		}
	],
  bootstrap: [AppComponent]
})
export class AppModule {
}

