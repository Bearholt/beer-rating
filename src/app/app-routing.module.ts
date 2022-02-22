import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RedirectLoggedInGuard } from './shared/guards/redirect-logged-in.guard';
import { RedirectUnauthorizedGuard } from './shared/guards/redirect-unauthorized.guard';

const routes: Routes = [
	{
		path: 'login',
		loadChildren: () =>
			import('./modules/login/login.module').then((m) => m.LoginModule),
		canLoad: [RedirectLoggedInGuard],
	},
	{
		path: 'beers',
		loadChildren: () =>
			import('./modules/beers/beers.module').then((m) => m.BeersModule),
		canLoad: [RedirectUnauthorizedGuard],
	},
	{
		path: '',
		redirectTo: '/beers',
		pathMatch: 'full',
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
