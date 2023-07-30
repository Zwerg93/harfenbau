import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-irisch28',
  templateUrl: './irisch28.component.html',
  styleUrls: ['./irisch28.component.scss']
})
export class Irisch28Component {
  showDialog: boolean = true;

  constructor(private dialog: MatDialog) {
  }

  openLightbox(imageUrl: string): void {

  }
}
