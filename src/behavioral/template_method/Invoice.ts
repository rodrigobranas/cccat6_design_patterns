import Item from "./Item";
import TaxItem from "./TaxItem";

export default class Invoice {
	items: Item[];

	constructor () {
		this.items = [];
	}

	addItem (item: Item) {
		this.items.push(item);
	}

	calculateTaxes () {
		return this.items.reduce((total, item) => {
			if (item instanceof TaxItem) {
				total += item.calculateTaxes();
			}
			return total;
		}, 0);
	}
}
