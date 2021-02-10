import { Component, VERSION, ViewChildren, ElementRef, QueryList, NgZone, OnInit } from '@angular/core';
import { Control, IControl } from './control-value';
import { CdkDragMove } from '@angular/cdk/drag-drop';
// import { ResizableDragComponent } from '../resizable-drag/resizable-drag.component';
import { MatDialog } from '@angular/material/dialog';
import { ResizableDragComponent } from '../resizable-drag/resizable-drag.component';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css']
})
export class DragDropComponent implements OnInit {

  // tslint:disable-next-line:no-inferrable-types
  // public cancelable: boolean = false;

  selectedControl?: Control;
  controls?: Control[];
  lockAxis?: any = 'x|y'
  @ViewChildren('resizeBox') resizeBox?: QueryList<ElementRef>;
  @ViewChildren('dragHandleRB') dragHandleRB?: QueryList<ElementRef>;
  // tslint:disable-next-line:typedef-whitespace
  @ViewChildren('dragHandleRight') dragHandleRight?: QueryList<ElementRef>;
  // tslint:disable-next-line:typedef-whitespace
  @ViewChildren('dragHandleBottom') dragHandleBottom?: QueryList<ElementRef>;
  public cancelable = false;
  rows: any;
  width: number;
  height: number;

  constructor(private ngZone: NgZone, public dialog: MatDialog) {
    this.controls = [];
  }

  dragPosition = { x: 100, y: 100 };

  // tslint:disable-next-line:variable-name
  dragPosition_1 = { x: 200, y: 200 };
  // tslint:disable-next-line:variable-name
  dragPosition_2 = { x: 0, y: 0 };
  // tslint:disable-next-line:variable-name
  dragPosition_3 = { x: 0, y: 0 };

  // tslint:disable-next-line:typedef
  changePosition() {
    this.dragPosition = { x: this.dragPosition.x + 50, y: this.dragPosition.y + 50 };

    Object.entries(this.dragPosition).forEach(
      ([key, value]) => console.log(key, value),
      localStorage.setItem('key', JSON.stringify(this.dragPosition))
    );

    // const myStorage = window.localStorage;
    // myStorage.setItem(x: this.dragPosition);
  }

  // tslint:disable-next-line:typedef
  openDialog(): void {
    this.dialog.open(ResizableDragComponent, {
      width: '200px',
      height: '300px',

    });
  }

  ngOnInit(): void {
    const myStorage = window.localStorage;

    // this.list[0] = myStorage.getItem('pie');

  }
  // tslint:disable-next-line:member-ordering
  public list: Array<any> = [];
  // tslint:disable-next-line:typedef
  public gen() {
    // tslint:disable-next-line:align
    this.cancelable = true;
    this.list.push(this.dragPosition);

  }

  // tslint:disable-next-line:typedef
  removeItem(index) {
    this.controls.splice(index, 1); // remove 1 item at ith place
  }


  addControl(): void {
    const templateControl = new Control();
    templateControl.width = 450;
    templateControl.height = 200;
    templateControl.index = this.controls === undefined ? 0 : this.controls.length;

    this.controls.push(templateControl);
    this.selectedControl = templateControl;

    this.setCreateHandleTransform();
  }

  setCreateHandleTransform(): void {
    let rect: any = null;
    // tslint:disable-next-line:no-non-null-assertion
    this.resizeBox!.changes.subscribe(() => {
       // tslint:disable-next-line:no-non-null-assertion
      rect = this.resizeBox!.filter((element, index) => index === this.selectedControl!.index!)[0].nativeElement.getBoundingClientRect();
 // tslint:disable-next-line:no-non-null-assertion
      this.dragHandleRB!.changes.subscribe(() => {
         // tslint:disable-next-line:no-non-null-assertion
        
        this.setHandleTransform(this.dragHandleRB!.filter((element, index) => index === this.selectedControl!.index!)[0].nativeElement, rect, 'both');
      });

      this.dragHandleBottom!.changes.subscribe(() => {
        this.setHandleTransform(this.dragHandleBottom!.filter((element, index) => index === this.selectedControl!.index!)[0].nativeElement, rect, 'y');
      });

      this.dragHandleRight!.changes.subscribe(() => {
        this.setHandleTransform(this.dragHandleRight!.filter((element, index) => index === this.selectedControl!.index!)[0].nativeElement, rect, 'x');
      });
    });
  }

  setUpdateHandleTransform(): void {
    // eslint-disable-next-line no-console
    // console.log(this.resizeBox);
    const rect = this.resizeBox!.filter((element, index) => index === this.selectedControl!.index!)[0].nativeElement.getBoundingClientRect();
    this.setHandleTransform(this.dragHandleBottom!.filter((element, index) => index === this.selectedControl!.index!)[0].nativeElement, rect, 'y');
    this.setHandleTransform(this.dragHandleRB!.filter((element, index) => index === this.selectedControl!.index!)[0].nativeElement, rect, 'both');
    this.setHandleTransform(this.dragHandleRight!.filter((element, index) => index === this.selectedControl!.index!)[0].nativeElement, rect, 'x');

  }

  setHandleTransform(dragHandle: HTMLElement, targetRect: ClientRect | DOMRect, position: 'x' | 'y' | 'both'): void {
    const dragRect = dragHandle.getBoundingClientRect();
    const translateX = targetRect.width - dragRect.width;
    const translateY = targetRect.height - dragRect.height;
    // eslint-disable-next-line no-console
    // console.log(translateX + ':' + translateY);
    if (position === 'x') {
      dragHandle.style.transform = `translate3d(${translateX}px, 0, 0)`;
    }

    if (position === 'y') {
      dragHandle.style.transform = `translate3d(0, ${translateY}px, 0)`;
    }

    if (position === 'both') {
      dragHandle.style.transform = `translate3d(${translateX}px, ${translateY}px, 0)`;
    }
  }

  dragMove(dragHandle: HTMLElement, $event: CdkDragMove<any>, control: Control): void {
    this.selectedControl = control;
    this.ngZone.runOutsideAngular(() => {
      // tslint:disable-next-line:no-non-null-assertion
      this.resize(dragHandle, this.resizeBox!.filter((element, index) => index === control.index!)[0].nativeElement);
    });
  }
  // tslint:disable-next-line:no-trailing-whitespace

  resize(dragHandle: HTMLElement, target: HTMLElement): void {

    // eslint-disable-next-line no-console
    // console.log(this.templateControls);

    const dragRect = dragHandle.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();

    const width = dragRect.left - targetRect.left + dragRect.width;
    const height = dragRect.top - targetRect.top + dragRect.height;
    // tslint:disable-next-line:no-trailing-whitespace

    // this.selectedControl!.width = width;
    // this.selectedControl!.height = height;
    target.style.width = width + 'px';
    target.style.height = height + 'px';
    // tslint:disable-next-line:no-trailing-whitespace

    this.setUpdateHandleTransform();
  }

  // tslint:disable-next-line:typedef-whitespace
  clickControl(control: Control): void {
    this.selectedControl = control;
  }
}


  // tslint:disable-next-line:no-trailing-whitespace

