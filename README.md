## Potatime
Potatime is easy to use javascript timer.

### Installation
	npm i potatime

### Example Usage

	const { Potato } = require('potatime');

	const potato = new Potato('potatoes');
	const opt = {
		duration: 10,
		callback : (remaining) => {
			if(remaining === 5){
				potato.clear();
				return;
			}
			console.log(remaining);
		}
	}

	potato.start(opt);
