import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

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

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    QuillModule.forRoot({
      customOptions: [
        {
          import: 'attributors/style/size',
          whitelist: FontSizeList,
        },
      ],
    }),
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
