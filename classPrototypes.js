// BASE CLASSES AS PSEUDOCODE

// These are classes that are DESIGNED for matryushka use, i.e. they are MADE to be extended from the get-go.

//BASE CLASS PSEUDOCODE

module.exports = class BASE {
	constructor(stateExpansion) {
		this.state = {
			key: d.key(16),
		};
		this.expandState(stateExpansion);
	}

	// GETTERS
	get type() {
		return this.constructor.name;
	}

	// SETTERS

	// METHODS
	expandState(expandedState) {
		// Should overwrite this.state with the values in expandedState, so no need to overwrite them in the extended class types.
		// Parallels the behavior of setState in React in some ways.  Is not necessarily used to set the state, but rather to DESIGN into the base class the ability to cope nicely with extension.
		const newState = Object.assign({}, this.state, expandedState);
		this.state = newState;
	}
	carbonCopyState() {
		// Returns a carbon copy of the state, i.e. for use in GOAP AI prediction
		return Object.assign({}, this.state);
	}
};

// EXTENSION CLASS PSEUDOCODE
// THIS IS TO CUT-AND-PASTE, as it has the proper syntax for extending the parent class with a passed in stateExtension
class NEWEXTENSIONNAME extends BASE {
	constructor(stateExpansion = {}) {
		const state = {};

		super(state); // expands state in SUPER.expandState with the const state above
		this.expandState(stateExpansion); // RE-expands state in case this is getting info passed to IT from above (HINT - could be used to re-introduce a character from earlier or reload a saved game, among many other things)
	}

	// GETTERS

	// SETTERS

	// METHODS
}
