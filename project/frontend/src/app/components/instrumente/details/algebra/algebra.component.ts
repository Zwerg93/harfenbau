import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-algebra',
  templateUrl: './algebra.component.html',
  styleUrls: ['./algebra.component.scss']
})
export class AlgebraComponent {
  showDialog: boolean = true;

  constructor(private dialog: MatDialog) {
  }

  openLightbox(imageUrl: string): void {

  }
}
