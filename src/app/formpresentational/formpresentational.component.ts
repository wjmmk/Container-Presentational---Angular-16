import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-formpresentational',
  templateUrl: './formpresentational.component.html',
  styleUrls: ['./formpresentational.component.scss']
})
export class FormpresentationalComponent {
  @Input() isSwitchActive: boolean = true;
  @Output() switchToggled = new EventEmitter<boolean>();

  @Input() textArea: string = '';
  @Output() textAreaChanged = new EventEmitter<string>();


  @Input() showTextInput: boolean = true;
  @Input() showTable: boolean = true;
  @Input() showForm: boolean = true;
  @Input() showSwitch: boolean = true;


  onToggleSwitch(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.switchToggled.emit(target.checked);
  }

  onTextAreaChange(event: Event): void {
    const target = event.target as HTMLTextAreaElement;
    this.textAreaChanged.emit(target.value);
  }
}
