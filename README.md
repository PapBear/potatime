## Potatime
Potatime is easy to use javascript timer.

### Installation
	npm i potatime

### Example Usage

	const { Potato } = require('potatime');

	const pota = new Potato('pota');
	const opt = {
		duration: 10,
		callback : (remaining) => {
			if(remaining === 5){
				pota.clear();
				return;
			}
			console.log(remaining);
		}
	}

	pota.start(opt);