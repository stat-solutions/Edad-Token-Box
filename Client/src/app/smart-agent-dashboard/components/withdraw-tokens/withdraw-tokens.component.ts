import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-withdraw-tokens',
  templateUrl: './withdraw-tokens.component.html',
  styleUrls: ['./withdraw-tokens.component.scss']
})
export class WithdrawTokensComponent implements OnInit {
tokensInL: string;
  constructor() { }

  ngOnInit() {
  }

}
