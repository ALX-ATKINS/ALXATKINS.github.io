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
  }

}
