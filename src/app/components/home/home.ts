import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MATERIAL_MODULES } from '../../shared/material';
import { ImageDialog } from '../image-dialog/image-dialog';

@Component({
  selector: 'app-home',
  imports: [MATERIAL_MODULES],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  constructor(private dialog: MatDialog) {}

  openImage(image: string) {
    this.dialog.open(ImageDialog, {
      data: { image },
      panelClass: 'custom-dialog',
      maxWidth: '95vw',
      maxHeight: '95vh',
      width: 'auto',
      height: 'auto'
    });
  }

}
