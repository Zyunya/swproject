import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
	MatButtonModule,
	MatCheckboxModule,
	MatToolbarModule,
	MatSidenavModule,
	MatIconModule,
	MatMenuModule,
	MatChipsModule,
	MatGridListModule,
	MatCardModule,
	MatInputModule,
	MatDialogModule,
    MatProgressSpinnerModule,
    

} from '@angular/material';

@NgModule({
	imports: [
		BrowserAnimationsModule,
		MatButtonModule,
		MatCheckboxModule,
		MatToolbarModule,
		MatSidenavModule,
		MatIconModule,
		MatMenuModule,
		MatChipsModule,
		MatGridListModule,
		MatCardModule,
		MatInputModule,
		MatDialogModule,
		MatProgressSpinnerModule
	],
	exports: [
		BrowserAnimationsModule,
		MatButtonModule,
		MatCheckboxModule,
		MatToolbarModule,
		MatSidenavModule,
		MatIconModule,
		MatMenuModule,
		MatChipsModule,
		MatGridListModule,
		MatCardModule,
		MatInputModule,
		MatDialogModule,
		MatProgressSpinnerModule
	],
})
export class MaterialModule { }