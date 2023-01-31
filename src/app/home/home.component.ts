import { Component } from '@angular/core';
import { max } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

  choice : number = -1;

  completeDetails = [
    {
      "year" : "2022 - Present",
      "title" : "Artist Management Coordinator",
      "company" : "Culture Collective · Part-time",
      "description" : "Dick Clark Productions produces the AMAs, Golden Globe Awards, Academy of Country Music Awards, Billboard Music Awards, New Year’s Rockin’ Eve with Ryan Seacrest",
      "work" : [
        "Modeled branded merchandise and created marketing materials to drive fan engagement and digital sales for the launch the AMA’s new fan merchandise",
        "Collected and organized digital assets including photos, logos, music, and artwork featured in award show nomination sequences, commercials, and red-carpet appearances",
        "Iterated marketing department's data infrastructure, grouping data partitions categorically then allocating freed space along company demands, allowing for pre-programming"
      ]
    },
    {
      "year" : "2022 - 2022",
      "title" : "Production Coordinator",
      "company" : "Dick Clark Productions · Part-time",
      "description" : "Dick Clark Productions produces the AMAs, Golden Globe Awards, Academy of Country Music Awards, Billboard Music Awards, New Year’s Rockin’ Eve with Ryan Seacrest",
      "work" : [
        "Modeled branded merchandise and created marketing materials to drive fan engagement and digital sales for the launch the AMA’s new fan merchandise",
        "Collected and organized digital assets including photos, logos, music, and artwork featured in award show nomination sequences, commercials, and red-carpet appearances",
        "Iterated marketing department's data infrastructure, grouping data partitions categorically then allocating freed space along company demands, allowing for pre-programming"
      ]
    },
    {
      "year" : "2021 - 2022",
      "title" : "A&R Scout",
      "company" : "Pulse Music Group · Internship",
      "description" : "Dick Clark Productions produces the AMAs, Golden Globe Awards, Academy of Country Music Awards, Billboard Music Awards, New Year’s Rockin’ Eve with Ryan Seacrest",
      "work" : [
        "Modeled branded merchandise and created marketing materials to drive fan engagement and digital sales for the launch the AMA’s new fan merchandise",
        "Collected and organized digital assets including photos, logos, music, and artwork featured in award show nomination sequences, commercials, and red-carpet appearances",
        "Iterated marketing department's data infrastructure, grouping data partitions categorically then allocating freed space along company demands, allowing for pre-programming"
      ]
    }    

  ]

  moveFunction(top : number, yPosition : number, height : number) {
    var tempOne = "translateX("
    var tempTwo = "%)"

    var diff = (yPosition - top) * 0.6;
    var offset = Math.min(diff / height, 1);

    var a = document.getElementById("firstSet") || {style: {transform: ""}};
    var b = document.getElementById("secondSet") || {style: {transform: ""}};
    
    var firstOffset = (offset * 9);
    console.log(firstOffset);
    
    a.style.transform = tempOne + Math.max(-9, -1 * firstOffset) + tempTwo;
    b.style.transform = tempOne +  Math.min(0, -1 * (9 - firstOffset)) + tempTwo;

  }

  async openExperience(choice : number) {

    var x = document.getElementById("experience") || {offsetTop: 0, offsetHeight: 0};
    var y = x.offsetTop - x.offsetHeight / 2;

    window.scrollTo(0, y);


    document.getElementsByTagName("body")[0].style.overflow = "hidden";
    

    this.choice = choice;
    var a = document.getElementById("details") ? document.getElementById("details") : {style : {width : "100%"}};
    if (a) {
      a.style.width = "var(--experienceDiv)";
    }
    await new Promise(r => setTimeout(r, 800));
    var b = document.getElementById("info") || {style : {opacity : "1"}};
    if (b) {
      b.style.opacity = "1";
    }
  }

  closeExperience() {
    document.getElementsByTagName("body")[0].style.overflow = "scroll";

    this.choice = -1;
    var b = document.getElementById("info") || {style : {opacity : "1"}};
    if (b) {
      b.style.opacity = "0";
    }

    var a = document.getElementById("details") ? document.getElementById("details") : {style : {width : "100%"}};
    if (a) {
      a.style.width = "0%";
    }
  }

  constructor() {
    window.addEventListener('scroll', () => {
      var x = document.getElementById("images") || {offsetTop: 0, offsetHeight: 0};
      var y = x.offsetTop - x.offsetHeight;
      var z = x.offsetTop + x.offsetHeight;
      if (window.scrollY >= y && window.scrollY <= z) {
        this.moveFunction(y, window.scrollY, x.offsetHeight);
      }
    });
  }

}
