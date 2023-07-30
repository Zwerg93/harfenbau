import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-kantele',
  templateUrl: './kantele.component.html',
  styleUrls: ['./kantele.component.scss']
})
export class KanteleComponent {
  showDialog: boolean = true;

  constructor(private dialog: MatDialog) {
  }

  openLightbox(imageUrl: string): void {

  }
}
