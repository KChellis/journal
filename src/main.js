import './styles.css';
import { Entry } from './journal.js';
import $ from 'jquery';

$(document).ready(function(){
  $("#journal-form").submit(function(event) {
    event.preventDefault();

    var title = $("#title").val();
    var body = $("#post").val();
    var newEntry = new Entry (title, body);

    newEntry.countWords();
    newEntry.countVowels();
    newEntry.countConsonants();
    newEntry.countEight();

    $("#user-output").prepend('<div class="entry">' +
        '<h3>' + title + '</h3>' +
        '<p class="teaser"><strong>Words:</strong> ' + newEntry.words +
          ', <strong>Vowels:</strong> ' + newEntry.vowels + ', <strong>Consonants:</strong> ' + newEntry.consonants + '<br>' +
           newEntry.teaser + '...</p>' +
        '<p class="body">' + body + '</p>' +
      '</div>');


  });
});
