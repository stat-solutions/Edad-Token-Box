import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {



    imageUrl = '../assets/EdadLogo.jpg';
    boxUsage = 'Box Usage';
    usage = ['Smart Saving', 'Smart Vending'];

    isCollapsed: boolean;

    toggleClass: string;

    noNow = false;

    constructor() { }

    ngOnInit() {
      this.toggleArial();
    }

    toggleArial() {

      this.isCollapsed = !this.isCollapsed;

      this.toggletheClass(this.isCollapsed);
    }

    toggletheClass(theTogler: boolean) {

      if (theTogler) {

        this.toggleClass = 'collapse navbar-collapse';

        // console.log(this.toggleClass);
      } else {

        this.toggleClass = 'navbar-collapse';
        // console.log(this.toggleClass);
      }

    }


}
