export default class Building {
	constructor(sqft) {
		if (this._constructor !== Building && typeof this._evacuationWarningMessage !== 'function') {
			throw new Error('Class extending Building must override evacuationWarningMessage');
		}
		this._sqft = sqft;
	}
	get sqft() {
		return this._sqft;
	}
	set sqft(sqft) {
		this._sqft = sqft;
	}
}
