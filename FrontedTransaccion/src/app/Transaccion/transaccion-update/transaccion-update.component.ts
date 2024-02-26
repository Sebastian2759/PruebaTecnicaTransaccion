import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TransaccionService } from '../Services/transaccion.service';
import { Router } from 'express';
import { ActivatedRoute } from '@angular/router';
import { ClientesGlobalDto, ConcesionariosGlobalDto, Transaccion, VehiculosGlobalDto } from '../Interfaces/Transaccion';
import { get } from 'http';

@Component({
  selector: 'app-transaccion-update',
  standalone: true,
  imports: [NgFor, FormsModule, ReactiveFormsModule,CommonModule],
  templateUrl: './transaccion-update.component.html',
  styleUrl: './transaccion-update.component.css'
})
export class TransaccionUpdateComponent {
  public   formulario: FormGroup;
  private _transaccionService: TransaccionService;
  public vehiculo: VehiculosGlobalDto[] = [];
  public concesionarios: ConcesionariosGlobalDto[] = [];
  public clientes: ClientesGlobalDto[]= [];
  miTransaccion: Transaccion = {
    transaccionID: 0,
    vehiculo: {} as VehiculosGlobalDto,
    vehiculoID: 0,
    cliente: {} as ClientesGlobalDto,
    clienteID: 0,
    concesionario: {} as ConcesionariosGlobalDto,
    concesionarioID: 0,
    fechaVenta: new Date(),
    precioVenta: 0
  };


  constructor(private route: ActivatedRoute, transaccionesService: TransaccionService,private fb: FormBuilder) {
    this.formulario = this.fb.group({
      vehiculoID: [''],
      clienteID: [''],
      concesionarioID: [''],
      fechaVenta: [''],
      precioVenta: ['']
    });

    this._transaccionService = transaccionesService;
    this.route.params.subscribe(params => {
      this._transaccionService.getTransaccion(params['id']).subscribe(
        (transaccion: Transaccion) => {
          this.miTransaccion = transaccion;
          // fecha dias mes año
          this.formulario.patchValue(this.miTransaccion);
          this.ObtenerConcesionarios();
          this.ObtenerClientes();
          this.ObtenerVeiculos();
        }
      );
    });

  }
 
  ObtenerConcesionarios() {
     this._transaccionService.getTransaccionByConcesionarioID().subscribe(
      (concesionario:  ConcesionariosGlobalDto[]) => {
        this.concesionarios = concesionario;
        const concesionarioTransaccion = this.concesionarios.find(c => c.concesionarioID === this.miTransaccion.concesionarioID);
        if (concesionarioTransaccion) {
          this.formulario.patchValue({ concesionarioID: concesionarioTransaccion.concesionarioID });
        }
      });
  }
  ObtenerClientes() {
    this._transaccionService.getTransaccionByClienteID().subscribe(
      (cliente: ClientesGlobalDto[]) => {
        this.clientes = cliente;
        const clienteTransaccion = this.clientes.find(c => c.clienteID === this.miTransaccion.clienteID);
        if (clienteTransaccion) {
          this.formulario.patchValue({ clienteID: clienteTransaccion.clienteID });
        }
      });
  }
  ObtenerVeiculos() {
    this._transaccionService.getTransaccionByVehiculoID().subscribe(
      (vehiculo: VehiculosGlobalDto[]) => {
        this.vehiculo = vehiculo;
        const vehiculoTransaccion = this.vehiculo.find(c => c.vehiculoID === this.miTransaccion.vehiculoID);
        if (vehiculoTransaccion) {
          this.formulario.patchValue({ vehiculoID: vehiculoTransaccion.vehiculoID });
        }
      });
  }
  ActulizarTransaccion() {
    this.miTransaccion = this.formulario.value;
    this._transaccionService.updateTrans(this.miTransaccion);
  }

  ngOnInit(): void {
   
  }
  submitForm(): void {
  }

}
