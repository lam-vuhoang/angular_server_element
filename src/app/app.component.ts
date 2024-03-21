import { Component, OnInit } from '@angular/core';
import { ServersService } from './service/servers.service';
import { ServerType } from './shared/server.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  servers: ServerType[] = [];

  constructor(
    private serversService: ServersService
  ) {}

  ngOnInit(): void {}
}
