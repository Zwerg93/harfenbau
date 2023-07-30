import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-keltisch',
  templateUrl: './keltisch.component.html',
  styleUrls: ['./keltisch.component.scss']
})
export class KeltischComponent {
  showDialog: boolean = true;

  constructor(private dialog: MatDialog) {
  }

  openLightbox(imageUrl: string): void {

  }
}
