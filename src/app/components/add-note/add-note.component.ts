import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css'],
})
export class AddNoteComponent implements OnInit {
  addNoteForm!: FormGroup;

  constructor(private notesService: NotesService, private router: Router) {}

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
      this.router.navigate(['/notes']);
      this.addNoteForm.reset();
    }
  }
}
