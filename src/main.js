import './styles.css';
import { Entry } from './journal.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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
        '<p><em>Words:</em> ' + newEntry.words +
          ', <em>Vowels:</em> ' + newEntry.vowels + ', <em>Consonants:</em> ' + newEntry.consonants + '</p>' +
           '<p class="teaser">' + newEntry.teaser + '...</p>' +
        '<p class="body">' + body + '</p>' +
      '</div>');
    $(".entry").first().click(function() {
      $(this).children(".teaser").toggle();
      $(this).children(".body").slideToggle();
    });
  });
});
