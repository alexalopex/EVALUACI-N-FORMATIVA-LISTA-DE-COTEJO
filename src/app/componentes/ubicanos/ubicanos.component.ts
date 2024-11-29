import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-ubicanos',
  templateUrl: './ubicanos.component.html',
  styleUrl: './ubicanos.component.css'
})
export class UbicanosComponent {
  formularioForm;
  datos_formulario: any;
  constructor(private formBuild: FormBuilder){
    this.formularioForm = this.formBuild.group({
      nombre: '',
      apellido: '',
      email: '',
      tlfo: '',
      mensaje: ''
    });
  }
  ngOnInit(){
    //console.log("Hola");
    //console.log(this.formularioForm);
  }
  enviarDatos(){
    console.log("Enviar datos")
    this.datos_formulario = this.formularioForm.value;
    console.log(this.formularioForm.value);
  }
}
