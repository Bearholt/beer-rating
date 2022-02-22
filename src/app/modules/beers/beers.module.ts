import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BeersRoutingModule } from './beers-routing.module';
import { BeersComponent } from './beers/beers.component';

@NgModule({
	declarations: [BeersComponent],
	imports: [CommonModule, BeersRoutingModule],
})
export class BeersModule {}
