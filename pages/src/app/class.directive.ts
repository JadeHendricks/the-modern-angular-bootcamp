import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  constructor(private element: ElementRef) { }

  // using a setter to set the value of an element after the dom has loaded, using the Input() decorator
  // @Input('appClass') set backgroundColor(color: string) {
  //   this.element.nativeElement.style.backgroundColor = color;
  // }

    @Input('appClass') set classNames(classObj: any) {
    for (const key in classObj) {
      if (classObj[key] === true) {
        this.element.nativeElement.classList.add(key)
      } else {
        this.element.nativeElement.classList.remove(key);
      }
    }
  }

}
