import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-entry-comment-form',
	templateUrl: 'entry-comment-form.component.html',
	styleUrls: ['entry-comment-form.component.css']
})
export class EntryCommentFormComponent {
	name: string = "";
	comment: string= "";
	@Output() onCommentAdded1 = new EventEmitter<{name: string; comment: string;}>();
	onSubmit() {
		let comment = { name: this.name, comment: this.comment };
		this.onCommentAdded1.emit(comment);
	}
}