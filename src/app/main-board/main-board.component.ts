import { Component } from '@angular/core';
import { LoggingService } from '../service/logging.service';

@Component({
  selector: 'app-main-board',
  templateUrl: './main-board.component.html',
  styleUrl: './main-board.component.scss',
  providers: [LoggingService]
})
export class MainBoardComponent {
  id: string;
  serverName: string;
  serverStatus: boolean;
  servers = [
    { id: this.getRandomId(16), name: 'Server 1', status: true },
    { id: this.getRandomId(16), name: 'Server 2', status: false },
  ];
  constructor(private loggingService: LoggingService) {
    this.id = this.getRandomId(16);
    this.serverName = '';
    this.serverStatus = false;
    this.loggingService = loggingService
  }

  onAddServer() {
    this.servers.push({ id: this.id, name: this.serverName, status: this.serverStatus });
    this.loggingService.logCreateNewServer({
      id: this.id,
      name: this.serverName,
      status: this.serverStatus
    });

    // Reset the form
    this.id = this.getRandomId(16);
    this.serverName = '';
    this.serverStatus = false;
  }

  getRandomId(length: number) {
    let result = '';

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return result;
  }

  onChangeStatus(id: string) {
    const server = this.servers.find(s => s.id === id);
    if (server) {
      server.status = !server.status;
    }
  }
}
