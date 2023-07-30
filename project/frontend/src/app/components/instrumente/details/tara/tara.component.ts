import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-tara',
  templateUrl: './tara.component.html',
  styleUrls: ['./tara.component.scss']
})
export class TaraComponent {
  showDialog:boolean = true;
  constructor(private dialog: MatDialog) {}

  openLightbox(imageUrl: string): void {

  }
}
