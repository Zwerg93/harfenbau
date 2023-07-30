import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-angelica',
  templateUrl: './angelica.component.html',
  styleUrls: ['./angelica.component.scss']
})
export class AngelicaComponent {
  showDialog: boolean = true;

  constructor(private dialog: MatDialog) {
  }

  openLightbox(imageUrl: string): void {

  }
}
