import { Component } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
})
export class NotesComponent {
  notes: any = [];

  constructor() {
    this.notes = JSON.parse(localStorage.getItem('notes') || '[]');
  }

  deleteNote(note: any) {
    const index = this.notes.indexOf(note);
    if (index !== -1) {
      this.notes.splice(index, 1);
      localStorage.setItem('notes', JSON.stringify(this.notes));
    }
  }
}
