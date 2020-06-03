const BASE = require("../../../classPrototypes");

// a default, classic RPG-style (i.e. exponential), comparator function for deriving level from count
const exponentialComparatorFunc = (meterState) => {
	// MATH-HAMMER
	return (
		(1 / Math.log(meterState.factor)) *
		Math.log(
			(meterState.baseAmount + (meterState.factor - 1) * meterState.count) /
				meterState.baseAmount
		)
	);
};

// A BASIC METER CLASS - ONLY DOES WHAT IT NEEDS TO, SO OTHER CLASSES CAN SUBCLASS OFF OF IT WITH MINIMAL CHAFF
class Meter extends BASE {
	constructor(stateExpansion = {}) {
		const state = {
			count: 0,
		};

		super(state); // expands state in SUPER.expandState with the const state above
		this.expandState(stateExpansion); // RE-expands state in case this is getting info passed to IT from above (HINT - could be used to re-introduce a character from earlier or reload a saved game, among many other things)
	}

	// GETTERS
	get total() {
		return this.state.count;
	}
	// SETTERS

	// METHODS
	add(x) {
		this.state.count += x;
	}
}

// A CLASSIC XP METER THAT TRACKS LEVEL, EITHER OF A CHARACTER OR A SKILL
class SkillMeter extends Meter {
	constructor(
		baseAmount = 100,
		factor = 1.5,
		comparatorFunc = exponentialComparatorFunc
	) {
		const state = {
			baseAmount: baseAmount,
			factor: factor,
			comparatorFunc: comparatorFunc,
		};
		super(state);
	}
	// GETTERS
	get level() {
		// since skillmeters can have different equations, factors, and xp base amounts, the comparatorFunc analyzes the entire state.
		return this.state.comparatorFunc(this.state);
	}
	// SETTERS

	// METHODS
	add(x) {
		let oldLevel = this.level;
		let output = super.add(x); // sup should return 'ADD'
		if (this.level > oldLevel) {
			output = "LVL";
		}
		// WILL RETURN EITHER 'ADD' (normal) OR 'LVL' (leveling up)
		return output;
	}
}

module.exports = { Meter, SkillMeter };
