const BASE = require("../classPrototypes");

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
