import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrl: './server.component.scss'
})
export class ServerComponent {
  @Input() server: { name: string, status: boolean };
  constructor(
  ) {
    this.server = { name: '', status: false };
  }
}
