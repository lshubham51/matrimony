import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  link1  ="Tour of Heroes"
  link2  ="CLI Documentation"
  link3  ="Angular blog"
  constructor() { }

  ngOnInit() {
  }

}
