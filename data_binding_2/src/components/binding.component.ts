import { Component } from '@angular/core';

@Component({
  selector: 'binding-component',
  template: `
    <div flex="45">
      <h2>Interpolation</h2>
      <md-divider></md-divider>
      {{interpolatedValue}}
    </div>

    <div flex="45">
      <h2>Property Binding</h2>
      <md-divider></md-divider>
      <span [style.color]="componentStyle">Some colored text!</span>
    </div>

    <div flex="45">
      <h2>Event Binding</h2>
      <md-divider></md-divider>
      <div layout="column">
        <label>Click the button, alert the world!</label>
        <br>
        <button (click)="alertTheWorld()"
                md-button md-raised-button
                class="md-primary">Click me!</button>
      </div>
    </div>

    <div flex="45">
      <h2>Two-way Binding</h2>
      <md-divider></md-divider>
      <md-input [(ngModel)]="dynamicValue" type="text"
                placeholder="Watch the text update!"></md-input>
      <br>
      <span>{{dynamicValue}}</span>
    </div>

  `,
  styles: [`
    h2 {
      margin-bottom: 5px;
    }

    md-divider {
      margin-bottom: 5px;
    }

    md-input-container {
      margin-bottom: 0;
    }

    md-input-container:not(.md-input-invalid).md-input-focused .md-input {
      border-color: #2196F3
    }

    md-input-container:not(.md-input-invalid).md-input-focused label {
      color: #2196F3;
    }
  `]
})

export class BindingComponent {
  interpolatedValue: string = 'My Awesome Value';
  componentStyle: string = 'red';
  dynamicValue: string = 'Winning!';

  alertTheWorld(): void {
    alert('I clicked the button!');
  }
}
