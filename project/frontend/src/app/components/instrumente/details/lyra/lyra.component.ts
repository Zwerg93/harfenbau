import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-lyra',
  templateUrl: './lyra.component.html',
  styleUrls: ['./lyra.component.scss']
})
export class LyraComponent {
  showDialog:boolean = true;
  constructor(private dialog: MatDialog) {}

  openLightbox(imageUrl: string): void {
    // this.dialog.open(LightboxComponent, {
    //   data: imageUrl
    //  });
  }
}
