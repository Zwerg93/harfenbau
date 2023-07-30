import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-gotische-h30-s',
  templateUrl: './gotische-h30-s.component.html',
  styleUrls: ['./gotische-h30-s.component.scss']
})
export class GotischeH30SComponent {
  showDialog:boolean = true;
  constructor(private dialog: MatDialog) {}

  openLightbox(imageUrl: string): void {

  }
}
