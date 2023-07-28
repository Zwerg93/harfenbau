import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LightboxComponent } from '../../../../lightbox/lightbox.component';


@Component({
  selector: 'app-tribella',
  templateUrl: './tribella.component.html',
  styleUrls: ['./tribella.component.scss']
})
export class TribellaComponent {
  showDialog:boolean = true;
  constructor(private dialog: MatDialog) {}

  openLightbox(imageUrl: string): void {



    this.dialog.open(LightboxComponent, {
      data: imageUrl
    });
  }

}
