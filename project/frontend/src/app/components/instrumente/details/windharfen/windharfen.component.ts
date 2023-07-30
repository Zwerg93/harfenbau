import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-windharfen',
  templateUrl: './windharfen.component.html',
  styleUrls: ['./windharfen.component.scss']
})
export class WindharfenComponent2 {
  showDialog:boolean = true;
  constructor(private dialog: MatDialog) {}

  openLightbox(imageUrl: string): void {

  }
}
