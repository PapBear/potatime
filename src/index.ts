let potatoes: Potato[] = [];

export class Potato {
	name: string;
	active: boolean;
	interval: NodeJS.Timeout | null;
	duration: number | null;

	private _remaining = 0;

	constructor(name: string) {
		if (potatoes.map(p => p.name).indexOf(name) > -1) {
			throw new Error("You already have potato with name : " + name);
		}
		this.name = name;
		this.active = false;
		this.interval = null;
		this.duration = null;
		potatoes.push(this);
	}

	clear() {
		if (this.interval) {
			clearInterval(this.interval);
		}
		this.active = false;
	}

	start(options: { duration: number, callback: (remaining: number) => void }) {
		if (!options.duration) throw new Error('options.duration are required');
		if (!options.callback) throw new Error('options.callback are required');

		this.clear();
		this.duration = options.duration;
		this._remaining = this.duration;
		this.interval = setInterval(() => {
			if (this.active) this._remaining--;
			if (this._remaining <= 0) {
				this.clear();
				return;
			}
			options.callback(this._remaining);
		}, 1000);
		this.active = true;
	}

	goodbye() {
		potatoes = potatoes.filter(p => {
			if (p.name !== this.name) {
				return true;
			} else {
				return false;
			}
		})
	}

	static findPotato(name: string) {
		return potatoes.find(p => {
			if (p.name === name) {
				return true;
			} else {
				return false;
			}
		});
	}
}
