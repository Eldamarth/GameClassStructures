const BASE = require("../classPrototypes");
const Map = require("./assets/map/map");
const { Meter, SkillMeter } = require("./assets/meter/meter");

class Turn extends BASE {
	constructor(stateExpansion = {}) {
		const state = {};

		super(state);
		this.expandState(stateExpansion);
	}
}

module.exports = class Game extends BASE {
	constructor(stateExpansion = {}) {
		const state = {
			party: [],
			map: new Map(),
		};

		super(state);
		this.expandState(stateExpansion);
	}
};
