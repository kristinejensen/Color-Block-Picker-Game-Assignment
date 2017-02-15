$(document).ready(function(){ // waits for document to load

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

    var redBlockPrompt = redBlock.data();
    var greenBlockPrompt = greenBlock.data();
    var yellowBlockPrompt = yellowBlock.data();
    var blueBlockPrompt = blueBlock.data();

    var userInstructionArray = [redBlockPrompt, greenBlockPrompt, yellowBlockPrompt, blueBlockPrompt];

    var randomNumberSelected = randomNumber(1, 4);

    if (randomNumberSelected == userInstructionArray[0].value) {
      $('#pickAColorPrompt').text('Hey, pick the red block!');
    }else if (randomNumberSelected == userInstructionArray[1].value) {
      $('#pickAColorPrompt').text('Hey, pick the green block!');
    }else if (randomNumberSelected == userInstructionArray[2].value) {
      $('#pickAColorPrompt').text('Hey, pick the yellow block!');
    }else{
      $('#pickAColorPrompt').text('Hey, pick the blue block!')
    }

    $('.button').on('click', function(){ // event listener for color block click
      //this will be used to call the function when the color block is clicked

      if ($(this).data().value == randomNumberSelected){ // conditional statement to check if random number is equal to color block selected
        $('#pickAColorPrompt').text("Yay! Pick another random color! ");
        randomNumberSelected = randomNumber(1, 4);

        if (randomNumberSelected == userInstructionArray[0].value) {
          $('#pickAColorPrompt').append('Now, pick the red block!');
        }else if (randomNumberSelected == userInstructionArray[1].value) {
          $('#pickAColorPrompt').append('Now, pick the green block!');
        }else if (randomNumberSelected == userInstructionArray[2].value) {
          $('#pickAColorPrompt').append('Now, pick the yellow block!');
        }else{
          $('#pickAColorPrompt').append('Now, pick the blue block!')
        }
      }else{ ($('#pickAColorPrompt').text("Nope!"))
    }
  });
  function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
  }
});
