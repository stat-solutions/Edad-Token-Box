import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";


@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  navigation1() {
    this.router.navigate(["../registeradmin"]);
  }
  navigation2() {
    this.router.navigate(["authpage/register/registeragent"]);
  }
  navigation3() {
    this.router.navigate(["authpage/register/registervendor"]);
  }
  navigation4() {
    this.router.navigate(["authpage/register/registersaver"]);
  }
  navigation5() {
    this.router.navigate(["authpage/register/registergroupbox"]);
  }
  navigation6() {
    this.router.navigate(["authpage/register/registerboxforGod"]);
  }
  navigation7() {
    this.router.navigate(["authpage/register/registerschoolfeesbox"]);
  }
}
