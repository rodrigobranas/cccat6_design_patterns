import Period from "./Period";
import TicketCalculator from "./TicketCalculator";

export default class AirportTicketCalculator implements TicketCalculator {

	calculate(period: Period): number {
		const price = 30;
		return price;
	}
}
