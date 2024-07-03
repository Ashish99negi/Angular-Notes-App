import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css'],
})
export class AddNoteComponent implements OnInit {
  addNoteForm!: FormGroup;

  constructor(private notesService: NotesService) {}

  ngOnInit(): void {
    this.addNoteForm = new FormGroup({
      noteTitle: new FormControl('', Validators.required),
      noteContent: new FormControl('', Validators.required),
    });
  }

  onSubmit(): void {
    if (this.addNoteForm.valid) {
      const note = {
        title: this.addNoteForm.get('noteTitle')?.value,
        content: this.addNoteForm.get('noteContent')?.value,
      };
      this.notesService.addNote(note);
      this.addNoteForm.reset();
    }
  }
}
