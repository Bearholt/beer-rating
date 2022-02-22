import { Component, OnInit } from '@angular/core';
import { definitions } from '../../../shared/models/supabase';
import { BeersService } from '../../../shared/services/beers.service';

@Component({
	selector: 'app-beers',
	templateUrl: './beers.component.html',
	styleUrls: ['./beers.component.scss'],
})
export class BeersComponent implements OnInit {
	beers: definitions['beers'][] = [];

	constructor(private beersService: BeersService) {}

	ngOnInit(): void {
		this.getBeers();
	}

	async getBeers() {
		this.beers = await this.beersService.getBeers();
		console.log(this.beers);
	}
}
