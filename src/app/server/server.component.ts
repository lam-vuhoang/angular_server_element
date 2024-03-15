import { 
  Component, 
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrl: './server.component.scss'
})
export class ServerComponent {
  @Input() server: { 
    id:  string,
    name: string, 
    status: boolean 
  };

  @Output() statusChanged = new EventEmitter<string>();
  constructor(
  ) {
    this.server = { 
      id: 'abcdef1234567890',
      name: '', 
      status: false 
    };
  }

  _onChangeStatus() {
    this.statusChanged.emit(this.server.id);
  }
}
