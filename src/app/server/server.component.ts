import { 
  Component, 
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { LoggingService } from '../service/logging.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrl: './server.component.scss',
  providers: [LoggingService]
})
export class ServerComponent {
  @Input() server: { 
    id:  string,
    name: string, 
    status: boolean 
  };

  @Output() statusChanged = new EventEmitter<string>();
  constructor(
    private loggingService: LoggingService
  ) {
    this.server = { 
      id: 'abcdef1234567890',
      name: '', 
      status: false 
    };
    this.loggingService = loggingService;
  }

  _onChangeStatus() {
    this.statusChanged.emit(this.server.id);
    this.loggingService.logChangeStatus(this.server);
  }
}
