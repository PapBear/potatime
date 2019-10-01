

export class Potato {
	private static bank: Potato[] = [];

	private _active: boolean;

	constructor(name: string) {

		// init
		this._active = false;

		Potato.bank.push(this);
	}

	unregister() {

	}

	start() {

	}

	get active(): boolean {
		return this.active;
	}

	static list(): Potato[] {
		return Potato.bank;
	}
}