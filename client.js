$(document).ready(function(){ // waits for document to loaded
  $('#pickAColorPrompt').text("Hey, pick a random color!"); // prompts the user to pick a color
  $('#colorBlocks').append( // displays color blocks on DOM
    '<div>' + $('#redBlock') + '</div>' +
    '<div>'+ $('#greenBlock') + '</div>' +
    '<div>' + $('#yellowBlock') + '</div>' +
    '<div>' + $('#blueBlock') + '</div>');

    var redBlock = $('#redBlock')
    var greenBlock = $('#greenBlock')
    var yellowBlock = $('#yellowBlock')
    var blueBlock = $('#blueBlock')

    redBlock.data('value', 1);
    greenBlock.data('value', 2);
    yellowBlock.data('value', 3);
    blueBlock.data('value', 4);

    $('.button').on('click', function(){
      console.log('i clicked a button');


    });

  });
