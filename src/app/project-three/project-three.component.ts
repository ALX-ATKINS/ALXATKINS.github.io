import { Component } from '@angular/core';

@Component({
  selector: 'app-project-three',
  templateUrl: './project-three.component.html',
  styleUrls: ['./project-three.component.scss', '../recycle/scss/variables.scss']
})

export class ProjectThreeComponent {
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
