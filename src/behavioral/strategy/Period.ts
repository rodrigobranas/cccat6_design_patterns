export default class Period {

	constructor (readonly start: Date, readonly end: Date) {
	}

	getDiffInHours () {
		return (this.end.getTime() - this.start.getTime())/(1000*60*60)
	}
}
