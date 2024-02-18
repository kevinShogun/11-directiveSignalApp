import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]',
})
export class CustomLabelDirective implements OnInit {
  private htmlElement?: ElementRef<HTMLElement>;
  private _color: string = 'red';
  private _errrors?: ValidationErrors | null;

  @Input() set color(value: string) {
    this._color = value;
    this.setStyle();
  }

  @Input() set errors(value: ValidationErrors | null | undefined) {
    this._errrors = value;
    this.setErrorMsg();
    console.log(value);
  }

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
    // this.htmlElement.nativeElement.innerHTML = 'Hola'
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  setStyle(): void {
    if (!this.htmlElement) return;
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setErrorMsg(): void {
    if (!this.htmlElement) return;
    if (!this._errrors) {
      this.htmlElement.nativeElement.innerHTML = 'No hay errores';
      return;
    }

    const errors = Object.keys(this._errrors);

    if (errors.includes('required')) {
      this.htmlElement.nativeElement.innerHTML = 'Este campo es requerido';
      return;
    }

    if (errors.includes('minlength')) {
      this.htmlElement.nativeElement.innerHTML = `El valor minino debe ser de ${this._errrors['minlength'].requiredLength} caracteres`;
      return;
    }

    if (errors.includes('email')) {
      this.htmlElement.nativeElement.innerHTML =
        'El valor digitado debe ser email valido';
      return;
    }
  }
}
