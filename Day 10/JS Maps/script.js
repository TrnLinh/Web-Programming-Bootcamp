function calcWordFrequencies() {
  var words = prompt("");

  var arr = words.split(" ");

  var frequen = {};

  arr.forEach(function (word) {
    if (frequen[word]) {
      frequen[word]++;
    } else {
      frequen[word] = 1;
    }
  });

  for (var word in frequen) {
    console.log(`${word} ${frequen[word]}`);
  }
}
