import AirportTicketCalculator from "./AirportTicketCalculator";
import BeachTicketCalculator from "./BeachTicketCalculator";
import ShoppingTicketCalculator from "./ShoppingTicketCalculator";

export default class TicketCalculatorFactory {

	static create (location: string) {
		if (location === "beach") {
			return new BeachTicketCalculator();
		}
		if (location === "shopping") {
			return new ShoppingTicketCalculator();
		}
		if (location === "airport") {
			return new AirportTicketCalculator();
		}
	}
}