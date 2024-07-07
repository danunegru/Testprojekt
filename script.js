let questions = [


    {
        "questions": "Wie viel Prozent der Erdoberfläche sind mit Wasser bedeckt?",
        "answer_1": "50%",
        "answer_2": "71%",
        "answer_3": "85%",
        "rightAnswer": 2

    },


    {
        "questions": "Welches Element ist notwendig, damit ein Feuer brennt?",
        "answer_1": "Stickstoff",
        "answer_2": "Sauerstoff",
        "answer_3": "Kohlenstoff",
        "rightAnswer": 2

    },



    {
        "questions": "Welcher der folgenden Steine ist ein Magmatischer Gestein?",
        "answer_1": "Granit",
        "answer_2": "Kalkstein",
        "answer_3": "Sandstein",
        "rightAnswer": 1

    }



];


let currentQuestion = 0;

function init() {
    showQuestion()
}


function showQuestion() {

    let question = questions[currentQuestion];

    document.getElementById('questiontext').innerHTML = question['questions'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];


}

function endScreen() {
    document.getElementById('questionBody').innerHTML = '<div class="card-body" id="endScreen">Ende</div>';
    document.getElementById('question-picture').innerHTML = '< img src = "img/Group 5.png" alt = "" > '
}


function answer(selection) {
    let question = questions[currentQuestion];//gibt uns von unseren JSON array die stelle 0
    console.log('selecdet answer is', selection)
    let selectedQuestionNumber = selection.slice(-1);//gibt uns den letzten platz des strings
    console.log('selectedQuestionnumber is', selectedQuestionNumber);
    console.log('Current question is ', question['rightAnswer']);//question['rightAnswer'] ist auf dem JSON array und gibt uns nummer der richtigen antwort


    let idOfRightAnswer = `answer_${question['rightAnswer']}`;

    if (selectedQuestionNumber == question['rightAnswer']) {

        console.log('Richtige Antwort!!');
        document.getElementById(selection).parentNode.classList.add('bg-success');

    } else {

        document.getElementById(selection).parentNode.classList.add('bg-danger');
        console.log('Falsche Antwort!!');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');


    }
    document.getElementById('nextbutton-right').disabled = false;
}



function nextQuestion() {
    currentQuestion++;
    document.getElementById('nextbutton-right').disabled = true;

    if (currentQuestion < questions.length) {
        showQuestion();
        resetAnswerButtons();
    } else {
        endScreen();
        
    }
}
//dafür das nach dem weiter klicken, das die nicht mehr als angeclickt angezeigt werden 
function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');


}


