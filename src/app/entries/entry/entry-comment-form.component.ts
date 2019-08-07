import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EntryService } from '../shared/entry.service';

@Component({
	selector: 'app-entry-comment-form',
	templateUrl: 'entry-comment-form.component.html',
	styleUrls: ['entry-comment-form.component.css']
})
export class EntryCommentFormComponent {
	name: string = "";
	comment: string = "";
	@Input() entryId: number;
	@Output() onCommentAdded1 = new EventEmitter<{name: string; comment: string;}>();
	// Registra cambios en variables ocacles creadas en el template del componente.
	@ViewChild('commentForm') commentForm: NgForm;

	constructor(private entryService: EntryService) {}

	onSubmit(commentForm: NgForm) {
		if (this.commentForm.invalid) return;
		let comment = { name: this.name, comment: this.comment };
		this.entryService.addComment(this.entryId, comment)
			.then(() =>  {
				this.onCommentAdded1.emit(comment);
				this.commentForm.resetForm();
			})
	}
}