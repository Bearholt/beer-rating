import { Injectable } from '@angular/core';
import { definitions } from '../models/supabase';
import { SupabaseService } from './backend/supabase.service';

@Injectable({
	providedIn: 'root',
})
export class BeersService {
	constructor(private supabase: SupabaseService) {}

	async getBeers(): Promise<any> {
		const { data: beers } = await this.supabase.client
			.from<definitions['beers']>('beers')
			.select('*');
		return beers;
	}
}
