import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SolicitudesContactosService } from '../../servicios/solicitudes-contactos/solicitudes-contactos.service';
import { response } from 'express';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrl: './contactanos.component.css'
})
export class ContactanosComponent {
  formularioForm;
  datos_formulario: any;
  solicitudes_formulario_obtenidas:any;
  constructor(private formBuild: FormBuilder, private solicitudesContactosSrv:SolicitudesContactosService){
    this.formularioForm = this.formBuild.group({
      nombre: '',
      apellido: '',
      correo: '',
      telefono: '',
      mensaje: ''
    });
  }
  ngOnInit(){
    //console.log("Hola");
    //console.log(this.formularioForm);
    this.obtenerSolicitudesContactos();
  }
  enviarDatos(){
    this.datos_formulario = this.formularioForm.value;
    this.solicitudesContactosSrv.crearFormulario(this.datos_formulario).subscribe(
      (response:any) => {
        if(response.solicitud_formulario){
          console.log(response.solicitud_formulario)
          alert("Datos guardados correctamente");
          this.formularioForm.reset();
        }
        
      },error => {
        console.log(error);
      }
    )
  }

  obtenerSolicitudesContactos(){
    this.solicitudesContactosSrv.obtenerSolicitudesFormulario().subscribe(
      (response:any) => {
        this.solicitudes_formulario_obtenidas = response.solicitud_formulario;
        console.log(this.solicitudes_formulario_obtenidas);
      },error => {
        console.log(error)
      }
    )
  }
}
