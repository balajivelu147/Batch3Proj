import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  sampleInput: string = 'balji';
  constructor() { }

  ngOnInit(): void {
    // when page load completes --> this is similar to "document.onload"
  }

  readInput(): void {
    console.log(this.sampleInput);
  }

}
