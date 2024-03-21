import { 
  Component, 
  Injectable,
  Input
} from '@angular/core';
import { ServersService } from '../service/servers.service';
import { ServerType } from '../shared/server.type';

@Injectable()
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrl: './server.component.scss',
  providers: []
})
export class ServerComponent {
  @Input() server: ServerType;
  constructor(
    private serversService: ServersService,
  ) {
    this.serversService = serversService;
    this.server = this.serversService.getInitialServer();
  }


  _onChangeStatus(status: boolean) {
    this.serversService.onChangeStatus(this.server.id, status);
  }
}
