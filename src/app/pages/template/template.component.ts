import { Component, OnInit,NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  usuario = {
    nombre: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  guardar( forma: NgForm ){
    console.log(forma);
    console.log(forma.value);
  }

}
