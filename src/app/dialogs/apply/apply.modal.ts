import { Component, Inject,OnInit } from '@angular/core';
import { FormControl,FormGroup, FormGroupDirective, NgForm, Validators,FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ApplyService } from '../../services/apply.service';



@Component({
	selector: 'apply-dialog',
	templateUrl: 'apply.html',
	styleUrls: ['apply.scss'],
	providers: [ApplyService]
})


export class DialogOverviewExampleDialog {

	private apply: Object;
	private Form;
	private FormControlEmail;
	private FormControlDesc;
	private outpErr : String;
	private outpSuc : String;



	constructor(
		public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
		public APPLY_SERVICE: ApplyService,
		private formBuilder : FormBuilder,

		@Inject(MAT_DIALOG_DATA) public data: any
	){
		this.apply = {};

	}
	ngOnInit(){
		this.Form = this.formBuilder.group({
			email:  [Validators.required, Validators.email],
			desc:	[Validators.required],
			phone:	[],
		});
	}


	onNoClick(): void {
		this.dialogRef.close();
	}

	private Apply(): void {

		console.log(this.Form)
		if(this.Form.status === 'VALID')
		{
			this.APPLY_SERVICE.apply(this.apply).subscribe(

				res => {
					this.outpSuc = res.text;
					this.outpErr = '';
				},
				err => {
					this.outpErr = err.text;
					this.outpSuc = '';
				}
			)
		}
	}

}

