$(document).ready(function(){ // waits for document to loaded
  $('#pickAColorPrompt').text("Hey, pick a random color!"); // prompts the user to pick a color
  $('#colorBlocks').append( // displays color blocks on DOM
    '<div>' + $('#redBlock') + '</div>' +
    '<div>'+ $('#greenBlock') + '</div>' +
    '<div>' + $('#yellowBlock') + '</div>' +
    '<div>' + $('#blueBlock') + '</div>');
  });
