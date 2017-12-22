import { Component, OnInit,  AfterViewInit ,ViewChild,ElementRef, HostListener } from '@angular/core';
import { trigger, style, transition, animate, group } from '@angular/animations';
import { animations_array } from "../animations";
import { environment } from '../../environments/environment';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogOverviewExampleDialog } from "../dialogs/apply/apply.modal";
import { LangDialog} from "../dialogs/lang/dialog.lang";
import { TranslateService } from 'ng2-translate';
import { NavigationEnd,NavigationStart, Router } from '@angular/router';



@Component({
	selector: 'app-root',
	templateUrl: './app.component.pug',
	styleUrls: ['./app.component.scss'],
	providers: [],
	animations: [animations_array]
})
export class AppComponent implements OnInit {

	public state: any;
	public backbtn;
	@ViewChild('buttonsGroup') public buttonsGroup : ElementRef

	constructor(
		public dialog: MatDialog,
		private translate : TranslateService,
		private router: Router
	) {
		this.translate.setDefaultLang('en');

			router.events.subscribe((event) => {

				if (event instanceof NavigationEnd) {
					if(this.router.url !== '/')
						this.backbtn = true;
					else{
						this.backbtn = false;
					}
				}

		});

	}
	ngOnInit() {

	}

	ngAfterViewInit(){
		//setTimeout(() => this.openDialog());
		setTimeout(() => this.openLangDialog());
	}

		@HostListener('window:scroll', ['$event'])
			onWindowScroll($event) {
				this.hideButtonsGroup();
		}

	public openDialog(): void {
		this.translate.get('apply').subscribe((res: string) => {
			let dialogRef = this.dialog.open(DialogOverviewExampleDialog,{
				width:'50%',
				panelClass: 'app-full-bleed-dialog',
				minWidth: '50%',
				height: '81%',
				autoFocus: false,
				data: { name: res}
			});
				dialogRef.afterClosed().subscribe(result => {
				console.log('The dialog was closed');
			});
		})
	}

	public openLangDialog(): void {

			let dialogRef = this.dialog.open(LangDialog,{
				width:'50%',
				maxWidth: '50%' ,
				height:"280px",
				maxHeight: '350px',
				panelClass: 'dialog-lang',
			});
				dialogRef.afterClosed().subscribe(result => {
				console.log('The dialog was closed');
			});

	}

	public hideButtonsGroup() : void{
			this.buttonsGroup.nativeElement.classList[window.pageYOffset > 170 ? 'add' : 'remove']('anim-content-top');
		}

}
