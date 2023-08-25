let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;




document.querySelector('.btn-check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    if(!guess){
        document.querySelector('.p1').textContent = '🚫 No Number!';
    } else if(guess === secretNumber){
        document.querySelector('.p1').textContent='🎉 Correct Number';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.fontSize = '4.6rem';

        if(score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }



    } else if(guess> secretNumber){
        if(score>1){
        document.querySelector('.p1').textContent = '📈 Too High!';
        score--;
        document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.p1').textContent = '💥You lost the game!';
        }
    } else if(guess< secretNumber){
        document.querySelector('.p1').textContent = '📉 Too Low!';
        score--;
        document.querySelector('.score').textContent = score;
    }
})

document.querySelector('.again-btn').addEventListener('click',function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.p1').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value= '';

    document.querySelector('body').style.backgroundColor ='#222';
    document.querySelector('.number').style.fontSize = '4rem';
})