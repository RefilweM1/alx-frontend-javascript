export default function getNeighborhoodsList() {
	this.sanFranciscoNeighborhoods = ['SOMA', 'Union Sqaure'];

	const self = this;
	this.addNeighborhood => {
		self.sanFranciscoNeighbourhoods.push(newNeighborhood);
		return self.sanFranciscoNeighborhoods;
	};
}
