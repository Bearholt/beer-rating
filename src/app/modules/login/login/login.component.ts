import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
	fgLogin = this.formBuilder.group({
		email: ['', [Validators.required]],
		password: ['', Validators.required],
	});

	constructor(
		private authService: AuthService,
		private formBuilder: FormBuilder
	) {}

	get fgLoginEmail(): AbstractControl | null {
		return this.fgLogin.get('email');
	}
	get fgLoginPassword(): AbstractControl | null {
		return this.fgLogin.get('password');
	}

	async login(): Promise<void> {
		try {
			await this.authService.login(
				this.fgLoginEmail?.value,
				this.fgLoginPassword?.value
			);
		} catch (e) {
			// TODO
			console.log('Error:', e);
		}
	}
}
