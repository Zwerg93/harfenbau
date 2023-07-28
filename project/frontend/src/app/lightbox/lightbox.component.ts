// lightbox.component.ts
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.scss']
})
export class LightboxComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public imageUrl: string,
    public dialogRef: MatDialogRef<LightboxComponent>
  ) {}

  close(): void {
    this.dialogRef.close();
  }
}
