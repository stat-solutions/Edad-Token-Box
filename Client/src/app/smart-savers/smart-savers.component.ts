import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-smart-savers",
  templateUrl: "./smart-savers.component.html",
  styleUrls: ["./smart-savers.component.scss"],
})
export class SmartSaversComponent implements OnInit {
  user = "../../../../assets/avatar3.jpg";
  userName: string;
  imageUrl = "../assets/EdadLogo.jpg";
  boxUsage = "Box Usage";
  usage = ["Smart Saving", "Smart Vending"];

  isCollapsed: boolean;

  toggleClass: string;

  noNow = false;

  constructor() {}

  ngOnInit() {
    this.toggleArial();
  }

  toggleArial() {
    this.isCollapsed = !this.isCollapsed;

    this.toggletheClass(this.isCollapsed);
  }

  toggletheClass(theTogler: boolean) {
    if (theTogler) {
      this.toggleClass = "collapse navbar-collapse";

      // console.log(this.toggleClass);
    } else {
      this.toggleClass = "navbar-collapse";
      // console.log(this.toggleClass);
    }
  }
}
