import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Products } from 'src/app/models/products';

@Component({
  selector: 'app-reserve-dialog',
  templateUrl: './reserve-dialog.component.html',
  styleUrls: ['./reserve-dialog.component.css']
})
export class ReserveDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {product: Products, units: string, totalImport: number}) { }

  ngOnInit() {

  

  }

  reserveOK(){
    console.log("Reserva OK")
    console.log(this.data.product, this.data.units )
  }



}
