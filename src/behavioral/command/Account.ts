export default class Account {
	private _balance = 0;

	constructor (readonly number: string) {
	}

	credit (amount: number) {
		this._balance += amount;
	}

	debit (amount: number) {
		this._balance -= amount;
	}

	get balance () {
		return this._balance;
	}
}
