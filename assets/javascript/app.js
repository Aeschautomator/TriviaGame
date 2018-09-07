$(document).ready(function() {
    var index = 0;
    var countdownTimer = {
        time : 30,
        reset : function() {
            this.time = 30;
            $('.timer').html('<h3>' + this.time + ' seconds remaining</h3> ');
        },
        start: function () {
            counter = setInterval(countdownTimer.count, 1000);
        },
        stop: function () {
            clearInterval (counter);
        },
        count: function() {
                countdownTimer.time--;
                console.log(countdownTimer.time);
                // $('.timer').html(countdownTimer.time);
          if (countdownTimer.time >= 0) {
              $('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
          }
           else {
              index++;
              answerWrong();
              countdownTimer.reset();
              if (index < questionArray.length) {
                  loadQuestion(index);
              } else {
                  $('.answerchoice').hide();
                  showscore();
                }
			}
		}
    };
  
var correct = 0;
var wrong = 0;
var q1 = {
    question: ' Which Avenger is King of Wakanda? ',
    possibleAnswers : ['A. The Hulk',
        'B. Thor',
        'C. Black Panther',
        'D. Black widow'],
        flags : [false, false, true, false],
        answer : 'C. Black Panther'
};

var q2 = {
    question: ' Who Owns Stark Industries? ',
    possibleAnswers : ['A. Thor ',
    'B. Iron Man ',
    'C. Bruce Banner ',
    'D. Peter Parker '],
    flags : [false, true, false, false],
    answer : 'B. Iron Man '
};

var q3 = {
    question: ' What Marvel "Hero" is allowed to Cuss? ',
    possibleAnswers : ['A. Wolverine ',
    'B. Deadpool ',
    'C. Collosus ',
    'D. Captain America '],
    flags : [false, true, false, false],
    answer : 'B. Deadpool '
};    

var q4 = {
    question: ' who is Steve, a shrimpy man injected with a test serum during WW2? ',
    possibleAnswers : ['A. Captain America',
    'B. Deadpool ',
    'C. Derpinder ',
    'D. Wolverine '],
    flags : [true, false, false, false],
    answer : 'A. Captain America'
};    

var q5 = {
    question: ' Thanos is after what objects to try to rule reality? ',
    possibleAnswers : ['A. Forever Gems ',
    'B. Infinity Stones ',
    'C.  Eternity Gems ',
    'D. Boundless Jewels '],
    flags : [false, true, false, false],
    answer : 'B. Infinitey Stones '
};    

var q6 = {
    question: ' Professor X first name is what? ',
    possibleAnswers : ['A. Charles ',
    'B. Randolph ',
    'C. Rufus ',
    'D. Leonard '],
    flags : [true, false, false, false],
    answer : 'B. Charles '
};  

var q7 = {
    question: ' Who turns green when they get angry? ',
    possibleAnswers : ['A. Steve ',
    'B. Bruce Banner ',
    'C. Tony Stark ',
    'D. Wolverine '],
    flags : [false, true, false, false],
    answer : 'B. Bruce Banner '
};   

var q8 = {
    question: ' the winter soldier has a robotic what?',
    possibleAnswers : ['A. Leg ',
    'B. Eye ',
    'C. Arm ',
    'D. Wig '],
    flags : [false, false, true, false],
    ansawer : 'C. Arm '
};   

var q9 = {
    question: ' In days  of future past, who is the villain? ',
    possibleAnswers : ['A. Apocalypse ',
    'B. Magneto ',
    'C. Ultron ',
    'D. Terrorists '],
    flags : [false, true, false, false],
    ansawer : 'B. Magneto '
};    

var q10 = {
    question: ' which Xmen is actually from Wakanda? ',
    possibleAnswers : ['A. Tchalla ',
    'B. Storm ',
    'C. Mbaku ',
    'D. Peter Parker '],
    flags : [false, true, false, false],
    ansawer : 'B. Storm '
};    
var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

function loadQuestion(questionSelection) {
    console.log(questionSelection);
    countdownTimer.reset();
    $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
    $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
    $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
    $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
    $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();
}

function setup() {
    index = 0;
    $('.question').append('<button id="startButton">Start</button>');
    $('#startButton').on('click', function() {
        $(this).hide();
        countdownTimer.start();
        loadQuestion(index);

    });
}

function getAnswer () {

    $('.answerchoice').on('click', function() {
        console.log('alert', index);
        index++;
        console.log('click', index);
        $(".question").text('');
		$("#buttonA").text('');
		$("#buttonB").text('');
		$("#buttonC").text('');
		$("#buttonD").text('');
		loadQuestion();
    })
}

function answerCorrect() {
	correct++;
	alert("Correct!");
	console.log("correct");
}

function answerWrong() {
	wrong++;
	alert("Incorrect!");
	console.log("wrong");
}

function showScore() {
	$('.question').empty();
	$('.question').append("<h2><p>" + correct + " correct</p></h2>");
	$('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
	countdownTimer.stop();
	$('.timer').empty();

}

setup();
$('.answerchoice').on('click', function() {
 console.log($(this));
 if(this.id == 'buttonA') {
 	var answerChosen = 'A';
 } else if(this.id == 'buttonB') {
 	answerChosen = 'B';
 } else if (this.id == 'buttonC') {
 	answerChosen = 'C';
 } else if (this.id == 'buttonD') {
 	answerChosen = 'D';
 } 
 if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'A') {
 	answerWrong();
 }
 if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'B') {
 	answerWrong();
 }
if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'C') {
 	answerWrong();
 }
if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'D') {
 	answerWrong();
 }

 $(".question").text('');
 $("#buttonA").text('');
 $("#buttonB").text('');
 $("#buttonC").text('');
 $("#buttonD").text('');
 index++;
 if (index < questionArray.length) {
 	loadQuestion(index);
 } else {
 	$(".answerchoice").hide();
 	showScore();
 }
});

});