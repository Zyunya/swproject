import { Component, Inject,OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TranslateService } from 'ng2-translate';

@Component({
	selector: 'lang-dialog',
	templateUrl: 'dialog.lang.html',
	styleUrls: ['dialog.lang.scss'],
})


export class LangDialog {

	constructor(
		public dialogRef: MatDialogRef<LangDialog>,
		public translate: TranslateService,

		@Inject(MAT_DIALOG_DATA) public data: any
	){

	}
	ngOnInit(){

	}

	onNoClick(): void {
		this.dialogRef.close();
	}

	public change_lang(lang): void {
		this.translate.use(lang);
	}



}

