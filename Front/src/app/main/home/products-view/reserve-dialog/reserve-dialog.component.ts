import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { DialogService, OntimizeService } from 'ontimize-web-ngx';
import { Products } from 'src/app/models/products';
import { Reserve } from 'src/app/models/reserve';
import { OResponse } from 'src/app/models/response';
import { ProductService } from 'src/app/services/product.service';
import { ReserveService } from 'src/app/services/reserve.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-reserve-dialog',
  templateUrl: './reserve-dialog.component.html',
  styleUrls: ['./reserve-dialog.component.css']
})
export class ReserveDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { product: Products, units: string, totalImport: number },
    private userService: UserService,
    private reserveService: ReserveService,
    private productService: ProductService,
    private dialogRef: MatDialogRef<ReserveDialogComponent>,
    protected dialogService: DialogService,
  ) { }

  ngOnInit() {
  }

  close(msg: string) {
    this.dialogRef.close(msg)
  }
  
  updateStock(id, newStock) {
    this.productService.updateStock(id, newStock).subscribe(res=> console.log(res));
  }

  reserveOK() {

    const currentUser = this.userService.getCurrentUser()

    const { product, units, totalImport } = this.data

    let newStock = product.stock - Number(units)

    let currentReserve = new Reserve(currentUser, product.id, Number(units), product.price, totalImport)

    this.reserveService.reserve(currentReserve).subscribe(({ code }: OResponse) => {
      if (code !== 0) {
        this.dialogService.error("reservation error", "error when making the reservation");
        return
      }
        this.updateStock(product.id, newStock);
        // TODO-> pendiente crear una funcion para calcular la fecha actual + 7 dias de reserva
        this.close("Has reservado " + product.name + ", " + units + " unidades. Pasa a recoger tu pedido antes de 7 dias");
      
    })

  }
  reserveCancel(){
    this.close('Has cancelado la reserva');
  }

}
