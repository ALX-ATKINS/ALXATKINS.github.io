import { Component } from '@angular/core';

@Component({
  selector: 'app-project-four',
  templateUrl: './project-four.component.html',
  styleUrls: ['./project-four.component.scss', '../recycle/scss/variables.scss']
})

export class ProjectFourComponent {
  moveBg(top : number, yPosition : number, height : number) {
    var tempOne = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0,";
    var tempTwo = ", 0, 1)";

    var diff = (yPosition - top) * 1;
    var offset = Math.min(diff / height, 1);

    var a = document.getElementById("mainOverlayBg") || {style: {transform: ""}};

    var firstOffset = (offset * 100);

    if (firstOffset >= 50) {
      a.style.transform = tempOne + (50 - firstOffset) + tempTwo;
    } else {
      a.style.transform = tempOne + -1 * (firstOffset - 50) + tempTwo;
    }
  }

  moveFunction(top : number, yPosition : number, height : number) {
    var tempOne = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "
    var tempTwo = ", 0, 1)"

    var diff = yPosition - top;
    var offset = Math.min(diff / height, 1);

    var a = document.getElementById("one") || {style: {transform: ""}};
    var b = document.getElementById("two") || {style: {transform: ""}};
    
    var firstOffset = (offset * 60);
    if (firstOffset <= 30) {
        b.style.transform = tempOne + -1 * (30 - firstOffset) + tempTwo;
        a.style.transform = tempOne + (30 - firstOffset) + tempTwo;
    } else {
        b.style.transform = tempOne + (firstOffset - 30) + tempTwo;
        a.style.transform = tempOne + -1 * (firstOffset - 30) + tempTwo;
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

      var x = document.getElementById("phonephone") || {offsetTop: 0, offsetHeight: 0};
      var y = x.offsetTop - x.offsetHeight;
      var z = x.offsetTop + x.offsetHeight;
      if (window.scrollY >= y && window.scrollY <= z) {
        this.moveFunction(y, window.scrollY, x.offsetHeight);
      }

    });
  }

}
