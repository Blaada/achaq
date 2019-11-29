import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PdfViewerModule} from 'ng2-pdf-viewer';
import {ImageCropperModule} from 'ngx-image-cropper';
import { ImageCropperComponent } from './image-cropper/image-cropper.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageCropperComponent
  ],
  imports: [
    BrowserModule,
    PdfViewerModule,
    ImageCropperModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
