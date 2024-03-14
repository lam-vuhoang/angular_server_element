import { Component } from '@angular/core';

@Component({
  selector: 'app-main-board',
  templateUrl: './main-board.component.html',
  styleUrl: './main-board.component.scss'
})
export class MainBoardComponent {
  serverName: string;
  serverStatus: boolean;
  servers = [
    { name: 'Server 1', status: true },
    { name: 'Server 2', status: false },
  ];
  constructor() {
    this.serverName = '';
    this.serverStatus = false;
  }

  onAddServer() {
    this.servers.push({ name: this.serverName, status: this.serverStatus });
    this.serverName = '';
    this.serverStatus = false;
  }
}
