import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-merlin',
  templateUrl: './merlin.component.html',
  styleUrls: ['./merlin.component.scss']
})
export class MerlinComponent {
  showDialog: boolean = true;

  constructor(private dialog: MatDialog) {
  }

  openLightbox(imageUrl: string): void {

  }
}
