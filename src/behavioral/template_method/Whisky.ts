import TaxItem from "./TaxItem";

export default class Whisky extends TaxItem {

	constructor (readonly description: string, readonly price: number) {
		super("Whisky", description, price);
	}

	calculateTaxes(): number {
		return this.price * 0.2;
	}
}