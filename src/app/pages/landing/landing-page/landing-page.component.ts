import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  scrollToHeader(element) {
    document.getElementById(element).scrollIntoView({behavior : 'smooth', block: 'start'});
    console.log('scrolling to ' + element);
  }

}
