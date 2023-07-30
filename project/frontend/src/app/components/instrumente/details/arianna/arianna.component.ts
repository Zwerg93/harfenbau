import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-arianna',
  templateUrl: './arianna.component.html',
  styleUrls: ['./arianna.component.scss']
})
export class AriannaComponent {
  showDialog:boolean = true;
  constructor(private dialog: MatDialog) {}

  openLightbox(imageUrl: string): void {

  }
}
