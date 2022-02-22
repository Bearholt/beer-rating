import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
	providedIn: 'root',
})
export class RedirectUnauthorizedGuard implements CanLoad {
	constructor(private auth: AuthService, private router: Router) {}

	async canLoad(): Promise<boolean> {
		const user = this.auth.userLoggedIn();

		if (user) return true;

		await this.router.navigate(['/login']);
		return false;
	}
}
