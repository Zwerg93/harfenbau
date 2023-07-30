import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-doble-aragones',
  templateUrl: './doble-aragones.component.html',
  styleUrls: ['./doble-aragones.component.scss']
})
export class DobleAragonesComponent {
  showDialog: boolean = true;

  constructor(private dialog: MatDialog) {
  }

  openLightbox(imageUrl: string): void {

  }
}
