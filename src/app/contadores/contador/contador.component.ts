import { Component } from "@angular/core";

 @Component({
     selector: 'app-contador',
     template: `
        <h1> {{ title }} </h1>
        <button (click)="acumular( -base )"> - {{ base }} </button>
        <span> {{ numero }} </span>
        <button (click)=" acumular( base )"> + {{ base }} </button>
     `
 })
export class ContadorComponent {
    public title : string = 'Acumulador App';
    public numero: number = 0;
    public base  : number = 5;
    acumular( valor: number ){
      this.numero += valor;
    }
}