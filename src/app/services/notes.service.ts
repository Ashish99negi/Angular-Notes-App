import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  private notes: any[] = [];

  constructor() {
    this.notes = JSON.parse(localStorage.getItem('notes') || '[]');
  }

  addNote(note: any): void {
    this.notes.push(note);
    localStorage.setItem('notes', JSON.stringify(this.notes));
  }

  getNotes(): any[] {
    return this.notes;
  }
}
