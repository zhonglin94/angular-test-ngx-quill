import { Component } from '@angular/core';
export const FontSizeList: string[] = [
  '10px',
  '12px',
  '14px',
  '16px',
  '18px',
  '20px',
  '22px',
  '24px',
  '26px',
  '28px',
  '36px',
  '48px',
  '72px',
];

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  readonly modules = {
    toolbar: [
      [{ header: [1, 2, 3, /*4, 5, 6, */ false] }],
      [{ size: FontSizeList }], // custom dropdown
      // [{ 'font': [] }],
      ['bold', 'italic', 'underline', 'strike'], // toggled buttons
      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
      [{ align: [] }],
      ['blockquote', 'code-block'],
      // [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
      // [{ 'direction': 'rtl' }],                         // text direction
      ['link' /*, 'image', 'video'*/], // link and image, video
      ['clean'], // remove formatting button
    ],
  };
}
