import { Component } from '@angular/core';

@Component({
  selector: 'app-touch-event',
  template:`
         <div class="gestures" (click)="onElementClick()">
          Click me
        </div>
        <div class="gestures" (tap)="onElementTap()">
          Tap me
        </div>
        <div class="gestures" (press)="onElementLongPressed()">
         Long press me
        </div>
        <div class="gestures" (swipe)="onElementSwipped()">
           Swipe me
        </div>
  `
})

export class TouchEventComponent {


  onElementClick() {
    console.log('I am clicked!');
  }
  onElementTap(){
    console.log('I am tapped!');
  }
  onElementLongPressed(){
    console.log('I am long pressed!');
  }
  onElementSwipped() {
    console.log('I am swipped!');
  }
}
