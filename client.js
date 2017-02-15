$(document).ready(function(){ // waits for document to load
  $('#pickAColorPrompt').text("Hey, pick a random color!"); // prompts the user to pick a color
  $('#colorBlocks').append( // displays color blocks on DOM
    '<div>' + $('#redBlock') + '</div>' +
    '<div>'+ $('#greenBlock') + '</div>' +
    '<div>' + $('#yellowBlock') + '</div>' +
    '<div>' + $('#blueBlock') + '</div>');

    var redBlock = $('#redBlock') // Sets color block variables to span ids
    var greenBlock = $('#greenBlock')
    var yellowBlock = $('#yellowBlock')
    var blueBlock = $('#blueBlock')

    redBlock.data('value', 1); // Adds data values to color block variables
    greenBlock.data('value', 2);
    yellowBlock.data('value', 3);
    blueBlock.data('value', 4);

    // creates array of objects, which hold color block values
    var colorBlockArray = [redBlock.data(), greenBlock.data(), yellowBlock.data(), blueBlock.data()];

    // logs out the color block value at array index 0 - used for testing
    // console.log(colorBlockArray[0].value);

  $('.button').on('click', function(){ // event listener for color block click
    randomNumber(1, 4);  //this will be used to call the function when the color block is clicked

    function randomNumber(min, max){
      return Math.floor(Math.random() * (1 + max - min) + min);
    }
  });
});

// colorBlockArry[i].value; --> not sure if I'll need this, but I think I do.

// for (var i = 0; i < colorBlockArray.length; i++) {
//   array[i]
// }
