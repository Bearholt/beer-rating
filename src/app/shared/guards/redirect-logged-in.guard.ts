import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
	providedIn: 'root',
})
export class RedirectLoggedInGuard implements CanLoad {
	constructor(private auth: AuthService, private router: Router) {}

	async canLoad(): Promise<boolean> {
		const user = this.auth.userLoggedIn();

		if (user) {
			await this.router.navigate(['/beers']);
			return false;
		}

		return true;
	}
}
