import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {LightboxComponent} from "../../../../lightbox/lightbox.component";

@Component({
  selector: 'app-troubadour-figueras',
  templateUrl: './troubadour-figueras.component.html',
  styleUrls: ['./troubadour-figueras.component.scss']
})
export class TroubadourFiguerasComponent {
  showDialog:boolean = true;
  constructor(private dialog: MatDialog) {}

  openLightbox(imageUrl: string): void {

  }
}
