import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-gotische-h25-s',
  templateUrl: './gotische-h25-s.component.html',
  styleUrls: ['./gotische-h25-s.component.scss']
})
export class GotischeH25SComponent {
  showDialog:boolean = true;
  constructor(private dialog: MatDialog) {}

  openLightbox(imageUrl: string): void {

  }
}
