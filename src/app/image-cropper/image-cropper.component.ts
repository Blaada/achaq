import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import Cropper from 'cropperjs';
import {ImageCropperModule} from 'ngx-image-cropper';

@Component({
  selector: 'app-image-cropper',
  templateUrl: './image-cropper.component.html',
  styleUrls: ['./image-cropper.component.css']
})
export class ImageCropperComponent implements OnInit {
  css: string;

  @ViewChild('image', {static: false})
  public imageElement: ElementRef;

  @Input('src')
  public imageSource: string;

  public imageDestination: string;
  private cropper: Cropper;

  public constructor() {
    this.imageDestination = '';


  }


  public ngAfterViewInit() {
    this.cropper = new Cropper(this.imageElement.nativeElement, {
      zoomable: true,
      scalable: true,
      aspectRatio: 0,
      crop: () => {
        const canvas = this.cropper.getCroppedCanvas();
        this.imageDestination = canvas.toDataURL('image/png');
        this.css = document.getElementsByClassName('cropper-crop-box')[0].style.cssText;
      }
    });
  }



  public ngOnInit() {
  }


}
