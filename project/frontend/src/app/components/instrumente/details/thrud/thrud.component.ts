import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-thrud',
  templateUrl: './thrud.component.html',
  styleUrls: ['./thrud.component.scss']
})
export class ThrudComponent {
  showDialog:boolean = true;
  constructor(private dialog: MatDialog) {}

  openLightbox(imageUrl: string): void {

  }
}
