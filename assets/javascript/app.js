$(document).ready(function() {
    // global variables
    // variable to start the clock timer
    var counter = 30;

    // used to store radio buttons 
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;

    // variable used to get the value of the radio buttons when checked
    var value;

    // objects that store the question, answers, and correct answer position
    var questionOne = {
        question: 'What year did the Devils win their first Stanley Cup?',
        choices: ['1990', '1994', '1999', '2004'],
        answer: 1
    }
    var questionTwo = {
        question: 'Who is the current Devils captain?',
        choices: ['Andy Greene', 'Taylor Hall', 'Scott Stevens', 'Adam Henrique'],
        answer: 0
    }
    var questionThree = {
        question: 'How many Stanley Cups have the Devils won?',
        choices: ['0', '1', '2', '3'],
        answer: 3
    }
    var questionFour = {
        question: 'Where is Kyle Palmeri from?',
        choices: ['New York', 'New Jersey', 'Connecticut', 'Canada'],
        answer: 1
    }
    var questionFive = {
        question: 'When was the Devils first year in the NHL?',
        choices: ['1982', '1989', '1992', '1994'],
        answer: 0
    }

    // on start game button click
    $("#custom-btn").on('click', function() {
        // clear the button off the screen
        $('.button-clear').empty();

        // print the counter variable to the screen
        $('#counter-div').html('Time Remaining: ' + counter);

        // functions to pass through each question variable
        function questionQueenOne() {
            // for loop that prints questions 
            for (var i = 0; i < 1; i++) {
                $('<h3>' + questionOne.question + '</h3>').appendTo('#question-div');

                // for loop that prints choices as radio buttons with unique values and grouped names
                for (var x = 0; x < questionOne.choices.length; x++) {
                    var choices = questionOne.choices[x];
                    $('<p><input type="radio" value=" ' + x + ' "name="radio-one" />' + choices + '</p>').appendTo('#question-div');
                }
            }
        }
        questionQueenOne();

        function questionQueenTwo() {
            for (var i = 0; i < 1; i++) {
                $('<h3>' + questionTwo.question + '</h3>').appendTo('#question-div');

                for (var x = 0; x < questionTwo.choices.length; x++) {
                    var choices = questionTwo.choices[x];
                    $('<p><input type="radio" value="' + x + ' "name="radio-two" />' + choices + '</p>').appendTo('#question-div');
                }
            }
        }
        questionQueenTwo();

        function questionQueenThree() {
            for (var i = 0; i < 1; i++) {
                $('<h3>' + questionThree.question + '</h3>').appendTo('#question-div');

                for (var x = 0; x < questionThree.choices.length; x++) {
                    var choices = questionThree.choices[x];
                    $('<p><input type="radio" value="' + x + ' "name="radio-three" />' + choices + '</p>').appendTo('#question-div');
                }
            }
        }
        questionQueenThree();

        function questionQueenFour() {
            for (var i = 0; i < 1; i++) {
                $('<h3>' + questionFour.question + '</h3>').appendTo('#question-div');

                for (var x = 0; x < questionFour.choices.length; x++) {
                    var choices = questionFour.choices[x];
                    $('<p><input type="radio" value="' + x + ' "name="radio-four" />' + choices + '</p>').appendTo('#question-div');
                }
            }
        }
        questionQueenFour();

        function questionQueenFive() {
            // for loop that prints questions 
            for (var i = 0; i < 1; i++) {
                $('<h3>' + questionFive.question + '</h3>').appendTo('#question-div');

                // for loop that prints choices as radio buttons with unique values and grouped names
                for (var x = 0; x < questionFive.choices.length; x++) {
                    var choices = questionFive.choices[x];
                    $('<p><input type="radio" value="' + x + ' "name="radio-five" />' + choices + '</p>').appendTo('#question-div');
                }
            }
        }
        questionQueenFive();

        // clock countdown timer function
        var countdown = setInterval(function() {
                // start counting down the clock countdown variable
                counter--;

                // if the counter is above zero then print time remaining and the counter to the screen
                if (counter >= 0) {
                    $('#counter-div').html('Time Remaining: ' + counter);
                }
                // if counter equals 0 then print out of time to the screen and stop the countdown variable
                if (counter === 0) {
                    $('#counter-div').html('Out of time!');
                    clearInterval(countdown);

                    // if the radio button is checked in the named groups, change the value var to the value of the checked radio button
                    if ($('#question-div input').is(':checked')) {
                        value = $('input[name=radio-one]:checked', '#question-div').val();

                        // if value == question.answer then add to correct var
                        if (value == questionOne.answer) {
                            correct++;
                        }

                        // if != question.answer then add to incorrect var
                        if (value == 0 || value == 2 || value == 3) {
                            incorrect++;
                        }
                    }
                    // if no answer was selected then add to unanswered var
                    if (value == undefined) {
                        unanswered++;
                    }

                    if ($('#question-div input').is(':checked')) {
                        value = $('input[name=radio-two]:checked', '#question-div').val();

                        if (value == questionTwo.answer) {
                            correct++;
                        }
                        if (value == 1 || value == 2 || value == 3) {
                            incorrect++;
                        }
                    }
                    if (value == undefined) {
                        unanswered++;
                    }

                    if ($('#question-div input').is(':checked')) {
                        value = $('input[name=radio-three]:checked', '#question-div').val();

                        if (value == questionThree.answer) {
                            correct++;
                        }
                        if (value == 1 || value == 2 || value == 0) {
                            incorrect++;
                        }
                    }
                    if (value == undefined) {
                        unanswered++;
                    }

                    if ($('#question-div input').is(':checked')) {
                        value = $('input[name=radio-four]:checked', '#question-div').val();

                        if (value == questionFour.answer) {
                            correct++;
                        }
                        if (value == 0 || value == 2 || value == 3) {
                            incorrect++;
                        }
                    }
                    if (value == undefined) {
                        unanswered++;
                    }

                    if ($('#question-div input').is(':checked')) {
                        value = $('input[name=radio-five]:checked', '#question-div').val();

                        if (value == questionFive.answer) {
                            correct++;
                        }
                        if (value == 1 || value == 2 || value == 3) {
                            incorrect++;
                        }
                    }
                    if (value == undefined) {
                        unanswered++;
                    }

                    // empty question div when timer hits zero
                    $('#question-div').empty();

                    // create new div and append correct, incorrect, and unanswered vars
                    $('<h3>Correct ' + correct + '</h3>').appendTo('#end-game-div');
                    $('<h3>Incorrect ' + incorrect + '</h3>').appendTo('#end-game-div');
                    $('<h3>Unanswered ' + unanswered + '</h3>').appendTo('#end-game-div');
                }
            },
            1000) // timer counts down every second
    })
})