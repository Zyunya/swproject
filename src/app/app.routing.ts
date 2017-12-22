import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router, NavigationStart } from '@angular/router';
import { ContactsComponent } from './contacts/app.contactscomp';
import { HomeComponent } from './home/app.homecomponent';


export const AppRoutes: Routes = [
	{ path: '',			component: HomeComponent },
	{ path: 'contacts', component: ContactsComponent }
];



@NgModule({
	imports: [RouterModule.forRoot(AppRoutes)],
	exports: [RouterModule],
	providers: [],
})


export class AppRoutingModule {

	constructor(router: Router) {
		router.events.subscribe((event) => {
			if (event instanceof NavigationStart) {
				console.log('Route Changed')
			}

		});
	}
}

export const RoutingComponents = [HomeComponent, ContactsComponent];