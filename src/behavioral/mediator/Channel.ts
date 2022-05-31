import Participant from "./Participant";

export default class Channel {
	participants: Participant[];

	constructor () {
		this.participants = [];
	}

	register (participant: Participant) {
		this.participants.push(participant);
	}

	send (from: Participant, message: string) {
		for (const to of this.participants) {
			if (from.name !== to.name) {
				to.receive(from, message);
			}
		}
	}
}