import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule, RoutingComponents } from "./app.routing";
import { MaterialModule } from "./app.material";
import { CONFIG } from "./config.service";
import { FormsModule, ReactiveFormsModule, FormGroupDirective, FormGroup } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import 'hammerjs';
import { AppComponent } from './main/app.component';
import { DialogOverviewExampleDialog } from "./dialogs/apply/apply.modal";
import { LangDialog } from "./dialogs/lang/dialog.lang";
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { HttpModule, Http } from '@angular/http';

export function httpFactory(http: Http) {
	return new TranslateStaticLoader(http, '/assets/i18n', '.json')
}

@NgModule({
	declarations: [
		AppComponent,
		RoutingComponents,
		DialogOverviewExampleDialog,
		LangDialog
	],
	entryComponents: [DialogOverviewExampleDialog, LangDialog],
	imports: [
		BrowserModule,
		AppRoutingModule,
		MaterialModule,
		BrowserAnimationsModule,
		NgbModule.forRoot(),
		FormsModule,
		ReactiveFormsModule,
		TranslateModule.forRoot({
			provide: TranslateLoader,
			useFactory: (httpFactory),
			deps: [Http]
		})
	],
	exports: [],
	providers: [CONFIG],
	bootstrap: [AppComponent]
})
export class AppModule { }
