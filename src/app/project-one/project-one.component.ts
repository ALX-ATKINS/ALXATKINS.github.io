import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-project-one',
  templateUrl: './project-one.component.html',
  styleUrls: ['./project-one.component.scss', '../recycle/scss/variables.scss', '../recycle/scss/variablesMobile.scss', './projectOneMobile.component.scss']
})

export class ProjectOneComponent {

  index: number = 0;
  maxIndex: number = 15;

  @ViewChild('widgetsContent') widgetsContent!: ElementRef;

  moveBg(top : number, yPosition : number, height : number) {
    var tempOne = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0,";
    var tempTwo = ", 0, 1)";

    var diff = (yPosition - top) * 0.8;
    var offset = Math.min(diff / height, 1);

    var a = document.getElementById("mainOverlayBg") || {style: {transform: ""}};

    var firstOffset = (offset * 100);

    if (firstOffset >= 50) {
      a.style.transform = tempOne + (50 - firstOffset) + tempTwo;
    } else {
      a.style.transform = tempOne + -1 * (firstOffset - 50) + tempTwo;
    }
  }


  prev() {
    if (this.index != 0) {
      var slideChild = document.getElementById('smallipadpreview')?.scrollWidth || 0;

      this.widgetsContent.nativeElement.scrollLeft -= slideChild;

      this.index -= 1;
    }
  }

  next() {
    if (this.index != this.maxIndex) {
      var slideChild = document.getElementById('smallipadpreview')?.scrollWidth || 0;
      
      this.widgetsContent.nativeElement.scrollLeft += slideChild;

      this.index += 1
    }
  }



  constructor() {
    window.addEventListener('scroll', () => {
      var x = document.getElementById("mainOverlay") || {offsetTop: 0, offsetHeight: 0};
      var y = x.offsetTop - x.offsetHeight;
      var z = x.offsetTop + x.offsetHeight;
      if (window.scrollY >= y && window.scrollY <= z) {
        this.moveBg(y, window.scrollY, x.offsetHeight);
      }
    });

    
  }

}
