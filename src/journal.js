export function Entry(title, body) {
  this.title = title;
  this.body = body;
  this.words = 0;
  this.vowels = 0;
  this.consonants = 0;
  this.teaser;
}

Entry.prototype.countWords = function() {
  var wordArray = this.body.split(" ");
  this.words = wordArray.length;
};

Entry.prototype.countVowels = function() {
  for (var i = 0; i < this.body.length; i++) {
    if (/[aeiou]/.test(this.body[i])) {
      this.vowels += 1;
    }
  }
};

Entry.prototype.countConsonants = function() {
  for (var i = 0; i < this.body.length; i++) {
    if (/[qwrtsdfgzxcvbyphjklnm]/.test(this.body[i])){
      this.consonants += 1;
    }
  }
};

Entry.prototype.countEight = function() {
  var sentenceArray = this.body.split(/[!?.]/);
  var first = sentenceArray[0];
  var wordArray = first.split(" ");
  wordArray.splice(8);
  this.teaser = wordArray.join(" ");
};
