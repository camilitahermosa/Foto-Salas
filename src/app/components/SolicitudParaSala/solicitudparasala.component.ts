import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Soli} from '../../dto/soli';
import {DynamicFormBuilder, DynamicFormGroup} from 'ngx-dynamic-form-builder';

@Component({
  selector: 'app-solicitudparasala',
  templateUrl: './solicitudparasala.component.html',
  styleUrls: ['./solicitudparasala.component.scss']
})
export class SolitudParaSalaComponent implements OnInit {
  public form: DynamicFormGroup<Soli>;
  constructor(private fb: DynamicFormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group(Soli, {
      date: new Date(), name: '', lab: '', asign: '', teacher: '', faculty: '', 
      students: '', cantMachines: '', cantConsume: '', observation: '', useMachines: false,
      useLab: false, guide: false, aux: false, useConsume: false
    });
  }

}
