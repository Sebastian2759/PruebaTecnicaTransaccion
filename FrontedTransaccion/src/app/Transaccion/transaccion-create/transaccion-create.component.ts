import { Component, NgModule } from '@angular/core';
import { TransaccionService } from '../Services/transaccion.service';
import { NgFor } from '@angular/common';
import { ClientesGlobalDto, ConcesionariosGlobalDto, VehiculosGlobalDto } from '../Interfaces/Transaccion';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-transaccion-create',
  standalone: true,
  imports: [NgFor,FormsModule,ReactiveFormsModule],
  templateUrl: './transaccion-create.component.html',
  styleUrl: './transaccion-create.component.css'
})
export class TransaccionCreateComponent {
  public formulario : FormGroup;
  private _transaccionService: TransaccionService;
  public automoviles: VehiculosGlobalDto[] = [];
  public concesionarios: ConcesionariosGlobalDto[] = [];
  public clientes: ClientesGlobalDto[]= [];
  constructor(transaccionService: TransaccionService,private formBuilder: FormBuilder)
  { 
    this._transaccionService = transaccionService;
    this.formulario = this.formBuilder.group({
      VehiculoID: '',
      ConcesionarioID: '',
      ClienteID: '',
      Fecha: '',
      Precio: ''
    });
    this.getAutomoviles();
    this.getConcesionarios();
    this.getClientes();
  }

  ngOnInit() {
    
  }
  private getAutomoviles() {
    this._transaccionService.getTransaccionByVehiculoID().subscribe(
      (automoviles: any) => {
        this.automoviles = automoviles;
        console.log(automoviles);
      },
      (error: any) => console.log(error)
    );
  }
  private  getConcesionarios() {
    this._transaccionService.getTransaccionByConcesionarioID().subscribe(
      (concesionarios: any) => {
        this.concesionarios = concesionarios;
        console.log(concesionarios);
      },
      (error: any) => console.log(error)
    );
  }
  private getClientes() {
    this._transaccionService.getTransaccionByClienteID().subscribe(
      (clientes: any) => {
        this.clientes = clientes;
        console.log(clientes);
      },
      (error: any) => console.log(error)
    );
  }
  onSubmit() {
    this._transaccionService.createTrans(this.formulario.value).subscribe(
      (transaccion: any) => {
        console.log(transaccion);
      },
      (error: any) => console.log(error)
    );
  }
}
