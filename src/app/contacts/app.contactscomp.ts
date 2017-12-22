import { Component, OnInit } from '@angular/core';
import { animations_array } from "../animations";
import GoogleMapsLoader from "google-maps";
import { environment } from "../../environments/environment";

@Component({
	selector: 'app-contacts',
	templateUrl: "./app.contactscomp.pug",
	styleUrls: ['./app.contactscomp.scss'],
	animations: [animations_array]
})

export class ContactsComponent implements OnInit {
	public maper;
	public header;
	public mapdiv;
	public buttonrow;
	private googleKey: String;
	constructor(

	) {

		this.googleKey = environment.GOOGLE_MAPS_KEY;

	}

	ngOnInit() {

		this.init_googlemaps();

	}

	init_googlemaps(): void {

		const mapOpts = {
			center: { lat: 46.46, lng: 30.74 },
			zoom: 13
		};

		GoogleMapsLoader.KEY = this.googleKey;
		GoogleMapsLoader.load(function (google) {
			var map = new google.maps.Map(document.querySelector('#googlemaps'), mapOpts);
			var infoWindow = new google.maps.InfoWindow({ map: map });
			infoWindow.setPosition(mapOpts.center);
			infoWindow.setContent("<h5>Ukraine , Odessa </h5><h4 class = 'rancho'>Sweetvel<h4><h6>Tel : +380738881608</h6><h6>E-Mail : hello@sweetvel.com</h6>");
		})



	}

}