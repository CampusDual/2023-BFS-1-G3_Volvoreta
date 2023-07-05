export class Reserve {
    id?: number
    id_user: string
    id_product: number
    units: number
    reservation_date?: Date
    reservation_state?: string
    reservation_days?: number
    unit_price: number
    total_price: number
    collection_completed: Date
    end_date: Date

    constructor(
        id_user: string,
        id_product: number,
        units: number,
        unit_price: number,
        total_price: number
    ) {
        this.id_user = id_user;
        this.id_product = id_product;
        this.units = units;
        this.unit_price = unit_price;
        this.total_price = total_price;
    }

}