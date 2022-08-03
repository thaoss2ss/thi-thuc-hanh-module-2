export class Product {
    private _id: number;
    private _name: string;
    private _type: string;
    private _price: number;
    private _amount: number;
    private _date: Date;
    private _describe: string;


    constructor(id: number, name: string, type: string, price: number, amount: number, date: Date, describe: string) {
        this._id = id;
        this._name = name;
        this._type = type;
        this._price = price;
        this._amount = amount;
        this._date = date;
        this._describe = describe;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get type(): string {
        return this._type;
    }

    set type(value: string) {
        this._type = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }

    get amount(): number {
        return this._amount;
    }

    set amount(value: number) {
        this._amount = value;
    }

    get date(): Date {
        return this._date;
    }

    set date(value: Date) {
        this._date = value;
    }

    get describe(): string {
        return this._describe;
    }

    set describe(value: string) {
        this._describe = value;
    }
}