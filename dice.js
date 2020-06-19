var scores, roundscore, activeplayer, gameplaying;



//document.querySelector('.dice').style.display = 'none';

init();

document.querySelector('.btn-roll').addEventListener('click', function () {

  if (gameplaying) {


    var dice = Math.floor(Math.random() * 6) + 1;


    var diceDom = document.querySelector('.dice');
    diceDom.getElementsByClassName.display = 'block';
    diceDom.src = 'dice-' + dice + '.png';

    if (dice !== 1) {
      roundscore += dice;
      document.querySelector('#current-' + activeplayer).textContent = roundscore;

    } else {
      nextPlayer();


    }

  }




});


document.querySelector('.btn-hold').addEventListener('click', function () {


  if (gameplaying) {


    scores[activeplayer] += roundscore;

    document.querySelector('#score-' + activeplayer).textContent = scores[activeplayer];

    var input = document.querySelector('.final-score').Value;

    var winningscore;

    if (input) {

      winningscore = input;


    } else {

      winningscore = 100;

    }

    if (scores[activeplayer] >= winningscore) {

      document.querySelector('#name-' + activeplayer).textContent = 'winner';
      document.querySelector('.dice').getElementsByClassName.display = 'none';
      document.querySelector('.player-' + activeplayer + '-panel').classList.add('winner');
      document.querySelector('.player-' + activeplayer + '-panel').classList.remove('active');
      gameplaying = false;


    } else {

      nextPlayer();


    }



  }




});




function nextPlayer() {

  activeplayer === 0 ? activeplayer = 1 : activeplayer = 0;
  roundscore = 0;


  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';


  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  // document.querySelector('.dice').style.display = 'none';


}




document.querySelector('.btn-new').addEventListener('click', init);


function init() {


  scores = [0, 0];
  roundscore = 0;
  activeplayer = 0;
  gameplaying = true;
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.getElementById('name-0').textContent = 'player 1';
  document.getElementById('name-1').textContent = 'player 2';
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');






}