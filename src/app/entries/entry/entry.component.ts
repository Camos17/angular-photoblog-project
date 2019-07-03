import { Component } from '@angular/core';

@Component({
	selector: 'app-entry',
	templateUrl: 'entry.component.html',
	styleUrls: ['entry.component.css']
})
export class EntryComponent {
	title: string = 'My First photo in Angular';
	photo: string = 'http://placehold.it/800x500?text=Angular Basics Photo';
	description: string = 'Lorem ipsum dolor sit amet consectetur adipiscing elit urna, cras commodo suspendisse litora rhoncus dis nascetur tortor, venenatis proin aenean ornare vulputate torquent volutpat. Diam sem hendrerit facilisi eleifend quis etiam tristique scelerisque, lacinia per';
	comments: any[] = [
		{ name: "john", comment: "suspendisse litora rhoncus dis nascetur tortor, venenatis proin aenean"},
		{ name: "john", comment: "suspendisse litora rhoncus dis nascetur tortor, venenatis proin aenean" },
		{ name: "john", comment: "suspendisse litora rhoncus dis nascetur tortor, venenatis proin aenean" }
	]
}