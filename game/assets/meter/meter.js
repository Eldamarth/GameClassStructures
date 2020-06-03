const BASE = require("../../../classPrototypes");

class Meter extends BASE {
	constructor(stateExpansion = {}) {
		const state = {};

		super(state); // expands state in SUPER.expandState with the const state above
		this.expandState(stateExpansion); // RE-expands state in case this is getting info passed to IT from above (HINT - could be used to re-introduce a character from earlier or reload a saved game, among many other things)
	}

	// GETTERS

	// SETTERS

	// METHODS
}
