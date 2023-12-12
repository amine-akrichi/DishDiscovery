import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-post-dialog',
  templateUrl: './post-dialog.component.html',
  styleUrl: './post-dialog.component.css',
})
export class PostDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
   // data.userId = sessionStorage.getItem('username') || '{}';
    data.id = 10000;
  }


  onFileChanged(event: any): void {
    const file = event.target.files?.[0];

    if (file) {
      this.convertImageToBlobString(file)
        .then((base64String) => {
          this.data.image = base64String;
        })
        .catch((error) => {
          console.error('Error converting image to base64:', error);
        });
    }
  }

  convertImageToBlobString(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        // 'result' property contains the data URL as a base64-encoded string
        const base64String = reader.result as string;
        resolve(base64String);
      };

      reader.onerror = (error) => {
        reject(error);
      };

      reader.readAsDataURL(file);
    });
  }
}
