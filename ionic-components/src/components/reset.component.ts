import { Component, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-reset',
  template: `
  <ion-grid>
  <ion-row>
    <ion-col col-4>
      <button ion-button small block (click)="onReset('all')" color="danger">
        Reset all
      </button>
    </ion-col>
    <ion-col col-4>
      <button ion-button small  block (click)="onReset('taps')" color="danger">
      Reset "taps"
    </button>
  </ion-col>
    <ion-col col-4>
      <button ion-button small block (click)="onReset('presses')" color="danger">
      Reset "presses"
    </button>
  </ion-col>
  </ion-row>
  </ion-grid>
  `
})
export class ResetComponent {
@Output() didReset = new EventEmitter<String> ();
  onTapped() {
    /* this.nbTapped = this.nbTapped + 1; */
  }
  onPressed() {
    /* this.nbPressed = this.nbPressed + 1; */
  }
  onRestPresses() {
  /*   this.nbPressed = 0; */
  }
  onResetTaps() {
    /* this.nbTapped = 0;; */
  }
  onResetAll() {
    /* this.nbTapped = 0;
    this.nbPressed = 0; */
  }
  onReset(type: string) {
    /* this.nbTapped = 0;
    this.nbPressed = 0; */
    this.didReset.emit(type);
  }
}
