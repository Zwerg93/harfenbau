import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-gotische-h36-s',
  templateUrl: './gotische-h36-s.component.html',
  styleUrls: ['./gotische-h36-s.component.scss']
})
export class GotischeH36SComponent {
  showDialog:boolean = true;
  constructor(private dialog: MatDialog) {}

  openLightbox(imageUrl: string): void {

  }
}
