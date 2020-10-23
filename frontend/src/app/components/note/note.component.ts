import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})

export class NoteComponent{
  @Input() public text: Text
  @Input() public color: string;
  constructor() {};
}