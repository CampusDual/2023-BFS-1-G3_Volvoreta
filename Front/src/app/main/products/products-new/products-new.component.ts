import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { OComboComponent, ODateInputComponent, OValidators } from 'ontimize-web-ngx';

@Component({
  selector: 'app-products-new',
  templateUrl: './products-new.component.html',
  styleUrls: ['./products-new.component.css']
})
export class ProductsNewComponent implements OnInit {
  @ViewChild("stateC", { static: true }) selectC: OComboComponent;
  @ViewChild("inputDate", { static: true }) inputDate: ODateInputComponent;

  validatorsArray: ValidatorFn[] = [];
  today: Date = new Date()
  private VALIDATOR = {
    HASCHAR: "* Debes introducir un número entero y positivo",
    HASNEGATIVE: "* Debes introducir un número positivo"
  }

  constructor() {
    this.validatorsArray.push(OValidators.patternValidator(/[1-9]/, 'hasNumber'));
    this.validatorsArray.push(this.stockValidator)
    this.validatorsArray.push(this.priceValidator)
  }

  ngOnInit() {

    console.log(this.today.getDate())

  }

  defaultId(event) {
    this.selectC.setValue(2);
  }

  defaultDate() {

    let today: Date = new Date()
    console.log("event")
    console.log(today.getDate())

    this.inputDate.setData(today.getDate())

    this.inputDate.setValue(today.getDate());
  }

  // Funcion custom para personalizar la validacion
  stockValidator(control: FormControl): ValidationErrors {

    if (!control.value) return

    let itemsNotIncludes = ['.', ',', 'e', '-']

    let auxArr: string[] = control.value.toString().split("")

    for (let item = 0; item < auxArr.length; item++) {

      if (itemsNotIncludes.includes(auxArr[item])) {
        return { 'hasChar': true, };
      }

    }
  }

  // Funcion custom para personalizar la validacion
  priceValidator(control: FormControl): ValidationErrors {

    if (!control.value) return

    console.log(control.value.toString().includes('-'))

    if (control.value.toString().includes('-')) {
      return { 'hasNegative': true, };
    }

    return {}

  }


}
