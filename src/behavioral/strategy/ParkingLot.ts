import Period from "./Period";
import TicketCalculator from "./TicketCalculator";
import TicketCalculatorFactory from "./TicketCalculatorFactory";

export default class ParkingLot {
	parkedCars: ParkedCar[];
	ticketCalculator: TicketCalculator;

	constructor (readonly capacity: number, readonly location: string = "beach") {
		const ticketCalculator = TicketCalculatorFactory.create(location);
		if (!ticketCalculator) throw new Error("Cannot create parking lot with invalid ticket calculator");
		this.ticketCalculator = ticketCalculator;
		this.parkedCars = [];
	}

	getEmptySpaces () {
		return this.capacity - this.parkedCars.length;
	}

	getParkedCar (plate: string) {
		const parkedCar = this.parkedCars.find(parkedCar => parkedCar.plate === plate);
		if (!parkedCar) throw new Error("Car not found");
		return parkedCar;
	}

	checkin (plate: string, checkinDate: Date) {
		this.parkedCars.push({ plate, checkinDate });
	}

	checkout (plate: string) {
		const parkedCar = this.getParkedCar(plate);
		this.parkedCars.splice(this.parkedCars.indexOf(parkedCar), 1);
	}

	calculateTicket (plate: string, checkoutDate: Date) {
		const parkedCar = this.getParkedCar(plate);
		const period = new Period(parkedCar.checkinDate, checkoutDate);
		const price = this.ticketCalculator.calculate(period);
		return {
			price
		};
	}
}

type ParkedCar = { plate: string, checkinDate: Date };