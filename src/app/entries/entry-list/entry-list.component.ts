import { Component } from '@angular/core';
import { EntryService } from '../shared/entry.service';

@Component({
	selector: 'app-entry-list',
	templateUrl: 'entry-list.component.html',
	styleUrls: ['entry-list.component.css']
}) 
export class EntryListComponent {
	constructor(private entryService: EntryService) {
		
	}
}