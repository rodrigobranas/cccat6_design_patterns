import Period from "./Period";
import TicketCalculator from "./TicketCalculator";

export default class BeachTicketCalculator implements TicketCalculator {

	calculate(period: Period): number {
		const pricePerHour = 10;
		return period.getDiffInHours() * pricePerHour;
	}
}