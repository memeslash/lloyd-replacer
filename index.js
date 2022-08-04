class lloydReplacer {
	constructor(d) {

		d.hook('C_START_SKILL', '*', { order: -9999999, filter: { fake: null, silenced: null } }, (e) => {
            if (e.skill.id == 9100100) { // Apex Urgency
				d.send('C_USE_PREMIUM_SLOT', '*', {
					set: 433,
					slot: 0,
					type: 3,
					id: 14100609
				});
                return false;
            }
        });
	}
}
module.exports = lloydReplacer;