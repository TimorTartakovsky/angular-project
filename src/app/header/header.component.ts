import { Component, OnInit } from '@angular/core';
import APP_MESSAGES from '../messages/app-messages';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  headerMessage = APP_MESSAGES.header;

  constructor() { }

  ngOnInit() {
  }

}
