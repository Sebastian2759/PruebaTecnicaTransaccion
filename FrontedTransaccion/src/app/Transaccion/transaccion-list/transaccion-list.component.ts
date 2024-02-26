import { Component } from '@angular/core';
import { Transaccion } from '../Interfaces/Transaccion';
import { TransaccionService } from '../Services/transaccion.service';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-transaccion-list',
  standalone: true,
  imports: [FormsModule,NgFor,NgIf],
  templateUrl: './transaccion-list.component.html',
  styleUrl: './transaccion-list.component.css'
})
export class TransaccionListComponent {
  public transacciones: Transaccion[] = [];
  private _transaccionService: TransaccionService;
  constructor(transaccionService: TransaccionService) { this._transaccionService = transaccionService; }

  ngOnInit() {
    this._transaccionService.getTransacciones().subscribe(
      (transacciones: Transaccion[]) => {
        this.transacciones = transacciones;
        console.log (transacciones);
      },
      (error: any) => console.log(error)
    );
  }


}
