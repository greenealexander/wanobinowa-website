import { Component, OnInit } from '@angular/core';
import { ModalService } from './core/modal.service';

import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'body',
  host: { '[class.modal-active]': 'modalActive' },
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private modalActive: boolean;

  checkModalActive() {
    this.modalActive = ModalService.modalActive;
  }

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      document.body.scrollTop = 0;
    });
  }
}
