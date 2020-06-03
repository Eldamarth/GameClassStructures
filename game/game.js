const BASE = require("../classPrototypes");
const Map = require("./assets/map/map");
const { Meter, SkillMeter } = require("./assets/meter/meter");

class Turn extends BASE {
	/* 
    Turns have PHASES:
        0 - PREP
        1 - MAIN
        2 - END

    */

	constructor(stateExpansion = {}) {
		const state = {
			phase: 0,
			log: [],
		};

		super(state);
		this.expandState(stateExpansion);
	}
	// GETTERS

	// SETTERS

	// METHODS
	nextPhase() {
		this.state.phase++;
		return this.state.phase;
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

	// GETTERS
	get party() {
		return this.state.party;
	}

	// SETTERS

	// METHODS
};
