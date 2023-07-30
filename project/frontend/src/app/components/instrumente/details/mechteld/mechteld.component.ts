import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-mechteld',
  templateUrl: './mechteld.component.html',
  styleUrls: ['./mechteld.component.scss']
})
export class MechteldComponent {
  showDialog:boolean = true;
  constructor(private dialog: MatDialog) {}

  openLightbox(imageUrl: string): void {

  }
}
