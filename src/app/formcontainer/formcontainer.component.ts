import { Component } from '@angular/core';

@Component({
  selector: 'app-formcontainer',
  templateUrl: './formcontainer.component.html',
  styleUrls: ['./formcontainer.component.scss']
})
export class FormcontainerComponent {
  isSwitchActive = false;
  textArea = '';

  onSwitchToggled(newValue: boolean): void {
    this.isSwitchActive = newValue;
    console.log('Nuevo estado del switch:', this.isSwitchActive);
  }

  onTextAreaChange(newText: string): void {
    this.textArea = newText;
    console.log('Nuevo valor del texto:', this.textArea);
  }
}
