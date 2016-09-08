var Colors = ["blue", "green", "purple", "red"];
function newBox() {
	var box = {
		length: Math.floor(Math.random() * 10) + 1,
		width: Math.floor(Math.random() * 20) + 1,
		height: Math.floor(Math.random() * 5) + 1,
		color: Colors[Math.floor(Math.random() * Colors.length)],
		grams: Math.floor(Math.random() * 40) + 1,
		contents: [],

		//YOUR METHODS BELOW




		

		//YOUR METHODS END HERE
	}
	return box;
}

var boxOne = newBox();
var boxTwo = newBox();

//YOUR FUNCTIONS BELOW
