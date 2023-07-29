import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {LightboxComponent} from "../../../../lightbox/lightbox.component";

@Component({
  selector: 'app-linde',
  templateUrl: './linde.component.html',
  styleUrls: ['./linde.component.scss']
})
export class LindeComponent {
  showDialog:boolean = true;
  constructor(private dialog: MatDialog) {}

  openLightbox(imageUrl: string): void {
   // this.dialog.open(LightboxComponent, {
   //   data: imageUrl
  //  });
  }
}
