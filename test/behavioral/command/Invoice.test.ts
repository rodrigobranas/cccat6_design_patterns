import Account from "../../../src/behavioral/command/Account";
import CreditCommand from "../../../src/behavioral/command/CreditCommand";
import DebitCommand from "../../../src/behavioral/command/DebitCommand";

test("Deve criar uma conta", function () {
	const account = new Account("00897786");
	expect(account.balance).toBe(0);
});

test("Deve creditar uma conta", function () {
	const account = new Account("00897786");
	account.credit(100);
	expect(account.balance).toBe(100);
});

test("Deve debitar uma conta", function () {
	const account = new Account("00897786");
	account.credit(100);
	account.debit(50);
	expect(account.balance).toBe(50);
});

test("Deve creditar uma conta", function () {
	const account = new Account("00897786");
	const creditCommand = new CreditCommand(account, 100);
	creditCommand.execute();
	expect(account.balance).toBe(100);
});

test("Deve debitar uma conta", function () {
	const account = new Account("00897786");
	const creditCommand = new CreditCommand(account, 100);
	creditCommand.execute();
	const debitCommand = new DebitCommand(account, 50);
	debitCommand.execute();
	expect(account.balance).toBe(50);
});
