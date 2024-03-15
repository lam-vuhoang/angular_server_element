import { Component } from '@angular/core';
import { ServerType } from '../shared/server.type';
import { ServersService } from '../service/servers.service';

@Component({
  selector: 'app-main-board',
  templateUrl: './main-board.component.html',
  styleUrl: './main-board.component.scss',
})
export class MainBoardComponent {  
  servers: ServerType[];
  server: ServerType;

  constructor(
    private serversService: ServersService,
  ) {
    this.serversService = serversService;

    this.servers = this.serversService.servers;
    this.server = this.serversService.getInitialServer();
  } 
  
  onChangeStatus(id: string) {
    const server = this.serversService.servers.find((s: ServerType) => s.id === id);
    if (server) {
      server.status = !server.status;
    }
  }

  onAddServer() {
    this.serversService.onAddServer(this.server);

    // Reset the form
    this.server = this.serversService.getInitialServer();
  }
}
