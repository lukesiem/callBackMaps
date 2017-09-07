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
	for(i=0; i <array.length;i++){
		newArray.push(fn(array[i]));

	}
	return newArray;
}

console.log(leg);
console.log(upper);
console.log(mix);
