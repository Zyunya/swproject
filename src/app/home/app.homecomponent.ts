

import { Component, OnInit, AfterViewInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { animations_array } from "../animations";
import { Router } from "@angular/router";
import { CONFIG } from "../config.service";
import { TranslateService } from 'ng2-translate';



@Component({
	selector: 'app-home',
	templateUrl: './app.homecomponent.pug',
	styleUrls: ['../main/app.component.scss'],
	animations: [animations_array]
})

export class HomeComponent implements OnInit {

	public content_animation: NodeListOf<Element>;
	public content_animation_vert: NodeListOf<Element>;
	public map;
	public modeltest: object = {};

	@ViewChild('homecontents') private homecontent: ElementRef;
	@ViewChild('header') private header: ElementRef;
	@ViewChild('buttonrow') private buttonrow: ElementRef;

	constructor(
		private CONFIG: CONFIG,
		private router: Router,
		public translate: TranslateService,
	) {

	}
	@HostListener('window:scroll', ['$event'])
		onWindowScroll($event) {
			this.anim_cont();
			this.anim_header();
	}


	ngOnInit() {

		this.map = document.getElementById('#googlemaps');
	}
	ngAfterViewInit() {

	}
	anim_header(): void {

		var scroll = this.header.nativeElement.clientHeight + window.scrollY - 70;//element height in px and scroll top in px
		if (this.router.url === '/') {

			if (window.pageYOffset > 90) {

				this.header.nativeElement.style.transform = 'translateY(-110%)';
				this.homecontent.nativeElement.style.transform = 'translateY(-120px)';
				//this.buttonrow.nativeElement.style.transform = 'translateY(-250px)';
			};
			if (window.pageYOffset < 90) {
				this.header.nativeElement.style.transform = 'translateY(0%)';
				this.homecontent.nativeElement.style.transform = 'translateY(0px)';
				//this.buttonrow.nativeElement.style.transform = 'translateY(0px)';
			};
		}


	}
	public anim_cont(): void {
		this.content_animation   = document.querySelectorAll('.anim_content');
		this.content_animation_vert = document.querySelectorAll('.anim_content_vert');

		[].forEach.call(this.content_animation, function (elm, index) {
			elm.getBoundingClientRect().top;
			elm.classList[elm.getBoundingClientRect().top < window.innerHeight - 100 ? "add" : "remove"]("animation1");
		});

		[].forEach.call(this.content_animation_vert , function (elm, index) {
			elm.getBoundingClientRect().top;
			elm.classList[elm.getBoundingClientRect().top < window.innerHeight - 100 ? "add" : "remove"]("animation1");
		})

	};
	public catchInfo(): void {
		console.log(this.modeltest)
	}

	public change_lang(lang): void {
		this.translate.use(lang);
	}


}


