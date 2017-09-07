var words = ["ground", "control", "to", "major", "tom"];



const leg = map(words, function(word) {
  return word.length;
});

const upper = map(words, function(word) {
  return word.toUpperCase();
});

const mix = map(words, function(word) {
  return word.split('').reverse().join('');
});

function map(array,fn) {
	let newArray = [];
	array.forEach(function(e) {
		newArray.push(fn(e));
	})
		

	
	return newArray;
}

console.log(leg);
console.log(upper);
console.log(mix);
