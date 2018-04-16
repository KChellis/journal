import './styles.css';
import { Entry } from './journal'

$(document).ready(function(){
  $("#journal-form").submit(function(e) {
    e.prevent.default();

    var title = $("#title").val();
    var body = $("#body").val();
    var newEntry = new Entry (title, body);

    newEntry.countWords();
    newEntry.countVowels();
    newEntry.countConsonants();
    newEntry.countEight();
    console.log(newEntry);

    $("#user-output").prepend('<div class="entry">' +
        '<h2>' + title + '</h2>' +
        '<p class="teaser">' + teaser + ', words: ' + newEntry.words +
          ', vowels: ' + newEntry.vowels + ', consonants: ' + newEntry.consonants + '</p>' +
        '<p class="body">' + body + '</p>' +
      '</div>');


  });
});
