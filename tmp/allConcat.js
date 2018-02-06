var Entry = require('./../js/journal.js').entryModule;

$(document).ready(function(){
  $('#journal-form').submit(function(event){
    event.preventDefault();
    var entry = $("#entry").val();
    var simpleJournal = new Entry(entry);
    var countWord = simpleJournal.wordCount(entry);
    $('#solution').text(countWord);
    $("#output").text(entry);

    });
  });
