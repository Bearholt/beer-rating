import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthUser } from '@supabase/supabase-js';
import { SupabaseService } from './backend/supabase.service';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	constructor(private supabase: SupabaseService, private router: Router) {}

	// Checks if a user is logged in. Returns the user if yes, null if not.
	userLoggedIn(): AuthUser | null {
		return this.supabase.client.auth.user();
	}

	// Logs the user in, or shows error messages
	async login(email: string, password: string): Promise<void> {
		const { error } = await this.supabase.client.auth.signIn({
			email,
			password,
		});
		if (error) {
			// Default
			throw 'The email and/or password was incorrect, or the email is not confirmed. Please try again.';
		}

		await this.router.navigate(['']);
	}

	// Logs the user out
	async logout(): Promise<void> {
		await this.router.navigate(['/login']);
		await this.supabase.client.auth.signOut();
	}
}
