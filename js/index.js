var counter = 0; // sees how many cards are flipped
var button = 0;
var end = 0;
var matches = 0; // checks to see if game is over
var player1score = 0;
var player2score = 0;
var turnCount = 0; // turn count is called in unFlip cards. It is added twice if there is a match.
var star = 0;
var square = 0;
var circle = 0;
var heart = 0;
var moon = 0;
var happy = 0;
var x = 0;
var car = 0;
var triangle = 0;  
var bam = 0;
var unicorn = 0;
var statue = 0;
var balloon = 0;
var flag = 0;
var tree = 0;

// the above variables check for matches. When a card is flipped, it adds 1 to whatever card variable was flipped (exe. when one star card is flipped, var star will change from 0 to 1. If a variable is ever equal to two, it makes it a match. Everytime a card is flipped over, counter goes up one. When counter is 2, the cards are turned back over and the seven above variables are reset to 0.
function start() {
$('.turn').text('');
$('#Player-1').text('');
$('#Player-2').text('');
$('.card1').removeClass('card1');
$('.card2').removeClass('card2');
$('.card3').removeClass('card3');
$('.card4').removeClass('card4');
$('.card5').removeClass('card5');
$('.card6').removeClass('card6');
$('.card7').removeClass('card7');
$('.card8').removeClass('card8');
$('.card9').removeClass('card9');
$('.card10').removeClass('card10');
$('.card11').removeClass('card11');
$('.card12').removeClass('card12');
$('.card13').removeClass('card13');
$('.card14').removeClass('card14');
$('.card15').removeClass('card15');
$('.card16').removeClass('card16');
$('.card17').removeClass('card17');
$('.card18').removeClass('card18');
$('.card19').removeClass('card19');
$('.card20').removeClass('card20');
$('.card21').removeClass('card21');
$('.card22').removeClass('card22');
$('.card23').removeClass('card23');
$('.card24').removeClass('card24');
$('.card25').removeClass('card25');
$('.card26').removeClass('card26');
$('.card27').removeClass('card27');
$('.card28').removeClass('card28');
$('.card29').removeClass('card29');
$('.card30').removeClass('card30');
}

function restart() {
reset();
$('.turn').text('It is Player 1\'s Turn');
$('#Player-1').text('Player 1\'s Score: 0');
$('#Player-2').text('Player 2\'s Score: 0');
$('#IDcard1').removeClass();
$('#IDcard2').removeClass();
$('#IDcard3').removeClass();
$('#IDcard4').removeClass();
$('#IDcard5').removeClass();
$('#IDcard6').removeClass();
$('#IDcard7').removeClass();
$('#IDcard8').removeClass();
$('#IDcard9').removeClass();
$('#IDcard10').removeClass();
$('#IDcard11').removeClass();
$('#IDcard12').removeClass();
$('#IDcard13').removeClass();
$('#IDcard14').removeClass();
$('#IDcard15').removeClass();
$('#IDcard16').removeClass();
$('#IDcard17').removeClass();
$('#IDcard18').removeClass();
$('#IDcard19').removeClass();
$('#IDcard20').removeClass();
$('#IDcard21').removeClass();
$('#IDcard22').removeClass();
$('#IDcard23').removeClass();
$('#IDcard24').removeClass();
$('#IDcard25').removeClass();
$('#IDcard26').removeClass();
$('#IDcard27').removeClass();
$('#IDcard28').removeClass();
$('#IDcard29').removeClass();
$('#IDcard30').removeClass();
}

function getRandom14() {
end = 7;
$('.turn').text('It is Player 1\'s Turn');
$('#Player-1').text('Player 1\'s Score: 0');
$('#Player-2').text('Player 2\'s Score: 0');
$('#IDcard1').addClass('card1');
$('#IDcard2').addClass('card2');
$('#IDcard3').addClass('card3');
$('#IDcard4').addClass('card4');
$('#IDcard5').addClass('card5');
$('#IDcard6').addClass('card6');
$('#IDcard7').addClass('card7');
$('#IDcard8').addClass('card8');
$('#IDcard9').addClass('card9');
$('#IDcard10').addClass('card10');
$('#IDcard11').addClass('card11');
$('#IDcard12').addClass('card12');
$('#IDcard13').addClass('card13');
$('#IDcard14').addClass('card14');
$('.card15').removeClass('card15');
$('.card16').removeClass('card16');
$('.card17').removeClass('card17');
$('.card18').removeClass('card18');
$('.card19').removeClass('card19');
$('.card20').removeClass('card20');
$('.card21').removeClass('card21');
$('.card22').removeClass('card22');
$('.card23').removeClass('card23');
$('.card24').removeClass('card24');
$('.card25').removeClass('card25');
$('.card26').removeClass('card26');
$('.card27').removeClass('card27');
$('.card28').removeClass('card28');
$('.card29').removeClass('card29');
$('.card30').removeClass('card30');
    
var looper = 0;
var randint1 = 0;
var randint2 = 0;
var randint3 = 0;
var randint4 = 0;
var randint5 = 0;
var randint6 = 0;
var randint7 = 0;
var randint8 = 0;
var randint9 = 0;
var randint10 = 0;
var randint11 = 0;
var randint12 = 0;
var randint13 = 0;
var randint14 = 0;
 randint1 = Math.floor(Math.random() * 7);
 randint2 = Math.floor(Math.random() * 7);
 randint3 = Math.floor(Math.random() * 7);
 randint4 = Math.floor(Math.random() * 7);
 randint5 = Math.floor(Math.random() * 7);
 randint6 = Math.floor(Math.random() * 7);
 randint7 = Math.floor(Math.random() * 7);
 randint8 = Math.floor(Math.random() * 7);
 randint9 = Math.floor(Math.random() * 7);
 randint10 = Math.floor(Math.random() * 7);
 randint11 = Math.floor(Math.random() * 7);
 randint12 = Math.floor(Math.random() * 7);
 randint13 = Math.floor(Math.random() * 7);
 randint14 = Math.floor(Math.random() * 7);

var stars = 0;
var squares = 0;
var circles = 0;
var hearts = 0;
var moons = 0;
var happys = 0;
var xs = 0;
    
while (looper === 0) {
  if (randint1 === 0) {
    $('.card1').toggleClass('cardstar-hidden');
    stars = stars +1;
    looper++;
}

  else if (randint1 === 1) {
    $('.card1').toggleClass('cardsquare-hidden');
    squares= squares+1; 
    looper++;
}

  else if (randint1 === 2) {
    $('.card1').toggleClass('cardcircle-hidden');
    circles = circles+1;
    looper++;
}

  else if (randint1 === 3) {
    $('.card1').toggleClass('cardheart-hidden');
    hearts=hearts+1;
    looper++;
}

  else if (randint1 === 4) {
    $('.card1').toggleClass('cardmoon-hidden');
    moons=moons+1;
    looper++;
}

  else if (randint1 === 5) {
    $('.card1').toggleClass('cardhappy-hidden');
    happys=happys+1;
    looper++;
}

  else if (randint1 === 6) {
    $('.card1').toggleClass('cardx-hidden');
    xs=xs+1;
    looper++;
}
  else {
      randint1 = Math.floor(Math.random() * 7);
}
} //card one
looper = 0; 
 
while (looper === 0) {
  if ((randint2 === 0)&&(stars!==2)) {
    $('.card2').toggleClass('cardstar-hidden');
    stars = stars +1;
    looper++;
}

  if ((randint2 === 1)&&(squares!==2)) {
    $('.card2').toggleClass('cardsquare-hidden');
    squares= squares+1; 
    looper++;
}

  if ((randint2 === 2)&&(circles!==2)) {
    $('.card2').toggleClass('cardcircle-hidden');
    circles = circles+1;
    looper++;
}

  if ((randint2 === 3)&&(hearts!==2)) {
    $('.card2').toggleClass('cardheart-hidden');
    hearts=hearts+1;
    looper++;
}

  if ((randint2 === 4)&&(moons!==2)) {
    $('.card2').toggleClass('cardmoon-hidden');
    moons=moons+1;
    looper++;
}

  if ((randint2 === 5)&&(happys!==2)) {
    $('.card2').toggleClass('cardhappy-hidden');
    happys=happys+1;
    looper++;
}

  if ((randint2 === 6)&&(xs!==2)) {
    $('.card1').toggleClass('cardx-hidden');
    xs=xs+1;
    looper++;
}

else {
      randint2 = Math.floor(Math.random() * 7);
}
} //card two
looper = 0;

while (looper === 0) {
  if ((randint3 === 0)&&(stars!==2)) {
    $('.card3').toggleClass('cardstar-hidden');
    stars = stars +1;
    looper++;
}

  if ((randint3 === 1)&&(squares!==2)) {
    $('.card3').toggleClass('cardsquare-hidden');
    squares= squares+1; 
    looper++;
}

  if ((randint3 === 2)&&(circles!==2)) {
    $('.card3').toggleClass('cardcircle-hidden');
    circles = circles+1;
    looper++;
}

  if ((randint3 === 3)&&(hearts!==2)) {
    $('.card3').toggleClass('cardheart-hidden');
    hearts=hearts+1;
    looper++;
}

  if ((randint3 === 4)&&(moons!==2)) {
    $('.card3').toggleClass('cardmoon-hidden');
    moons=moons+1;
    looper++;
}

  if ((randint3 === 5)&&(happys!==2)) {
    $('.card3').toggleClass('cardhappy-hidden');
    happys=happys+1;
    looper++;
}

  if ((randint3 === 6)&&(xs!==2)) {
    $('.card3').toggleClass('cardx-hidden');
    xs=xs+1;
    looper++;
}

else {
      randint3 = Math.floor(Math.random() * 7);
}
} //card three
looper = 0;

while (looper === 0) {
  if ((randint4 === 0)&&(stars!==2)) {
    $('.card4').toggleClass('cardstar-hidden');
    stars = stars +1;
    looper++;
}

  if ((randint4 === 1)&&(squares!==2)) {
    $('.card4').toggleClass('cardsquare-hidden');
    squares= squares+1; 
    looper++;
}

  if ((randint4 === 2)&&(circles!==2)) {
    $('.card4').toggleClass('cardcircle-hidden');
    circles = circles+1;
    looper++;
}

  if ((randint4 === 3)&&(hearts!==2)) {
    $('.card4').toggleClass('cardheart-hidden');
    hearts=hearts+1;
    looper++;
}

  if ((randint4 === 4)&&(moons!==2)) {
    $('.card4').toggleClass('cardmoon-hidden');
    moons=moons+1;
    looper++;
}

  if ((randint4 === 5)&&(happys!==2)) {
    $('.card4').toggleClass('cardhappy-hidden');
    happys=happys+1;
    looper++;
}

  if ((randint4 === 6)&&(xs!==2)) {
    $('.card4').toggleClass('cardx-hidden');
    xs=xs+1;
    looper++;
}

else {
      randint4 = Math.floor(Math.random() * 7);
}
} //card four
looper = 0;

while (looper === 0) {
  if ((randint5 === 0)&&(stars!==2)) {
    $('.card5').toggleClass('cardstar-hidden');
    stars = stars +1;
    looper++;
}

  if ((randint5 === 1)&&(squares!==2)) {
    $('.card5').toggleClass('cardsquare-hidden');
    squares= squares+1; 
    looper++;
}

  if ((randint5 === 2)&&(circles!==2)) {
    $('.card5').toggleClass('cardcircle-hidden');
    circles = circles+1;
    looper++;
}

  if ((randint5 === 3)&&(hearts!==2)) {
    $('.card5').toggleClass('cardheart-hidden');
    hearts=hearts+1;
    looper++;
}
    
  if ((randint5 === 4)&&(moons!==2)) {
    $('.card5').toggleClass('cardmoon-hidden');
    moons=moons+1;
    looper++;
}

  if ((randint5 === 5)&&(happys!==2)) {
    $('.card5').toggleClass('cardhappy-hidden');
    happys=happys+1;
    looper++;
}

  if ((randint5 === 6)&&(xs!==2)) {
    $('.card5').toggleClass('cardx-hidden');
    xs=xs+1;
    looper++;
}

else {
      randint5 = Math.floor(Math.random() * 7);
}
} //card five
looper = 0;

while (looper === 0) {
  if ((randint6 === 0)&&(stars!==2)) {
    $('.card6').toggleClass('cardstar-hidden');
    stars = stars +1;
    looper++;
}

  if ((randint6 === 1)&&(squares!==2)) {
    $('.card6').toggleClass('cardsquare-hidden');
    squares= squares+1; 
    looper++;
}

  if ((randint6 === 2)&&(circles!==2)) {
    $('.card6').toggleClass('cardcircle-hidden');
    circles = circles+1;
    looper++;
}

  if ((randint6 === 3)&&(hearts!==2)) {
    $('.card6').toggleClass('cardheart-hidden');
    hearts=hearts+1;
    looper++;
}
    
  if ((randint6 === 4)&&(moons!==2)) {
    $('.card6').toggleClass('cardmoon-hidden');
    moons=moons+1;
    looper++;
}

  if ((randint6 === 5)&&(happys!==2)) {
    $('.card6').toggleClass('cardhappy-hidden');
    happys=happys+1;
    looper++;
}

  if ((randint6 === 6)&&(xs!==2)) {
    $('.card6').toggleClass('cardx-hidden');
    xs=xs+1;
    looper++;
}

else {
      randint6 = Math.floor(Math.random() * 7);
}
} //card six
looper = 0;

while (looper === 0) {
  if ((randint7 === 0)&&(stars!==2)) {
    $('.card7').toggleClass('cardstar-hidden');
    stars = stars +1;
    looper++;
}

  if ((randint7 === 1)&&(squares!==2)) {
    $('.card7').toggleClass('cardsquare-hidden');
    squares= squares+1; 
    looper++;
}

  if ((randint7 === 2)&&(circles!==2)) {
    $('.card7').toggleClass('cardcircle-hidden');
    circles = circles+1;
    looper++;
}

  if ((randint7 === 3)&&(hearts!==2)) {
    $('.card7').toggleClass('cardheart-hidden');
    hearts=hearts+1;
    looper++;
}
    
  if ((randint7 === 4)&&(moons!==2)) {
    $('.card7').toggleClass('cardmoon-hidden');
    moons=moons+1;
    looper++;
}

  if ((randint7 === 5)&&(happys!==2)) {
    $('.card7').toggleClass('cardhappy-hidden');
    happys=happys+1;
    looper++;
}

  if ((randint7 === 6)&&(xs!==2)) {
    $('.card7').toggleClass('cardx-hidden');
    xs=xs+1;
    looper++;
}

else {
      randint7 = Math.floor(Math.random() * 7);
}
} //card seven
looper = 0;

while (looper === 0) {
  if ((randint8 === 0)&&(stars!==2)) {
    $('.card8').toggleClass('cardstar-hidden');
    stars = stars +1;
    looper++;
}

  if ((randint8 === 1)&&(squares!==2)) {
    $('.card8').toggleClass('cardsquare-hidden');
    squares= squares+1; 
    looper++;
}

  if ((randint8 === 2)&&(circles!==2)) {
    $('.card8').toggleClass('cardcircle-hidden');
    circles = circles+1;
    looper++;
}

  if ((randint8 === 3)&&(hearts!==2)) {
    $('.card8').toggleClass('cardheart-hidden');
    hearts=hearts+1;
    looper++;
}
    
  if ((randint8 === 4)&&(moons!==2)) {
    $('.card8').toggleClass('cardmoon-hidden');
    moons=moons+1;
    looper++;
}

  if ((randint8 === 5)&&(happys!==2)) {
    $('.card8').toggleClass('cardhappy-hidden');
    happys=happys+1;
    looper++;
}

  if ((randint8 === 6)&&(xs!==2)) {
    $('.card8').toggleClass('cardx-hidden');
    xs=xs+1;
    looper++;
}

else {
      randint8 = Math.floor(Math.random() * 7);
}
} //card eight
looper = 0;

while (looper === 0) {
  if ((randint9 === 0)&&(stars!==2)) {
    $('.card9').toggleClass('cardstar-hidden');
    stars = stars +1;
    looper++;
}

  if ((randint9 === 1)&&(squares!==2)) {
    $('.card9').toggleClass('cardsquare-hidden');
    squares= squares+1; 
    looper++;
}

  if ((randint9 === 2)&&(circles!==2)) {
    $('.card9').toggleClass('cardcircle-hidden');
    circles = circles+1;
    looper++;
}

  if ((randint9 === 3)&&(hearts!==2)) {
    $('.card9').toggleClass('cardheart-hidden');
    hearts=hearts+1;
    looper++;
}
    
  if ((randint9 === 4)&&(moons!==2)) {
    $('.card9').toggleClass('cardmoon-hidden');
    moons=moons+1;
    looper++;
}

  if ((randint9 === 5)&&(happys!==2)) {
    $('.card9').toggleClass('cardhappy-hidden');
    happys=happys+1;
    looper++;
}

  if ((randint9 === 6)&&(xs!==2)) {
    $('.card9').toggleClass('cardx-hidden');
    xs=xs+1;
    looper++;
}

else {
      randint9 = Math.floor(Math.random() * 7);
}
} //card nine
looper = 0;

while (looper === 0) {
  if ((randint10 === 0)&&(stars!==2)) {
    $('.card10').toggleClass('cardstar-hidden');
    stars = stars +1;
    looper++;
}

  if ((randint10 === 1)&&(squares!==2)) {
    $('.card10').toggleClass('cardsquare-hidden');
    squares= squares+1; 
    looper++;
}

  if ((randint10 === 2)&&(circles!==2)) {
    $('.card10').toggleClass('cardcircle-hidden');
    circles = circles+1;
    looper++;
}

  if ((randint10 === 3)&&(hearts!==2)) {
    $('.card10').toggleClass('cardheart-hidden');
    hearts=hearts+1;
    looper++;
}
    
  if ((randint10 === 4)&&(moons!==2)) {
    $('.card10').toggleClass('cardmoon-hidden');
    moons=moons+1;
    looper++;
}

  if ((randint10 === 5)&&(happys!==2)) {
    $('.card10').toggleClass('cardhappy-hidden');
    happys=happys+1;
    looper++;
}

  if ((randint10 === 6)&&(xs!==2)) {
    $('.card10').toggleClass('cardx-hidden');
    xs=xs+1;
    looper++;
}

else {
      randint10 = Math.floor(Math.random() * 7);
}
} //card ten
looper = 0;

while (looper === 0) {
  if ((randint11 === 0)&&(stars!==2)) {
    $('.card11').toggleClass('cardstar-hidden');
    stars = stars +1;
    looper++;
}

  if ((randint11 === 1)&&(squares!==2)) {
    $('.card11').toggleClass('cardsquare-hidden');
    squares= squares+1; 
    looper++;
}

  if ((randint11 === 2)&&(circles!==2)) {
    $('.card11').toggleClass('cardcircle-hidden');
    circles = circles+1;
    looper++;
}

  if ((randint11 === 3)&&(hearts!==2)) {
    $('.card11').toggleClass('cardheart-hidden');
    hearts=hearts+1;
    looper++;
}
    
  if ((randint11 === 4)&&(moons!==2)) {
    $('.card11').toggleClass('cardmoon-hidden');
    moons=moons+1;
    looper++;
}

  if ((randint11 === 5)&&(happys!==2)) {
    $('.card11').toggleClass('cardhappy-hidden');
    happys=happys+1;
    looper++;
}

  if ((randint11 === 6)&&(xs!==2)) {
    $('.card11').toggleClass('cardx-hidden');
    xs=xs+1;
    looper++;
}

else {
      randint11 = Math.floor(Math.random() * 7);
}
} //card eleven
looper = 0;

while (looper === 0) {
  if ((randint12 === 0)&&(stars!==2)) {
    $('.card12').toggleClass('cardstar-hidden');
    stars = stars +1;
    looper++;
}

  if ((randint12 === 1)&&(squares!==2)) {
    $('.card12').toggleClass('cardsquare-hidden');
    squares= squares+1; 
    looper++;
}

  if ((randint12 === 2)&&(circles!==2)) {
    $('.card12').toggleClass('cardcircle-hidden');
    circles = circles+1;
    looper++;
}

  if ((randint12 === 3)&&(hearts!==2)) {
    $('.card12').toggleClass('cardheart-hidden');
    hearts=hearts+1;
    looper++;
}
    
  if ((randint12 === 4)&&(moons!==2)) {
    $('.card12').toggleClass('cardmoon-hidden');
    moons=moons+1;
    looper++;
}

  if ((randint12 === 5)&&(happys!==2)) {
    $('.card12').toggleClass('cardhappy-hidden');
    happys=happys+1;
    looper++;
}

  if ((randint12 === 6)&&(xs!==2)) {
    $('.card12').toggleClass('cardx-hidden');
    xs=xs+1;
    looper++;
}

else {
      randint12 = Math.floor(Math.random() * 7);
}
} //card twelve
looper = 0;

while (looper === 0) {
  if ((randint13 === 0)&&(stars!==2)) {
    $('.card13').toggleClass('cardstar-hidden');
    stars = stars +1;
    looper++;
}

  if ((randint13 === 1)&&(squares!==2)) {
    $('.card13').toggleClass('cardsquare-hidden');
    squares= squares+1; 
    looper++;
}

  if ((randint13 === 2)&&(circles!==2)) {
    $('.card13').toggleClass('cardcircle-hidden');
    circles = circles+1;
    looper++;
}

  if ((randint13 === 3)&&(hearts!==2)) {
    $('.card13').toggleClass('cardheart-hidden');
    hearts=hearts+1;
    looper++;
}
    
  if ((randint13 === 4)&&(moons!==2)) {
    $('.card13').toggleClass('cardmoon-hidden');
    moons=moons+1;
    looper++;
}

  if ((randint13 === 5)&&(happys!==2)) {
    $('.card13').toggleClass('cardhappy-hidden');
    happys=happys+1;
    looper++;
}

  if ((randint13 === 6)&&(xs!==2)) {
    $('.card13').toggleClass('cardx-hidden');
    xs=xs+1;
    looper++;
}

else {
      randint13 = Math.floor(Math.random() * 7);
}
} //card thirteen
looper = 0;

while (looper === 0) {
  if ((randint14 === 0)&&(stars!==2)) {
    $('.card14').toggleClass('cardstar-hidden');
    stars = stars +1;
    looper++;
}

  if ((randint14 === 1)&&(squares!==2)) {
    $('.card14').toggleClass('cardsquare-hidden');
    squares= squares+1; 
    looper++;
}

  if ((randint14 === 2)&&(circles!==2)) {
    $('.card14').toggleClass('cardcircle-hidden');
    circles = circles+1;
    looper++;
}

  if ((randint14 === 3)&&(hearts!==2)) {
    $('.card14').toggleClass('cardheart-hidden');
    hearts=hearts+1;
    looper++;
}
    
  if ((randint14 === 4)&&(moons!==2)) {
    $('.card14').toggleClass('cardmoon-hidden');
    moons=moons+1;
    looper++;
}

  if ((randint14 === 5)&&(happys!==2)) {
    $('.card14').toggleClass('cardhappy-hidden');
    happys=happys+1;
    looper++;
}

  if ((randint14 === 6)&&(xs!==2)) {
    $('.card14').toggleClass('cardx-hidden');
    xs=xs+1;
    looper++;
}

else {
      randint14 = Math.floor(Math.random() * 7); 
}
} //card fourteen
looper = 1;
}
function getRandom22() {
end = 11;
$('.turn').text('It is Player 1\'s Turn');
$('#Player-1').text('Player 1\'s Score: 0');
$('#Player-2').text('Player 2\'s Score: 0');
$('#IDcard1').addClass('card1');
$('#IDcard2').addClass('card2');
$('#IDcard3').addClass('card3');
$('#IDcard4').addClass('card4');
$('#IDcard5').addClass('card5');
$('#IDcard6').addClass('card6');
$('#IDcard7').addClass('card7');
$('#IDcard8').addClass('card8');
$('#IDcard9').addClass('card9');
$('#IDcard10').addClass('card10');
$('#IDcard11').addClass('card11');
$('#IDcard12').addClass('card12');
$('#IDcard13').addClass('card13');
$('#IDcard14').addClass('card14');
$('#IDcard15').addClass('card15');
$('#IDcard16').addClass('card16');
$('#IDcard17').addClass('card17');
$('#IDcard18').addClass('card18');
$('#IDcard19').addClass('card19');
$('#IDcard20').addClass('card20');
$('#IDcard21').addClass('card21');
$('#IDcard22').addClass('card22');
$('.card23').removeClass('card23');
$('.card24').removeClass('card24');
$('.card25').removeClass('card25');
$('.card26').removeClass('card26');
$('.card27').removeClass('card27');
$('.card28').removeClass('card28');
$('.card29').removeClass('card29');
$('.card30').removeClass('card30');
    
var looper = 0;
var randint1 = Math.floor(Math.random() * 11);
var randint2 = Math.floor(Math.random() * 11);
var randint3 = Math.floor(Math.random() * 11);
var randint4 = Math.floor(Math.random() * 11);
var randint5 = Math.floor(Math.random() * 11);
var randint6 = Math.floor(Math.random() * 11);
var randint7 = Math.floor(Math.random() * 11);
var randint8 = Math.floor(Math.random() * 11);
var randint9 = Math.floor(Math.random() * 11);
var randint10 = Math.floor(Math.random() * 11);
var randint11 = Math.floor(Math.random() * 11);
var randint12 = Math.floor(Math.random() * 11);
var randint13 = Math.floor(Math.random() * 11);
var randint14 = Math.floor(Math.random() * 11);
var randint15 = Math.floor(Math.random() * 11);
var randint16 = Math.floor(Math.random() * 11);
var randint17 = Math.floor(Math.random() * 11);
var randint18 = Math.floor(Math.random() * 11);
var randint19 = Math.floor(Math.random() * 11);
var randint20 = Math.floor(Math.random() * 11);
var randint21 = Math.floor(Math.random() * 11);
var randint22 = Math.floor(Math.random() * 11);

var stars = 0;
var squares = 0;
var circles = 0; 
var hearts = 0;
var moons = 0;
var happys = 0; 
var xs = 0;
var cars = 0;
var triangles = 0;
var bams = 0;
var unicorns = 0;
    
while (looper === 0) {
  if (randint1 === 0) {
    $('.card1').addClass('cardstar-hidden');
    stars = stars +1;
    looper++;
}

  else if (randint1 === 1) {
    $('.card1').addClass('cardsquare-hidden');
    squares= squares+1; 
    looper++;
}

  else if (randint1 === 2) {
    $('.card1').addClass('cardcircle-hidden');
    circles = circles+1;
    looper++;
}

  else if (randint1 === 3) {
    $('.card1').addClass('cardheart-hidden');
    hearts=hearts+1;
    looper++;
}

  else if (randint1 === 4) {
    $('.card1').addClass('cardmoon-hidden');
    moons=moons+1;
    looper++;
}

  else if (randint1 === 5) {
    $('.card1').addClass('cardhappy-hidden'); 
    happys=happys+1;
    looper++;
}

  else if (randint1 === 6) {
    $('.card1').addClass('cardx-hidden'); 
    xs=xs+1;
    looper++;
}

  else if (randint1 === 7) {
    $('.card1').addClass('cardcar-hidden');
    cars = cars+1;
    looper++;
}

  else if (randint1 === 8) {
    $('.card1').addClass('cardtriangle-hidden');
    triangles = triangles+1;
    looper++;
}

  else if (randint1 === 9) {
    $('.card1').addClass('cardbam-hidden');
    bams=bams+1;
    looper++;
}

  else if (randint1 === 10) {
    $('.card1').addClass('cardunicorn-hidden');
    unicorns=unicorns+1;
    looper++;
}

  else {
      randint1 = Math.floor(Math.random() * 11);
}
} //card one
looper = 0;

while (looper === 0) {
  if ((randint2 === 0)&&(stars !== 2)) {
    $('.card2').addClass('cardstar-hidden');
    stars = stars +1;
    looper++;
}

  else if ((randint2 === 1)&&(squares !== 2))  {
    $('.card2').addClass('cardsquare-hidden');
    squares= squares+1; 
    looper++;
}

  else if ((randint2=== 2)&&(circles !== 2))  {
    $('.card2').addClass('cardcircle-hidden');
    circles = circles+1;
    looper++;
}

  else if ((randint2 === 3)&&(hearts !== 2))  {
    $('.card2').addClass('cardheart-hidden');
    hearts=hearts+1;
    looper++;
}

  else if ((randint2 === 4)&&(moons !== 2))  {
    $('.card2').addClass('cardmoon-hidden');
    moons=moons+1;
    looper++;
}

  else if ((randint2 === 5)&&(happys !== 2))  {
    $('.card2').addClass('cardhappy-hidden');
    happys=happys+1;
    looper++;
}

  else if ((randint2 === 6)&&(xs !== 2))  {
    $('.card2').addClass('cardx-hidden');
    xs=xs+1;
    looper++;
}

  else if ((randint2 === 7)&&(cars !== 2))  {
    $('.card2').addClass('cardcar-hidden');
    cars = cars+1;
    looper++;
}

  else if ((randint2 === 8)&&(triangles !== 2))  {
    $('.card2').addClass('cardtriangle-hidden');
    triangles = triangles+1;
    looper++;
}

  else if ((randint2 === 9)&&(bams !== 2))  {
    $('.card2').addClass('cardbam-hidden');
    bams=bams+1;
    looper++;
}

  else if ((randint2 === 10)&&(unicorns !== 2))  {
    $('.card2').addClass('cardunicorn-hidden');
    unicorns=unicorns+1;
    looper++;
}

  else {
      randint2 = Math.floor(Math.random() * 11);
}
} //card two
looper = 0;

while (looper === 0) {
  if ((randint3 === 0)&&(stars !== 2)) {
    $('.card3').addClass('cardstar-hidden');
    stars = stars +1;
    looper++;
}

  else if ((randint3 === 1)&&(squares !== 2))  {
    $('.card3').addClass('cardsquare-hidden');
    squares= squares+1; 
    looper++;
}

  else if ((randint3=== 2)&&(circles !== 2))  {
    $('.card3').addClass('cardcircle-hidden');
    circles = circles+1;
    looper++;
}

  else if ((randint3 === 3)&&(hearts !== 2))  {
    $('.card3').addClass('cardheart-hidden');
    hearts=hearts+1;
    looper++;
}

  else if ((randint3 === 4)&&(moons !== 2))  {
    $('.card3').addClass('cardmoon-hidden');
    moons=moons+1;
    looper++;
}

  else if ((randint3 === 5)&&(happys !== 2))  {
    $('.card3').addClass('cardhappy-hidden');
    happys=happys+1;
    looper++;
}

  else if ((randint3 === 6)&&(xs !== 2))  {
    $('.card3').addClass('cardx-hidden');
    xs=xs+1;
    looper++;
}

  else if ((randint3 === 7)&&(cars !== 2))  {
    $('.card3').addClass('cardcar-hidden');
    cars = cars+1;
    looper++;
}

  else if ((randint3 === 8)&&(triangles !== 2))  {
    $('.card3').addClass('cardtriangle-hidden');
    triangles = triangles+1;
    looper++;
}

  else if ((randint3 === 9)&&(bams !== 2))  {
    $('.card3').addClass('cardbam-hidden');
    bams=bams+1;
    looper++;
}

  else if ((randint3 === 10)&&(unicorns !== 2))  {
    $('.card3').addClass('cardunicorn-hidden');
    unicorns=unicorns+1;
    looper++;
}

  else {
      randint3 = Math.floor(Math.random() * 11);
}
} //card three
looper = 0;

while (looper === 0) {
  if ((randint4 === 0)&&(stars !== 2)) {
    $('.card4').addClass('cardstar-hidden');
    stars = stars +1;
    looper++;
}

  else if ((randint4 === 1)&&(squares !== 2))  {
    $('.card4').addClass('cardsquare-hidden');
    squares= squares+1; 
    looper++;
}

  else if ((randint4=== 2)&&(circles !== 2))  {
    $('.card4').addClass('cardcircle-hidden');
    circles = circles+1;
    looper++;
}

  else if ((randint4 === 3)&&(hearts !== 2))  {
    $('.card4').addClass('cardheart-hidden');
    hearts=hearts+1;
    looper++;
}

  else if ((randint4 === 4)&&(moons !== 2))  {
    $('.card4').addClass('cardmoon-hidden');
    moons=moons+1;
    looper++;
}

  else if ((randint4 === 5)&&(happys !== 2))  {
    $('.card4').addClass('cardhappy-hidden');
    happys=happys+1;
    looper++;
}

  else if ((randint4 === 6)&&(xs !== 2))  {
    $('.card4').addClass('cardx-hidden');
    xs=xs+1;
    looper++;
}

  else if ((randint4 === 7)&&(cars !== 2))  {
    $('.card4').addClass('cardcar-hidden');
    cars = cars+1;
    looper++;
}

  else if ((randint4 === 8)&&(triangles !== 2))  {
    $('.card4').addClass('cardtriangle-hidden');
    triangles = triangles+1;
    looper++;
}

  else if ((randint4 === 9)&&(bams !== 2))  {
    $('.card4').addClass('cardbam-hidden');
    bams=bams+1;
    looper++;
}

  else if ((randint4 === 10)&&(unicorns !== 2))  {
    $('.card4').addClass('cardunicorn-hidden');
    unicorns=unicorns+1;
    looper++;
}

  else {
      randint4 = Math.floor(Math.random() * 11);
}
} //card four
looper = 0;

while (looper === 0) {
  if ((randint5 === 0)&&(stars !== 2)) {
    $('.card5').addClass('cardstar-hidden');
    stars = stars +1;
    looper++;
}

  else if ((randint5 === 1)&&(squares !== 2))  {
    $('.card5').addClass('cardsquare-hidden');
    squares= squares+1; 
    looper++;
}

  else if ((randint5=== 2)&&(circles !== 2))  {
    $('.card5').addClass('cardcircle-hidden');
    circles = circles+1;
    looper++;
}

  else if ((randint5 === 3)&&(hearts !== 2))  {
    $('.card5').addClass('cardheart-hidden');
    hearts=hearts+1;
    looper++;
}

  else if ((randint5 === 4)&&(moons !== 2))  {
    $('.card5').addClass('cardmoon-hidden');
    moons=moons+1;
    looper++;
}

  else if ((randint5 === 5)&&(happys !== 2))  {
    $('.card5').addClass('cardhappy-hidden');
    happys=happys+1;
    looper++;
}

  else if ((randint5 === 6)&&(xs !== 2))  {
    $('.card5').addClass('cardx-hidden');
    xs=xs+1;
    looper++;
}

  else if ((randint5 === 7)&&(cars !== 2))  {
    $('.card5').addClass('cardcar-hidden');
    cars = cars+1;
    looper++;
}

  else if ((randint5 === 8)&&(triangles !== 2))  {
    $('.card5').addClass('cardtriangle-hidden');
    triangles = triangles+1;
    looper++;
}

  else if ((randint5 === 9)&&(bams !== 2))  {
    $('.card5').addClass('cardbam-hidden');
    bams=bams+1;
    looper++;
}

  else if ((randint5 === 10)&&(unicorns !== 2))  {
    $('.card5').addClass('cardunicorn-hidden');
    unicorns=unicorns+1;
    looper++;
}

  else {
      randint5 = Math.floor(Math.random() * 11);
}
} //card five
looper = 0;

while (looper === 0) {
  if ((randint6 === 0)&&(stars !== 2)) {
    $('.card6').addClass('cardstar-hidden');
    stars = stars +1;
    looper++;
}

  else if ((randint6 === 1)&&(squares !== 2))  {
    $('.card6').addClass('cardsquare-hidden');
    squares= squares+1; 
    looper++;
}

  else if ((randint6=== 2)&&(circles !== 2))  {
    $('.card6').addClass('cardcircle-hidden');
    circles = circles+1;
    looper++;
}

  else if ((randint6 === 3)&&(hearts !== 2))  {
    $('.card6').addClass('cardheart-hidden');
    hearts=hearts+1;
    looper++;
}

  else if ((randint6 === 4)&&(moons !== 2))  {
    $('.card6').addClass('cardmoon-hidden');
    moons=moons+1;
    looper++;
}

  else if ((randint6 === 5)&&(happys !== 2))  {
    $('.card6').addClass('cardhappy-hidden');
    happys=happys+1;
    looper++;
}

  else if ((randint6 === 6)&&(xs !== 2))  {
    $('.card6').addClass('cardx-hidden');
    xs=xs+1;
    looper++;
}

  else if ((randint6 === 7)&&(cars !== 2))  {
    $('.card6').addClass('cardcar-hidden');
    cars = cars+1;
    looper++;
}

  else if ((randint6 === 8)&&(triangles !== 2))  {
    $('.card6').addClass('cardtriangle-hidden');
    triangles = triangles+1;
    looper++;
}

  else if ((randint6 === 9)&&(bams !== 2))  {
    $('.card6').addClass('cardbam-hidden');
    bams=bams+1;
    looper++;
}

  else if ((randint6 === 10)&&(unicorns !== 2))  {
    $('.card6').addClass('cardunicorn-hidden');
    unicorns=unicorns+1;
    looper++;
}

  else {
      randint6 = Math.floor(Math.random() * 11);
}
} //card six
looper = 0;

while (looper === 0) {
  if ((randint7 === 0)&&(stars !== 2)) {
    $('.card7').addClass('cardstar-hidden');
    stars = stars +1;
    looper++;
}

  else if ((randint7 === 1)&&(squares !== 2))  {
    $('.card7').addClass('cardsquare-hidden');
    squares= squares+1; 
    looper++;
}

  else if ((randint7=== 2)&&(circles !== 2))  {
    $('.card7').addClass('cardcircle-hidden');
    circles = circles+1;
    looper++;
}

  else if ((randint7 === 3)&&(hearts !== 2))  {
    $('.card7').addClass('cardheart-hidden');
    hearts=hearts+1;
    looper++;
}

  else if ((randint7 === 4)&&(moons !== 2))  {
    $('.card7').addClass('cardmoon-hidden');
    moons=moons+1;
    looper++;
}

  else if ((randint7 === 5)&&(happys !== 2))  {
    $('.card7').addClass('cardhappy-hidden');
    happys=happys+1;
    looper++;
}

  else if ((randint7 === 6)&&(xs !== 2))  {
    $('.card7').addClass('cardx-hidden');
    xs=xs+1;
    looper++;
}

  else if ((randint7 === 7)&&(cars !== 2))  {
    $('.card7').addClass('cardcar-hidden');
    cars = cars+1;
    looper++;
}

  else if ((randint7 === 8)&&(triangles !== 2))  {
    $('.card7').addClass('cardtriangle-hidden');
    triangles = triangles+1;
    looper++;
}

  else if ((randint7 === 9)&&(bams !== 2))  {
    $('.card7').addClass('cardbam-hidden');
    bams=bams+1;
    looper++;
}

  else if ((randint7 === 10)&&(unicorns !== 2))  {
    $('.card7').addClass('cardunicorn-hidden');
    unicorns=unicorns+1;
    looper++;
}

  else {
      randint7 = Math.floor(Math.random() * 11);
}
} //card seven
looper = 0;

while (looper === 0) {
  if ((randint8 === 0)&&(stars !== 2)) {
    $('.card8').addClass('cardstar-hidden');
    stars = stars +1;
    looper++;
}

  else if ((randint8 === 1)&&(squares !== 2))  {
    $('.card8').addClass('cardsquare-hidden');
    squares= squares+1; 
    looper++;
}

  else if ((randint8=== 2)&&(circles !== 2))  {
    $('.card8').addClass('cardcircle-hidden');
    circles = circles+1;
    looper++;
}

  else if ((randint8 === 3)&&(hearts !== 2))  {
    $('.card8').addClass('cardheart-hidden');
    hearts=hearts+1;
    looper++;
}

  else if ((randint8 === 4)&&(moons !== 2))  {
    $('.card8').addClass('cardmoon-hidden');
    moons=moons+1;
    looper++;
}

  else if ((randint8 === 5)&&(happys !== 2))  {
    $('.card8').addClass('cardhappy-hidden');
    happys=happys+1;
    looper++;
}

  else if ((randint8 === 6)&&(xs !== 2))  {
    $('.card8').addClass('cardx-hidden');
    xs=xs+1;
    looper++;
}

  else if ((randint8 === 7)&&(cars !== 2))  {
    $('.card8').addClass('cardcar-hidden');
    cars = cars+1;
    looper++;
}

  else if ((randint8 === 8)&&(triangles !== 2))  {
    $('.card8').addClass('cardtriangle-hidden');
    triangles = triangles+1;
    looper++;
}

  else if ((randint8 === 9)&&(bams !== 2))  {
    $('.card8').addClass('cardbam-hidden');
    bams=bams+1;
    looper++;
}

  else if ((randint8 === 10)&&(unicorns !== 2))  {
    $('.card8').addClass('cardunicorn-hidden');
    unicorns=unicorns+1;
    looper++;
}

  else {
      randint8 = Math.floor(Math.random() * 11);
}
} //card eight
looper = 0;

while (looper === 0) {
  if ((randint9 === 0)&&(stars !== 2)) {
    $('.card9').addClass('cardstar-hidden');
    stars = stars +1;
    looper++;
}

  else if ((randint9 === 1)&&(squares !== 2))  {
    $('.card9').addClass('cardsquare-hidden');
    squares= squares+1; 
    looper++;
}

  else if ((randint9=== 2)&&(circles !== 2))  {
    $('.card9').addClass('cardcircle-hidden');
    circles = circles+1;
    looper++;
}

  else if ((randint9 === 3)&&(hearts !== 2))  {
    $('.card9').addClass('cardheart-hidden');
    hearts=hearts+1;
    looper++;
}

  else if ((randint9 === 4)&&(moons !== 2))  {
    $('.card9').addClass('cardmoon-hidden');
    moons=moons+1;
    looper++;
}

  else if ((randint9 === 5)&&(happys !== 2))  {
    $('.card9').addClass('cardhappy-hidden');
    happys=happys+1;
    looper++;
}

  else if ((randint9 === 6)&&(xs !== 2))  {
    $('.card9').addClass('cardx-hidden');
    xs=xs+1;
    looper++;
}

  else if ((randint9 === 7)&&(cars !== 2))  {
    $('.card9').addClass('cardcar-hidden');
    cars = cars+1;
    looper++;
}

  else if ((randint9 === 8)&&(triangles !== 2))  {
    $('.card9').addClass('cardtriangle-hidden');
    triangles = triangles+1;
    looper++;
}

  else if ((randint9 === 9)&&(bams !== 2))  {
    $('.card9').addClass('cardbam-hidden');
    bams=bams+1;
    looper++;
}

  else if ((randint9 === 10)&&(unicorns !== 2))  {
    $('.card9').addClass('cardunicorn-hidden');
    unicorns=unicorns+1;
    looper++;
}

  else {
      randint9 = Math.floor(Math.random() * 11);
}
} //card nine
looper = 0;

while (looper === 0) {
  if ((randint10 === 0)&&(stars !== 2)) {
    $('.card10').addClass('cardstar-hidden');
    stars = stars +1;
    looper++;
}

  else if ((randint10 === 1)&&(squares !== 2))  {
    $('.card10').addClass('cardsquare-hidden');
    squares= squares+1; 
    looper++;
}

  else if ((randint10=== 2)&&(circles !== 2))  {
    $('.card10').addClass('cardcircle-hidden');
    circles = circles+1;
    looper++;
}

  else if ((randint10 === 3)&&(hearts !== 2))  {
    $('.card10').addClass('cardheart-hidden');
    hearts=hearts+1;
    looper++;
}

  else if ((randint10 === 4)&&(moons !== 2))  {
    $('.card10').addClass('cardmoon-hidden');
    moons=moons+1;
    looper++;
}

  else if ((randint10 === 5)&&(happys !== 2))  {
    $('.card10').addClass('cardhappy-hidden');
    happys=happys+1;
    looper++;
}

  else if ((randint10 === 6)&&(xs !== 2))  {
    $('.card10').addClass('cardx-hidden');
    xs=xs+1;
    looper++;
}

  else if ((randint10 === 7)&&(cars !== 2))  {
    $('.card10').addClass('cardcar-hidden');
    cars = cars+1;
    looper++;
}

  else if ((randint10 === 8)&&(triangles !== 2))  {
    $('.card10').addClass('cardtriangle-hidden');
    triangles = triangles+1;
    looper++;
}

  else if ((randint10 === 9)&&(bams !== 2))  {
    $('.card10').addClass('cardbam-hidden');
    bams=bams+1;
    looper++;
}

  else if ((randint10 === 10)&&(unicorns !== 2))  {
    $('.card10').addClass('cardunicorn-hidden');
    unicorns=unicorns+1;
    looper++;
}

  else {
      randint10 = Math.floor(Math.random() * 11);
}
} //card ten
looper = 0;

while (looper === 0) {
  if ((randint11 === 0)&&(stars !== 2)) {
    $('.card11').addClass('cardstar-hidden');
    stars = stars +1;
    looper++;
}

  else if ((randint11 === 1)&&(squares !== 2))  {
    $('.card11').addClass('cardsquare-hidden');
    squares= squares+1; 
    looper++;
}

  else if ((randint11=== 2)&&(circles !== 2))  {
    $('.card11').addClass('cardcircle-hidden');
    circles = circles+1;
    looper++;
}

  else if ((randint11 === 3)&&(hearts !== 2))  {
    $('.card11').addClass('cardheart-hidden');
    hearts=hearts+1;
    looper++;
}

  else if ((randint11 === 4)&&(moons !== 2))  {
    $('.card11').addClass('cardmoon-hidden');
    moons=moons+1;
    looper++;
}

  else if ((randint11 === 5)&&(happys !== 2))  {
    $('.card11').addClass('cardhappy-hidden');
    happys=happys+1;
    looper++;
}

  else if ((randint11 === 6)&&(xs !== 2))  {
    $('.card11').addClass('cardx-hidden');
    xs=xs+1;
    looper++;
}

  else if ((randint11 === 7)&&(cars !== 2))  {
    $('.card11').addClass('cardcar-hidden');
    cars = cars+1;
    looper++;
}

  else if ((randint11 === 8)&&(triangles !== 2))  {
    $('.card11').addClass('cardtriangle-hidden');
    triangles = triangles+1;
    looper++;
}

  else if ((randint11 === 9)&&(bams !== 2))  { 
    $('.card11').addClass('cardbam-hidden');
    bams=bams+1;
    looper++;
}

  else if ((randint11 === 10)&&(unicorns !== 2))  {
    $('.card11').addClass('cardunicorn-hidden');
    unicorns=unicorns+1;
    looper++;
}

  else {
      randint11 = Math.floor(Math.random() * 11);
}
} //card eleven
looper = 0;

while (looper === 0) {
  if ((randint12 === 0)&&(stars !== 2)) {
    $('.card12').addClass('cardstar-hidden');
    stars = stars +1;
    looper++;
}

  else if ((randint12 === 1)&&(squares !== 2))  {
    $('.card12').addClass('cardsquare-hidden');
    squares= squares+1; 
    looper++;
}

  else if ((randint12=== 2)&&(circles !== 2))  {
    $('.card12').addClass('cardcircle-hidden');
    circles = circles+1;
    looper++;
}

  else if ((randint12 === 3)&&(hearts !== 2))  {
    $('.card12').addClass('cardheart-hidden');
    hearts=hearts+1;
    looper++;
}

  else if ((randint12 === 4)&&(moons !== 2))  {
    $('.card12').addClass('cardmoon-hidden');
    moons=moons+1;
    looper++;
}

  else if ((randint12 === 5)&&(happys !== 2))  {
    $('.card12').addClass('cardhappy-hidden');
    happys=happys+1;
    looper++;
}

  else if ((randint12 === 6)&&(xs !== 2))  {
    $('.card12').addClass('cardx-hidden');
    xs=xs+1;
    looper++;
}

  else if ((randint12 === 7)&&(cars !== 2))  {
    $('.card12').addClass('cardcar-hidden');
    cars = cars+1;
    looper++;
}

  else if ((randint12 === 8)&&(triangles !== 2))  {
    $('.card12').addClass('cardtriangle-hidden');
    triangles = triangles+1;
    looper++;
}

  else if ((randint12 === 9)&&(bams !== 2))  { 
    $('.card12').addClass('cardbam-hidden');
    bams=bams+1;
    looper++;
}

  else if ((randint12 === 10)&&(unicorns !== 2))  {
    $('.card12').addClass('cardunicorn-hidden');
    unicorns=unicorns+1;
    looper++;
}

  else {
      randint12 = Math.floor(Math.random() * 11);
}
} //card twelve
looper = 0;

while (looper === 0) {
  if ((randint13 === 0)&&(stars !== 2)) {
    $('.card13').addClass('cardstar-hidden');
    stars = stars +1;
    looper++;
}

  else if ((randint13 === 1)&&(squares !== 2))  {
    $('.card13').addClass('cardsquare-hidden');
    squares= squares+1; 
    looper++;
}

  else if ((randint13=== 2)&&(circles !== 2))  {
    $('.card13').addClass('cardcircle-hidden');
    circles = circles+1;
    looper++;
}

  else if ((randint13 === 3)&&(hearts !== 2))  {
    $('.card13').addClass('cardheart-hidden');
    hearts=hearts+1;
    looper++;
}

  else if ((randint13 === 4)&&(moons !== 2))  {
    $('.card13').addClass('cardmoon-hidden');
    moons=moons+1;
    looper++;
}

  else if ((randint13 === 5)&&(happys !== 2))  {
    $('.card13').addClass('cardhappy-hidden');
    happys=happys+1;
    looper++;
}

  else if ((randint13 === 6)&&(xs !== 2))  {
    $('.card13').addClass('cardx-hidden');
    xs=xs+1;
    looper++;
}

  else if ((randint13 === 7)&&(cars !== 2))  {
    $('.card13').addClass('cardcar-hidden');
    cars = cars+1;
    looper++;
}

  else if ((randint13 === 8)&&(triangles !== 2))  {
    $('.card13').addClass('cardtriangle-hidden');
    triangles = triangles+1;
    looper++;
}

  else if ((randint13 === 9)&&(bams !== 2))  { 
    $('.card13').addClass('cardbam-hidden');
    bams=bams+1;
    looper++;
}

  else if ((randint13 === 10)&&(unicorns !== 2))  {
    $('.card13').addClass('cardunicorn-hidden');
    unicorns=unicorns+1;
    looper++;
}

  else {
      randint13 = Math.floor(Math.random() * 11);
}
} //card thirteen
looper = 0;

while (looper === 0) {
  if ((randint14 === 0)&&(stars !== 2)) {
    $('.card14').addClass('cardstar-hidden');
    stars = stars +1;
    looper++;
}

  else if ((randint14 === 1)&&(squares !== 2))  {
    $('.card14').addClass('cardsquare-hidden');
    squares= squares+1; 
    looper++;
}

  else if ((randint14=== 2)&&(circles !== 2))  {
    $('.card14').addClass('cardcircle-hidden');
    circles = circles+1;
    looper++;
}

  else if ((randint14 === 3)&&(hearts !== 2))  {
    $('.card14').addClass('cardheart-hidden');
    hearts=hearts+1;
    looper++;
}

  else if ((randint14 === 4)&&(moons !== 2))  {
    $('.card14').addClass('cardmoon-hidden');
    moons=moons+1;
    looper++;
}

  else if ((randint14 === 5)&&(happys !== 2))  {
    $('.card14').addClass('cardhappy-hidden');
    happys=happys+1;
    looper++;
}

  else if ((randint14 === 6)&&(xs !== 2))  {
    $('.card14').addClass('cardx-hidden');
    xs=xs+1;
    looper++;
}

  else if ((randint14 === 7)&&(cars !== 2))  {
    $('.card14').addClass('cardcar-hidden');
    cars = cars+1;
    looper++;
}

  else if ((randint14 === 8)&&(triangles !== 2))  {
    $('.card14').addClass('cardtriangle-hidden');
    triangles = triangles+1;
    looper++;
}

  else if ((randint14 === 9)&&(bams !== 2))  { 
    $('.card14').addClass('cardbam-hidden');
    bams=bams+1;
    looper++;
}

  else if ((randint14 === 10)&&(unicorns !== 2))  {
    $('.card14').addClass('cardunicorn-hidden');
    unicorns=unicorns+1;
    looper++;
}

  else {
      randint14 = Math.floor(Math.random() * 11);
}
} //card fourteen
looper = 0;
/*
while (looper === 0) {
  if ((randint14 === 0)&&(stars !== 2)) {
    $('.card14').addClass('cardstar-hidden');
    stars = stars +1;
    looper++;
}

  else if ((randint14 === 1)&&(squares !== 2))  {
    $('.card14').addClass('cardsquare-hidden');
    squares= squares+1; 
    looper++;
}

  else if ((randint14=== 2)&&(circles !== 2))  {
    $('.card14').addClass('cardcircle-hidden');
    circles = circles+1;
    looper++;
}

  else if ((randint14 === 3)&&(hearts !== 2))  {
    $('.card14').addClass('cardheart-hidden');
    hearts=hearts+1;
    looper++;
}

  else if ((randint14 === 4)&&(moons !== 2))  {
    $('.card14').addClass('cardmoon-hidden');
    moons=moons+1;
    looper++;
}

  else if ((randint14 === 5)&&(happys !== 2))  {
    $('.card14').addClass('cardhappy-hidden');
    happys=happys+1;
    looper++;
}

  else if ((randint14 === 6)&&(xs !== 2))  {
    $('.card14').addClass('cardx-hidden');
    xs=xs+1;
    looper++;
}

  else if ((randint14 === 7)&&(cars !== 2))  {
    $('.card14').addClass('cardcar-hidden');
    cars = cars+1;
    looper++;
}

  else if ((randint14 === 8)&&(triangles !== 2))  {
    $('.card14').addClass('cardtriangle-hidden');
    triangles = triangles+1;
    looper++;
}

  else if ((randint14 === 9)&&(bams !== 2))  { 
    $('.card14').addClass('cardbam-hidden');
    bams=bams+1;
    looper++;
}

  else if ((randint14 === 10)&&(unicorns !== 2))  {
    $('.card14').addClass('cardunicorn-hidden');
    unicorns=unicorns+1;
    looper++;
}

  else {
      randint14 = Math.floor(Math.random() * 11);
}
} //card fourteen
looper = 0;
*/
while (looper === 0) {
  if ((randint15 === 0)&&(stars !== 2)) {
    $('.card15').addClass('cardstar-hidden');
    stars = stars +1;
    looper++;
}

  else if ((randint15 === 1)&&(squares !== 2))  {
    $('.card15').addClass('cardsquare-hidden');
    squares= squares+1; 
    looper++;
}

  else if ((randint15=== 2)&&(circles !== 2))  {
    $('.card15').addClass('cardcircle-hidden');
    circles = circles+1;
    looper++;
}

  else if ((randint15 === 3)&&(hearts !== 2))  {
    $('.card15').addClass('cardheart-hidden');
    hearts=hearts+1;
    looper++;
}

  else if ((randint15 === 4)&&(moons !== 2))  {
    $('.card15').addClass('cardmoon-hidden');
    moons=moons+1;
    looper++;
}

  else if ((randint15 === 5)&&(happys !== 2))  {
    $('.card15').addClass('cardhappy-hidden');
    happys=happys+1;
    looper++;
}

  else if ((randint15 === 6)&&(xs !== 2))  {
    $('.card15').addClass('cardx-hidden');
    xs=xs+1;
    looper++;
}

  else if ((randint15 === 7)&&(cars !== 2))  {
    $('.card15').addClass('cardcar-hidden');
    cars = cars+1;
    looper++;
}

  else if ((randint15 === 8)&&(triangles !== 2))  {
    $('.card15').addClass('cardtriangle-hidden');
    triangles = triangles+1;
    looper++;
}

  else if ((randint15 === 9)&&(bams !== 2))  { 
    $('.card15').addClass('cardbam-hidden');
    bams=bams+1;
    looper++;
}

  else if ((randint15 === 10)&&(unicorns !== 2))  {
    $('.card15').addClass('cardunicorn-hidden');
    unicorns=unicorns+1;
    looper++;
}

  else {
      randint15 = Math.floor(Math.random() * 11);
}
} //card fifteen
looper = 0;

while (looper === 0) {
  if ((randint16 === 0)&&(stars !== 2)) {
    $('.card16').addClass('cardstar-hidden');
    stars = stars +1;
    looper++;
}

  else if ((randint16 === 1)&&(squares !== 2))  {
    $('.card16').addClass('cardsquare-hidden');
    squares= squares+1; 
    looper++;
}

  else if ((randint16=== 2)&&(circles !== 2))  {
    $('.card16').addClass('cardcircle-hidden');
    circles = circles+1;
    looper++;
}

  else if ((randint16 === 3)&&(hearts !== 2))  {
    $('.card16').addClass('cardheart-hidden');
    hearts=hearts+1;
    looper++;
}

  else if ((randint16 === 4)&&(moons !== 2))  {
    $('.card16').addClass('cardmoon-hidden');
    moons=moons+1;
    looper++;
}

  else if ((randint16 === 5)&&(happys !== 2))  {
    $('.card16').addClass('cardhappy-hidden');
    happys=happys+1;
    looper++;
}

  else if ((randint16 === 6)&&(xs !== 2))  {
    $('.card16').addClass('cardx-hidden');
    xs=xs+1;
    looper++;
}

  else if ((randint16 === 7)&&(cars !== 2))  {
    $('.card16').addClass('cardcar-hidden');
    cars = cars+1;
    looper++;
}

  else if ((randint16 === 8)&&(triangles !== 2))  {
    $('.card16').addClass('cardtriangle-hidden');
    triangles = triangles+1;
    looper++;
}

  else if ((randint16 === 9)&&(bams !== 2))  { 
    $('.card16').addClass('cardbam-hidden');
    bams=bams+1;
    looper++;
}

  else if ((randint16 === 10)&&(unicorns !== 2))  {
    $('.card16').addClass('cardunicorn-hidden');
    unicorns=unicorns+1;
    looper++;
}

  else {
      randint16 = Math.floor(Math.random() * 11);
}
} //card two
looper = 0;

while (looper === 0) {
  if ((randint17 === 0)&&(stars !== 2)) {
    $('.card17').addClass('cardstar-hidden');
    stars = stars +1;
    looper++;
}

  else if ((randint17 === 1)&&(squares !== 2))  {
    $('.card17').addClass('cardsquare-hidden');
    squares= squares+1; 
    looper++;
}

  else if ((randint17=== 2)&&(circles !== 2))  {
    $('.card17').addClass('cardcircle-hidden');
    circles = circles+1;
    looper++;
}

  else if ((randint17 === 3)&&(hearts !== 2))  {
    $('.card17').addClass('cardheart-hidden');
    hearts=hearts+1;
    looper++;
}

  else if ((randint17 === 4)&&(moons !== 2))  {
    $('.card17').addClass('cardmoon-hidden');
    moons=moons+1;
    looper++;
}

  else if ((randint17 === 5)&&(happys !== 2))  {
    $('.card17').addClass('cardhappy-hidden');
    happys=happys+1;
    looper++;
}

  else if ((randint17 === 6)&&(xs !== 2))  {
    $('.card17').addClass('cardx-hidden');
    xs=xs+1;
    looper++;
}

  else if ((randint17 === 7)&&(cars !== 2))  {
    $('.card17').addClass('cardcar-hidden');
    cars = cars+1;
    looper++;
}

  else if ((randint17 === 8)&&(triangles !== 2))  {
    $('.card17').addClass('cardtriangle-hidden');
    triangles = triangles+1;
    looper++;
}

  else if ((randint17 === 9)&&(bams !== 2))  { 
    $('.card17').addClass('cardbam-hidden');
    bams=bams+1;
    looper++;
}

  else if ((randint17 === 10)&&(unicorns !== 2))  {
    $('.card17').addClass('cardunicorn-hidden');
    unicorns=unicorns+1;
    looper++;
}

  else {
      randint17 = Math.floor(Math.random() * 11);
}
} //card two
looper = 0;

while (looper === 0) {
  if ((randint18 === 0)&&(stars !== 2)) {
    $('.card18').addClass('cardstar-hidden');
    stars = stars +1;
    looper++;
}

  else if ((randint18 === 1)&&(squares !== 2))  {
    $('.card18').addClass('cardsquare-hidden');
    squares= squares+1; 
    looper++;
}

  else if ((randint18=== 2)&&(circles !== 2))  {
    $('.card18').addClass('cardcircle-hidden');
    circles = circles+1;
    looper++;
}

  else if ((randint18 === 3)&&(hearts !== 2))  {
    $('.card18').addClass('cardheart-hidden');
    hearts=hearts+1;
    looper++;
}

  else if ((randint18 === 4)&&(moons !== 2))  {
    $('.card18').addClass('cardmoon-hidden');
    moons=moons+1;
    looper++;
}

  else if ((randint18 === 5)&&(happys !== 2))  {
    $('.card18').addClass('cardhappy-hidden');
    happys=happys+1;
    looper++;
}

  else if ((randint18 === 6)&&(xs !== 2))  {
    $('.card18').addClass('cardx-hidden');
    xs=xs+1;
    looper++;
}

  else if ((randint18 === 7)&&(cars !== 2))  {
    $('.card18').addClass('cardcar-hidden');
    cars = cars+1;
    looper++;
}

  else if ((randint18 === 8)&&(triangles !== 2))  {
    $('.card18').addClass('cardtriangle-hidden');
    triangles = triangles+1;
    looper++;
}

  else if ((randint18 === 9)&&(bams !== 2))  { 
    $('.card18').addClass('cardbam-hidden');
    bams=bams+1;
    looper++;
}

  else if ((randint18 === 10)&&(unicorns !== 2))  {
    $('.card18').addClass('cardunicorn-hidden');
    unicorns=unicorns+1;
    looper++;
}

  else {
      randint18 = Math.floor(Math.random() * 11);
}
} //card two
looper = 0;

while (looper === 0) {
  if ((randint19 === 0)&&(stars !== 2)) {
    $('.card19').addClass('cardstar-hidden');
    stars = stars +1;
    looper++;
}

  else if ((randint19 === 1)&&(squares !== 2))  {
    $('.card19').addClass('cardsquare-hidden');
    squares= squares+1; 
    looper++;
}

  else if ((randint19=== 2)&&(circles !== 2))  {
    $('.card19').addClass('cardcircle-hidden');
    circles = circles+1;
    looper++;
}

  else if ((randint19 === 3)&&(hearts !== 2))  {
    $('.card19').addClass('cardheart-hidden');
    hearts=hearts+1;
    looper++;
}

  else if ((randint19 === 4)&&(moons !== 2))  {
    $('.card19').addClass('cardmoon-hidden');
    moons=moons+1;
    looper++;
}

  else if ((randint19 === 5)&&(happys !== 2))  {
    $('.card19').addClass('cardhappy-hidden');
    happys=happys+1;
    looper++;
}

  else if ((randint19 === 6)&&(xs !== 2))  {
    $('.card19').addClass('cardx-hidden');
    xs=xs+1;
    looper++;
}

  else if ((randint19 === 7)&&(cars !== 2))  {
    $('.card19').addClass('cardcar-hidden');
    cars = cars+1;
    looper++;
}

  else if ((randint19 === 8)&&(triangles !== 2))  {
    $('.card19').addClass('cardtriangle-hidden');
    triangles = triangles+1;
    looper++;
}

  else if ((randint19 === 9)&&(bams !== 2))  { 
    $('.card19').addClass('cardbam-hidden');
    bams=bams+1;
    looper++;
}

  else if ((randint19 === 10)&&(unicorns !== 2))  {
    $('.card19').addClass('cardunicorn-hidden');
    unicorns=unicorns+1;
    looper++;
}

  else {
      randint19 = Math.floor(Math.random() * 11);
}
} //card two
looper = 0;

while (looper === 0) {
  if ((randint20 === 0)&&(stars !== 2)) {
    $('.card20').addClass('cardstar-hidden');
    stars = stars +1;
    looper++;
}

  else if ((randint20 === 1)&&(squares !== 2))  {
    $('.card20').addClass('cardsquare-hidden');
    squares= squares+1; 
    looper++;
}

  else if ((randint20=== 2)&&(circles !== 2))  {
    $('.card20').addClass('cardcircle-hidden');
    circles = circles+1;
    looper++;
}

  else if ((randint20 === 3)&&(hearts !== 2))  {
    $('.card20').addClass('cardheart-hidden');
    hearts=hearts+1;
    looper++;
}

  else if ((randint20 === 4)&&(moons !== 2))  {
    $('.card20').addClass('cardmoon-hidden');
    moons=moons+1;
    looper++;
}

  else if ((randint20 === 5)&&(happys !== 2))  {
    $('.card20').addClass('cardhappy-hidden');
    happys=happys+1;
    looper++;
}

  else if ((randint20 === 6)&&(xs !== 2))  {
    $('.card20').addClass('cardx-hidden');
    xs=xs+1;
    looper++;
}

  else if ((randint20 === 7)&&(cars !== 2))  {
    $('.card20').addClass('cardcar-hidden');
    cars = cars+1;
    looper++;
}

  else if ((randint20 === 8)&&(triangles !== 2))  {
    $('.card20').addClass('cardtriangle-hidden');
    triangles = triangles+1;
    looper++;
}

  else if ((randint20 === 9)&&(bams !== 2))  { 
    $('.card20').addClass('cardbam-hidden');
    bams=bams+1;
    looper++;
}

  else if ((randint20 === 10)&&(unicorns !== 2))  {
    $('.card20').addClass('cardunicorn-hidden');
    unicorns=unicorns+1;
    looper++;
}

  else {
      randint20 = Math.floor(Math.random() * 11);
}
} //card two
looper = 0;

while (looper === 0) {
  if ((randint21 === 0)&&(stars !== 2)) {
    $('.card21').addClass('cardstar-hidden');
    stars = stars +1;
    looper++;
}

  else if ((randint21 === 1)&&(squares !== 2))  {
    $('.card21').addClass('cardsquare-hidden');
    squares= squares+1; 
    looper++;
}

  else if ((randint21=== 2)&&(circles !== 2))  {
    $('.card21').addClass('cardcircle-hidden');
    circles = circles+1;
    looper++;
}

  else if ((randint21 === 3)&&(hearts !== 2))  {
    $('.card21').addClass('cardheart-hidden');
    hearts=hearts+1;
    looper++;
}

  else if ((randint21 === 4)&&(moons !== 2))  {
    $('.card21').addClass('cardmoon-hidden');
    moons=moons+1;
    looper++;
}

  else if ((randint21 === 5)&&(happys !== 2))  {
    $('.card21').addClass('cardhappy-hidden');
    happys=happys+1;
    looper++;
}

  else if ((randint21 === 6)&&(xs !== 2))  {
    $('.card21').addClass('cardx-hidden');
    xs=xs+1;
    looper++;
}

  else if ((randint21 === 7)&&(cars !== 2))  {
    $('.card21').addClass('cardcar-hidden');
    cars = cars+1;
    looper++;
}

  else if ((randint21 === 8)&&(triangles !== 2))  {
    $('.card21').addClass('cardtriangle-hidden');
    triangles = triangles+1;
    looper++;
}

  else if ((randint21 === 9)&&(bams !== 2))  { 
    $('.card21').addClass('cardbam-hidden');
    bams=bams+1;
    looper++;
}

  else if ((randint21 === 10)&&(unicorns !== 2))  {
    $('.card21').addClass('cardunicorn-hidden');
    unicorns=unicorns+1;
    looper++;
}

  else {
      randint21 = Math.floor(Math.random() * 11);
}
} //card two
looper = 0;

while (looper === 0) {
  if ((randint22 === 0)&&(stars !== 2)) {
    $('.card22').addClass('cardstar-hidden');
    stars = stars +1;
    looper++;
}

  else if ((randint22 === 1)&&(squares !== 2))  {  
    $('.card22').addClass('cardsquare-hidden');
    squares= squares+1; 
    looper++;
}

  else if ((randint22=== 2)&&(circles !== 2))  {
    $('.card22').addClass('cardcircle-hidden');
    circles = circles+1;
    looper++;
}

  else if ((randint22 === 3)&&(hearts !== 2))  {
    $('.card22').addClass('cardheart-hidden');
    hearts=hearts+1;
    looper++;
}

  else if ((randint22 === 4)&&(moons !== 2))  {
    $('.card22').addClass('cardmoon-hidden');
    moons=moons+1;
    looper++;
}

  else if ((randint22 === 5)&&(happys !== 2))  {
    $('.card22').addClass('cardhappy-hidden');
    happys=happys+1;
    looper++;
}

  else if ((randint22 === 6)&&(xs !== 2))  {
    $('.card22').addClass('cardx-hidden');
    xs=xs+1;
    looper++;
}

  else if ((randint22 === 7)&&(cars !== 2))  {
    $('.card22').addClass('cardcar-hidden');
    cars = cars+1;
    looper++;
}

  else if ((randint22 === 8)&&(triangles !== 2))  {
    $('.card22').addClass('cardtriangle-hidden');
    triangles = triangles+1;
    looper++;
}

  else if ((randint22 === 9)&&(bams !== 2))  { 
    $('.card22').addClass('cardbam-hidden');
    bams=bams+1;
    looper++;
}

  else if ((randint22 === 10)&&(unicorns !== 2))  {
    $('.card22').addClass('cardunicorn-hidden');
    unicorns=unicorns+1;
    looper++;
}

  else {
      randint22 = Math.floor(Math.random() * 11);
}
} //card two

looper = 1;

} 
function getRandom30() {
end = 15;
$('.turn').text('It is Player 1\'s Turn');
$('#Player-1').text('Player 1\'s Score: 0');
$('#Player-2').text('Player 2\'s Score: 0');
$('#IDcard1').addClass('card1');
$('#IDcard2').addClass('card2');
$('#IDcard3').addClass('card3');
$('#IDcard4').addClass('card4');
$('#IDcard5').addClass('card5');
$('#IDcard6').addClass('card6');
$('#IDcard7').addClass('card7');
$('#IDcard8').addClass('card8');
$('#IDcard9').addClass('card9');
$('#IDcard10').addClass('card10');
$('#IDcard11').addClass('card11');
$('#IDcard12').addClass('card12');
$('#IDcard13').addClass('card13');
$('#IDcard14').addClass('card14');
$('#IDcard15').addClass('card15');
$('#IDcard16').addClass('card16');
$('#IDcard17').addClass('card17');
$('#IDcard18').addClass('card18');
$('#IDcard19').addClass('card19');
$('#IDcard20').addClass('card20');
$('#IDcard21').addClass('card21');
$('#IDcard22').addClass('card22');
$('#IDcard23').addClass('card23');
$('#IDcard24').addClass('card24');
$('#IDcard25').addClass('card25');
$('#IDcard26').addClass('card26');
$('#IDcard27').addClass('card27');
$('#IDcard28').addClass('card28');
$('#IDcard29').addClass('card29');
$('#IDcard30').addClass('card30');
    
var looper = 0;
var randint1 = Math.floor(Math.random() *  15);
var randint2 = Math.floor(Math.random() *  15);
var randint3 = Math.floor(Math.random() *  15);
var randint4 = Math.floor(Math.random() *  15);
var randint5 = Math.floor(Math.random() *  15);
var randint6 = Math.floor(Math.random() *  15);
var randint7 = Math.floor(Math.random() *  15);
var randint8 = Math.floor(Math.random() *  15);
var randint9 = Math.floor(Math.random() *  15);
var randint10 = Math.floor(Math.random() *  15);
var randint11 = Math.floor(Math.random() *  15);
var randint12 = Math.floor(Math.random() *  15);
var randint13 = Math.floor(Math.random() *  15);
var randint14 = Math.floor(Math.random() *  15);
var randint15 = Math.floor(Math.random() *  15);
var randint16 = Math.floor(Math.random() *  15);
var randint17 = Math.floor(Math.random() *  15);
var randint18 = Math.floor(Math.random() *  15);
var randint19 = Math.floor(Math.random() *  15);
var randint20 = Math.floor(Math.random() *  15);
var randint21 = Math.floor(Math.random() *  15);
var randint22 = Math.floor(Math.random() *  15);
var randint23 = Math.floor(Math.random() *  15);
var randint24 = Math.floor(Math.random() *  15);
var randint25 = Math.floor(Math.random() *  15);
var randint26 = Math.floor(Math.random() *  15);
var randint27 = Math.floor(Math.random() *  15);
var randint28 = Math.floor(Math.random() *  15);
var randint29 = Math.floor(Math.random() *  15);
var randint30 = Math.floor(Math.random() *  15);


var stars = 0;
var squares = 0;
var circles = 0; 
var hearts = 0;
var moons = 0;
var happys = 0; 
var xs = 0;
var cars = 0;
var triangles = 0;
var bams = 0;
var unicorns = 0;
var statues = 0;
var balloons = 0;
var flags = 0;
var trees = 0;
    
while (looper === 0) {
  if ((randint1 === 0)&&(stars !== 2)) {
    $('.card1').addClass('cardstar-hidden');
    stars = stars +1;
    looper++;
}

  else if ((randint1 === 1)&&(squares !== 2))  {
    $('.card1').addClass('cardsquare-hidden');
    squares= squares+1; 
    looper++;
}

  else if ((randint1=== 2)&&(circles !== 2))  {
    $('.card1').addClass('cardcircle-hidden');
    circles = circles+1;
    looper++;
}

  else if ((randint1 === 3)&&(hearts !== 2))  {
    $('.card1').addClass('cardheart-hidden');
    hearts=hearts+1;
    looper++;
}

  else if ((randint1 === 4)&&(moons !== 2))  {
    $('.card1').addClass('cardmoon-hidden');
    moons=moons+1;
    looper++;
}

  else if ((randint1 === 5)&&(happys !== 2))  {
    $('.card1').addClass('cardhappy-hidden');
    happys=happys+1;
    looper++;
}

  else if ((randint1 === 6)&&(xs !== 2))  {
    $('.card1').addClass('cardx-hidden');
    xs=xs+1;
    looper++;
}

  else if ((randint1 === 7)&&(cars !== 2))  {
    $('.card1').addClass('cardcar-hidden');
    cars = cars+1;
    looper++;
}

  else if ((randint1 === 8)&&(triangles !== 2))  {
    $('.card1').addClass('cardtriangle-hidden');
    triangles = triangles+1;
    looper++;
}

  else if ((randint1 === 9)&&(bams !== 2))  {
    $('.card1').addClass('cardbam-hidden');
    bams=bams+1;
    looper++;
}

  else if ((randint1 === 10)&&(unicorns !== 2))  {
    $('.card1').addClass('cardunicorn-hidden');
    unicorns=unicorns+1;
    looper++;
}
  else if ((randint1 === 11)&&(statues !== 2))  {
    $('.card1').addClass('cardstatue-hidden');
    statues=statues+1;
    looper++;
}

  else if ((randint1 === 12)&&(balloons !== 2))  {
    $('.card1').addClass('cardballoon-hidden');
    balloons=balloons+1;
    looper++;
}

  else if ((randint1 === 13)&&(flags !== 2))  {
    $('.card1').addClass('cardflag-hidden');
    flags=flags+1;
    looper++;
}

  else if ((randint1 === 14)&&(trees !== 2))  {
    $('.card1').addClass('cardtree-hidden');
    trees=trees+1;
    looper++;
}

  else {
      randint1 = Math.floor(Math.random() * 15);
}
} //card two
looper = 0;

while (looper === 0) {
  if ((randint2 === 0)&&(stars !== 2)) {
    $('.card2').addClass('cardstar-hidden');
    stars = stars +1;
    looper++;
}

  else if ((randint2 === 1)&&(squares !== 2))  {
    $('.card2').addClass('cardsquare-hidden');
    squares= squares+1; 
    looper++;
}

  else if ((randint2=== 2)&&(circles !== 2))  {
    $('.card2').addClass('cardcircle-hidden');
    circles = circles+1;
    looper++;
}

  else if ((randint2 === 3)&&(hearts !== 2))  {
    $('.card2').addClass('cardheart-hidden');
    hearts=hearts+1;
    looper++;
}

  else if ((randint2 === 4)&&(moons !== 2))  {
    $('.card2').addClass('cardmoon-hidden');
    moons=moons+1;
    looper++;
}

  else if ((randint2 === 5)&&(happys !== 2))  {
    $('.card2').addClass('cardhappy-hidden');
    happys=happys+1;
    looper++;
}

  else if ((randint2 === 6)&&(xs !== 2))  {
    $('.card2').addClass('cardx-hidden');
    xs=xs+1;
    looper++;
}

  else if ((randint2 === 7)&&(cars !== 2))  {
    $('.card2').addClass('cardcar-hidden');
    cars = cars+1;
    looper++;
}

  else if ((randint2 === 8)&&(triangles !== 2))  {
    $('.card2').addClass('cardtriangle-hidden');
    triangles = triangles+1;
    looper++;
}

  else if ((randint2 === 9)&&(bams !== 2))  {
    $('.card2').addClass('cardbam-hidden');
    bams=bams+1;
    looper++;
}

  else if ((randint2 === 10)&&(unicorns !== 2))  {
    $('.card2').addClass('cardunicorn-hidden');
    unicorns=unicorns+1;
    looper++;
}
  else if ((randint2 === 11)&&(statues !== 2))  {
    $('.card2').addClass('cardstatue-hidden');
    statues=statues+1;
    looper++;
}

  else if ((randint2 === 12)&&(balloons !== 2))  {
    $('.card2').addClass('cardballoon-hidden');
    balloons=balloons+1;
    looper++;
}

  else if ((randint2 === 13)&&(flags !== 2))  {
    $('.card2').addClass('cardflag-hidden');
    flags=flags+1;
    looper++;
}

  else if ((randint2 === 14)&&(trees !== 2))  {
    $('.card2').addClass('cardtree-hidden');
    trees=trees+1;
    looper++;
}

  else {
      randint2 = Math.floor(Math.random() * 15);
}
} //card two
looper = 0;


while (looper === 0) {
  if ((randint3 === 0)&&(stars !== 2)) {
    $('.card3').addClass('cardstar-hidden');
    stars = stars +1;
    looper++;
}

  else if ((randint3 === 1)&&(squares !== 2))  {
    $('.card3').addClass('cardsquare-hidden');
    squares= squares+1; 
    looper++;
}

  else if ((randint3=== 2)&&(circles !== 2))  {
    $('.card3').addClass('cardcircle-hidden');
    circles = circles+1;
    looper++;
}

  else if ((randint3 === 3)&&(hearts !== 2))  {
    $('.card3').addClass('cardheart-hidden');
    hearts=hearts+1;
    looper++;
}

  else if ((randint3 === 4)&&(moons !== 2))  {
    $('.card3').addClass('cardmoon-hidden');
    moons=moons+1;
    looper++;
}

  else if ((randint3 === 5)&&(happys !== 2))  {
    $('.card3').addClass('cardhappy-hidden');
    happys=happys+1;
    looper++;
}

  else if ((randint3 === 6)&&(xs !== 2))  {
    $('.card3').addClass('cardx-hidden');
    xs=xs+1;
    looper++;
}

  else if ((randint3 === 7)&&(cars !== 2))  {
    $('.card3').addClass('cardcar-hidden');
    cars = cars+1;
    looper++;
}

  else if ((randint3 === 8)&&(triangles !== 2))  {
    $('.card3').addClass('cardtriangle-hidden');
    triangles = triangles+1;
    looper++;
}

  else if ((randint3 === 9)&&(bams !== 2))  {
    $('.card3').addClass('cardbam-hidden');
    bams=bams+1;
    looper++;
}

  else if ((randint3 === 10)&&(unicorns !== 2))  {
    $('.card3').addClass('cardunicorn-hidden');
    unicorns=unicorns+1;
    looper++;
}
  else if ((randint3 === 11)&&(statues !== 2))  {
    $('.card3').addClass('cardstatue-hidden');
    statues=statues+1;
    looper++;
}

  else if ((randint3 === 12)&&(balloons !== 2))  {
    $('.card3').addClass('cardballoon-hidden');
    balloons=balloons+1;
    looper++;
}

  else if ((randint3 === 13)&&(flags !== 2))  {
    $('.card3').addClass('cardflag-hidden');
    flags=flags+1;
    looper++;
}

  else if ((randint3 === 14)&&(trees !== 2))  {
    $('.card3').addClass('cardtree-hidden');
    trees=trees+1;
    looper++;
}

  else {
      randint3 = Math.floor(Math.random() * 15);
}
} //card two
looper = 0;

while (looper === 0) {
  if ((randint4 === 0)&&(stars !== 2)) {
    $('.card4').addClass('cardstar-hidden');
    stars = stars +1;
    looper++;
}

  else if ((randint4 === 1)&&(squares !== 2))  {
    $('.card4').addClass('cardsquare-hidden');
    squares= squares+1; 
    looper++;
}

  else if ((randint4=== 2)&&(circles !== 2))  {
    $('.card4').addClass('cardcircle-hidden');
    circles = circles+1;
    looper++;
}

  else if ((randint4 === 3)&&(hearts !== 2))  {
    $('.card4').addClass('cardheart-hidden');
    hearts=hearts+1;
    looper++;
}

  else if ((randint4 === 4)&&(moons !== 2))  {
    $('.card4').addClass('cardmoon-hidden');
    moons=moons+1;
    looper++;
}

  else if ((randint4 === 5)&&(happys !== 2))  {
    $('.card4').addClass('cardhappy-hidden');
    happys=happys+1;
    looper++;
}

  else if ((randint4 === 6)&&(xs !== 2))  {
    $('.card4').addClass('cardx-hidden');
    xs=xs+1;
    looper++;
}

  else if ((randint4 === 7)&&(cars !== 2))  {
    $('.card4').addClass('cardcar-hidden');
    cars = cars+1;
    looper++;
}

  else if ((randint4 === 8)&&(triangles !== 2))  {
    $('.card4').addClass('cardtriangle-hidden');
    triangles = triangles+1;
    looper++;
}

  else if ((randint4 === 9)&&(bams !== 2))  {
    $('.card4').addClass('cardbam-hidden');
    bams=bams+1;
    looper++;
}

  else if ((randint4 === 10)&&(unicorns !== 2))  {
    $('.card4').addClass('cardunicorn-hidden');
    unicorns=unicorns+1;
    looper++;
}
  else if ((randint4 === 11)&&(statues !== 2))  {
    $('.card4').addClass('cardstatue-hidden');
    statues=statues+1;
    looper++;
}

  else if ((randint4 === 12)&&(balloons !== 2))  {
    $('.card4').addClass('cardballoon-hidden');
    balloons=balloons+1;
    looper++;
}

  else if ((randint4 === 13)&&(flags !== 2))  {
    $('.card4').addClass('cardflag-hidden');
    flags=flags+1;
    looper++;
}

  else if ((randint4 === 14)&&(trees !== 2))  {
    $('.card4').addClass('cardtree-hidden');
    trees=trees+1;
    looper++;
}

  else {
      randint4 = Math.floor(Math.random() * 15);
}
} //card two
looper = 0;

while (looper === 0) {
  if ((randint5 === 0)&&(stars !== 2)) {
    $('.card5').addClass('cardstar-hidden');
    stars = stars +1;
    looper++;
}

  else if ((randint5 === 1)&&(squares !== 2))  {
    $('.card5').addClass('cardsquare-hidden');
    squares= squares+1; 
    looper++;
}

  else if ((randint5=== 2)&&(circles !== 2))  {
    $('.card5').addClass('cardcircle-hidden');
    circles = circles+1;
    looper++;
}

  else if ((randint5 === 3)&&(hearts !== 2))  {
    $('.card5').addClass('cardheart-hidden');
    hearts=hearts+1;
    looper++;
}

  else if ((randint5 === 4)&&(moons !== 2))  {
    $('.card5').addClass('cardmoon-hidden');
    moons=moons+1;
    looper++;
}

  else if ((randint5 === 5)&&(happys !== 2))  {
    $('.card5').addClass('cardhappy-hidden');
    happys=happys+1;
    looper++;
}

  else if ((randint5 === 6)&&(xs !== 2))  {
    $('.card5').addClass('cardx-hidden');
    xs=xs+1;
    looper++;
}

  else if ((randint5 === 7)&&(cars !== 2))  {
    $('.card5').addClass('cardcar-hidden');
    cars = cars+1;
    looper++;
}

  else if ((randint5 === 8)&&(triangles !== 2))  {
    $('.card5').addClass('cardtriangle-hidden');
    triangles = triangles+1;
    looper++;
}

  else if ((randint5 === 9)&&(bams !== 2))  {
    $('.card5').addClass('cardbam-hidden');
    bams=bams+1;
    looper++;
}

  else if ((randint5 === 10)&&(unicorns !== 2))  {
    $('.card5').addClass('cardunicorn-hidden');
    unicorns=unicorns+1;
    looper++;
}
  else if ((randint5 === 11)&&(statues !== 2))  {
    $('.card5').addClass('cardstatue-hidden');
    statues=statues+1;
    looper++;
}

  else if ((randint5 === 12)&&(balloons !== 2))  {
    $('.card5').addClass('cardballoon-hidden');
    balloons=balloons+1;
    looper++;
}

  else if ((randint5 === 13)&&(flags !== 2))  {
    $('.card5').addClass('cardflag-hidden');
    flags=flags+1;
    looper++;
}

  else if ((randint5 === 14)&&(trees !== 2))  {
    $('.card5').addClass('cardtree-hidden');
    trees=trees+1;
    looper++;
}

  else {
      randint5 = Math.floor(Math.random() * 15);
}
} //card two
looper = 0;

while (looper === 0) {
  if ((randint6 === 0)&&(stars !== 2)) {
    $('.card6').addClass('cardstar-hidden');
    stars = stars +1;
    looper++;
}

  else if ((randint6 === 1)&&(squares !== 2))  {
    $('.card6').addClass('cardsquare-hidden');
    squares= squares+1; 
    looper++;
}

  else if ((randint6=== 2)&&(circles !== 2))  {
    $('.card6').addClass('cardcircle-hidden');
    circles = circles+1;
    looper++;
}

  else if ((randint6 === 3)&&(hearts !== 2))  {
    $('.card6').addClass('cardheart-hidden');
    hearts=hearts+1;
    looper++;
}

  else if ((randint6 === 4)&&(moons !== 2))  {
    $('.card6').addClass('cardmoon-hidden');
    moons=moons+1;
    looper++;
}

  else if ((randint6 === 5)&&(happys !== 2))  {
    $('.card6').addClass('cardhappy-hidden');
    happys=happys+1;
    looper++;
}

  else if ((randint6 === 6)&&(xs !== 2))  {
    $('.card6').addClass('cardx-hidden');
    xs=xs+1;
    looper++;
}

  else if ((randint6 === 7)&&(cars !== 2))  {
    $('.card6').addClass('cardcar-hidden');
    cars = cars+1;
    looper++;
}

  else if ((randint6 === 8)&&(triangles !== 2))  {
    $('.card6').addClass('cardtriangle-hidden');
    triangles = triangles+1;
    looper++;
}

  else if ((randint6 === 9)&&(bams !== 2))  {
    $('.card6').addClass('cardbam-hidden');
    bams=bams+1;
    looper++;
}

  else if ((randint6 === 10)&&(unicorns !== 2))  {
    $('.card6').addClass('cardunicorn-hidden');
    unicorns=unicorns+1;
    looper++;
}
  else if ((randint6 === 11)&&(statues !== 2))  {
    $('.card6').addClass('cardstatue-hidden');
    statues=statues+1;
    looper++;
}

  else if ((randint6 === 12)&&(balloons !== 2))  {
    $('.card6').addClass('cardballoon-hidden');
    balloons=balloons+1;
    looper++;
}

  else if ((randint6 === 13)&&(flags !== 2))  {
    $('.card6').addClass('cardflag-hidden');
    flags=flags+1;
    looper++;
}

  else if ((randint6 === 14)&&(trees !== 2))  {
    $('.card6').addClass('cardtree-hidden');
    trees=trees+1;
    looper++;
}

  else {
      randint6 = Math.floor(Math.random() * 15);
}
} //card two
looper = 0;

while (looper === 0) {
  if ((randint7 === 0)&&(stars !== 2)) {
    $('.card7').addClass('cardstar-hidden');
    stars = stars +1;
    looper++;
}

  else if ((randint7 === 1)&&(squares !== 2))  {
    $('.card7').addClass('cardsquare-hidden');
    squares= squares+1; 
    looper++;
}

  else if ((randint7=== 2)&&(circles !== 2))  {
    $('.card7').addClass('cardcircle-hidden');
    circles = circles+1;
    looper++;
}

  else if ((randint7 === 3)&&(hearts !== 2))  {
    $('.card7').addClass('cardheart-hidden');
    hearts=hearts+1;
    looper++;
}

  else if ((randint7 === 4)&&(moons !== 2))  {
    $('.card7').addClass('cardmoon-hidden');
    moons=moons+1;
    looper++;
}

  else if ((randint7 === 5)&&(happys !== 2))  {
    $('.card7').addClass('cardhappy-hidden');
    happys=happys+1;
    looper++;
}

  else if ((randint7 === 6)&&(xs !== 2))  {
    $('.card7').addClass('cardx-hidden');
    xs=xs+1;
    looper++;
}

  else if ((randint7 === 7)&&(cars !== 2))  {
    $('.card7').addClass('cardcar-hidden');
    cars = cars+1;
    looper++;
}

  else if ((randint7 === 8)&&(triangles !== 2))  {
    $('.card7').addClass('cardtriangle-hidden');
    triangles = triangles+1;
    looper++;
}

  else if ((randint7 === 9)&&(bams !== 2))  {
    $('.card7').addClass('cardbam-hidden');
    bams=bams+1;
    looper++;
}

  else if ((randint7 === 10)&&(unicorns !== 2))  {
    $('.card7').addClass('cardunicorn-hidden');
    unicorns=unicorns+1;
    looper++;
}
  else if ((randint7 === 11)&&(statues !== 2))  {
    $('.card7').addClass('cardstatue-hidden');
    statues=statues+1;
    looper++;
}

  else if ((randint7 === 12)&&(balloons !== 2))  {
    $('.card7').addClass('cardballoon-hidden');
    balloons=balloons+1;
    looper++;
}

  else if ((randint7 === 13)&&(flags !== 2))  {
    $('.card7').addClass('cardflag-hidden');
    flags=flags+1;
    looper++;
}

  else if ((randint7 === 14)&&(trees !== 2))  {
    $('.card7').addClass('cardtree-hidden');
    trees=trees+1;
    looper++;
}

  else {
      randint7 = Math.floor(Math.random() * 15);
}
} //card two
looper = 0;

while (looper === 0) {
  if ((randint8 === 0)&&(stars !== 2)) {
    $('.card8').addClass('cardstar-hidden');
    stars = stars +1;
    looper++;
}

  else if ((randint8 === 1)&&(squares !== 2))  {
    $('.card8').addClass('cardsquare-hidden');
    squares= squares+1; 
    looper++;
}

  else if ((randint8=== 2)&&(circles !== 2))  {
    $('.card8').addClass('cardcircle-hidden');
    circles = circles+1;
    looper++;
}

  else if ((randint8 === 3)&&(hearts !== 2))  {
    $('.card8').addClass('cardheart-hidden');
    hearts=hearts+1;
    looper++;
}

  else if ((randint8 === 4)&&(moons !== 2))  {
    $('.card8').addClass('cardmoon-hidden');
    moons=moons+1;
    looper++;
}

  else if ((randint8 === 5)&&(happys !== 2))  {
    $('.card8').addClass('cardhappy-hidden');
    happys=happys+1;
    looper++;
}

  else if ((randint8 === 6)&&(xs !== 2))  {
    $('.card8').addClass('cardx-hidden');
    xs=xs+1;
    looper++;
}

  else if ((randint8 === 7)&&(cars !== 2))  {
    $('.card8').addClass('cardcar-hidden');
    cars = cars+1;
    looper++;
}

  else if ((randint8 === 8)&&(triangles !== 2))  {
    $('.card8').addClass('cardtriangle-hidden');
    triangles = triangles+1;
    looper++;
}

  else if ((randint8 === 9)&&(bams !== 2))  {
    $('.card8').addClass('cardbam-hidden');
    bams=bams+1;
    looper++;
}

  else if ((randint8 === 10)&&(unicorns !== 2))  {
    $('.card8').addClass('cardunicorn-hidden');
    unicorns=unicorns+1;
    looper++;
}
  else if ((randint8 === 11)&&(statues !== 2))  {
    $('.card8').addClass('cardstatue-hidden');
    statues=statues+1;
    looper++;
}

  else if ((randint8 === 12)&&(balloons !== 2))  {
    $('.card8').addClass('cardballoon-hidden');
    balloons=balloons+1;
    looper++;
}

  else if ((randint8 === 13)&&(flags !== 2))  {
    $('.card8').addClass('cardflag-hidden');
    flags=flags+1;
    looper++;
}

  else if ((randint8 === 14)&&(trees !== 2))  {
    $('.card8').addClass('cardtree-hidden');
    trees=trees+1;
    looper++;
}

  else {
      randint8 = Math.floor(Math.random() * 15);
}
} //card two
looper = 0;

while (looper === 0) {
  if ((randint9 === 0)&&(stars !== 2)) {
    $('.card9').addClass('cardstar-hidden');
    stars = stars +1;
    looper++;
}

  else if ((randint9 === 1)&&(squares !== 2))  {
    $('.card9').addClass('cardsquare-hidden');
    squares= squares+1; 
    looper++;
}

  else if ((randint9=== 2)&&(circles !== 2))  {
    $('.card9').addClass('cardcircle-hidden');
    circles = circles+1;
    looper++;
}

  else if ((randint9 === 3)&&(hearts !== 2))  {
    $('.card9').addClass('cardheart-hidden');
    hearts=hearts+1;
    looper++;
}

  else if ((randint9 === 4)&&(moons !== 2))  {
    $('.card9').addClass('cardmoon-hidden');
    moons=moons+1;
    looper++;
}

  else if ((randint9 === 5)&&(happys !== 2))  {
    $('.card9').addClass('cardhappy-hidden');
    happys=happys+1;
    looper++;
}

  else if ((randint9 === 6)&&(xs !== 2))  {
    $('.card9').addClass('cardx-hidden');
    xs=xs+1;
    looper++;
}

  else if ((randint9 === 7)&&(cars !== 2))  {
    $('.card9').addClass('cardcar-hidden');
    cars = cars+1;
    looper++;
}

  else if ((randint9 === 8)&&(triangles !== 2))  {
    $('.card9').addClass('cardtriangle-hidden');
    triangles = triangles+1;
    looper++;
}

  else if ((randint9 === 9)&&(bams !== 2))  {
    $('.card9').addClass('cardbam-hidden');
    bams=bams+1;
    looper++;
}

  else if ((randint9 === 10)&&(unicorns !== 2))  {
    $('.card9').addClass('cardunicorn-hidden');
    unicorns=unicorns+1;
    looper++;
}
  else if ((randint9 === 11)&&(statues !== 2))  {
    $('.card9').addClass('cardstatue-hidden');
    statues=statues+1;
    looper++;
}

  else if ((randint9 === 12)&&(balloons !== 2))  {
    $('.card9').addClass('cardballoon-hidden');
    balloons=balloons+1;
    looper++;
}

  else if ((randint9 === 13)&&(flags !== 2))  {
    $('.card9').addClass('cardflag-hidden');
    flags=flags+1;
    looper++;
}

  else if ((randint9 === 14)&&(trees !== 2))  {
    $('.card9').addClass('cardtree-hidden');
    trees=trees+1;
    looper++;
}

  else {
      randint9 = Math.floor(Math.random() * 15);
}
} //card two
looper = 0;

while (looper === 0) {
  if ((randint10 === 0)&&(stars !== 2)) {
    $('.card10').addClass('cardstar-hidden');
    stars = stars +1;
    looper++;
}

  else if ((randint10 === 1)&&(squares !== 2))  {
    $('.card10').addClass('cardsquare-hidden');
    squares= squares+1; 
    looper++;
}

  else if ((randint10=== 2)&&(circles !== 2))  {
    $('.card10').addClass('cardcircle-hidden');
    circles = circles+1;
    looper++;
}

  else if ((randint10 === 3)&&(hearts !== 2))  {
    $('.card10').addClass('cardheart-hidden');
    hearts=hearts+1;
    looper++;
}

  else if ((randint10 === 4)&&(moons !== 2))  {
    $('.card10').addClass('cardmoon-hidden');
    moons=moons+1;
    looper++;
}

  else if ((randint10 === 5)&&(happys !== 2))  {
    $('.card10').addClass('cardhappy-hidden');
    happys=happys+1;
    looper++;
}

  else if ((randint10 === 6)&&(xs !== 2))  {
    $('.card10').addClass('cardx-hidden');
    xs=xs+1;
    looper++;
}

  else if ((randint10 === 7)&&(cars !== 2))  {
    $('.card10').addClass('cardcar-hidden');
    cars = cars+1;
    looper++;
}

  else if ((randint10 === 8)&&(triangles !== 2))  {
    $('.card10').addClass('cardtriangle-hidden');
    triangles = triangles+1;
    looper++;
}

  else if ((randint10 === 9)&&(bams !== 2))  {
    $('.card10').addClass('cardbam-hidden');
    bams=bams+1;
    looper++;
}

  else if ((randint10 === 10)&&(unicorns !== 2))  {
    $('.card10').addClass('cardunicorn-hidden');
    unicorns=unicorns+1;
    looper++;
}
  else if ((randint10 === 11)&&(statues !== 2))  {
    $('.card10').addClass('cardstatue-hidden');
    statues=statues+1;
    looper++;
}

  else if ((randint10 === 12)&&(balloons !== 2))  {
    $('.card10').addClass('cardballoon-hidden');
    balloons=balloons+1;
    looper++;
}

  else if ((randint10 === 13)&&(flags !== 2))  {
    $('.card10').addClass('cardflag-hidden');
    flags=flags+1;
    looper++;
}

  else if ((randint10 === 14)&&(trees !== 2))  {
    $('.card10').addClass('cardtree-hidden');
    trees=trees+1;
    looper++;
}

  else {
      randint10 = Math.floor(Math.random() * 15);
}
} //card two
looper = 0;

while (looper === 0) {
  if ((randint11 === 0)&&(stars !== 2)) {
    $('.card11').addClass('cardstar-hidden');
    stars = stars +1;
    looper++;
}

  else if ((randint11 === 1)&&(squares !== 2))  {
    $('.card11').addClass('cardsquare-hidden');
    squares= squares+1; 
    looper++;
}

  else if ((randint11=== 2)&&(circles !== 2))  {
    $('.card11').addClass('cardcircle-hidden');
    circles = circles+1;
    looper++;
}

  else if ((randint11 === 3)&&(hearts !== 2))  {
    $('.card11').addClass('cardheart-hidden');
    hearts=hearts+1;
    looper++;
}

  else if ((randint11 === 4)&&(moons !== 2))  {
    $('.card11').addClass('cardmoon-hidden');
    moons=moons+1;
    looper++;
}

  else if ((randint11 === 5)&&(happys !== 2))  {
    $('.card11').addClass('cardhappy-hidden');
    happys=happys+1;
    looper++;
}

  else if ((randint11 === 6)&&(xs !== 2))  {
    $('.card11').addClass('cardx-hidden');
    xs=xs+1;
    looper++;
}

  else if ((randint11 === 7)&&(cars !== 2))  {
    $('.card11').addClass('cardcar-hidden');
    cars = cars+1;
    looper++;
}

  else if ((randint11 === 8)&&(triangles !== 2))  {
    $('.card11').addClass('cardtriangle-hidden');
    triangles = triangles+1;
    looper++;
}

  else if ((randint11 === 9)&&(bams !== 2))  {
    $('.card11').addClass('cardbam-hidden');
    bams=bams+1;
    looper++;
}

  else if ((randint11 === 10)&&(unicorns !== 2))  {
    $('.card11').addClass('cardunicorn-hidden');
    unicorns=unicorns+1;
    looper++;
}
  else if ((randint11 === 11)&&(statues !== 2))  {
    $('.card11').addClass('cardstatue-hidden');
    statues=statues+1;
    looper++;
}

  else if ((randint11 === 12)&&(balloons !== 2))  {
    $('.card11').addClass('cardballoon-hidden');
    balloons=balloons+1;
    looper++;
}

  else if ((randint11 === 13)&&(flags !== 2))  {
    $('.card11').addClass('cardflag-hidden');
    flags=flags+1;
    looper++;
}

  else if ((randint11 === 14)&&(trees !== 2))  {
    $('.card11').addClass('cardtree-hidden');
    trees=trees+1;
    looper++;
}

  else {
      randint11 = Math.floor(Math.random() * 15);
}
} //card two
looper = 0;

while (looper === 0) {
  if ((randint12 === 0)&&(stars !== 2)) {
    $('.card12').addClass('cardstar-hidden');
    stars = stars +1;
    looper++;
}

  else if ((randint12 === 1)&&(squares !== 2))  {
    $('.card12').addClass('cardsquare-hidden');
    squares= squares+1; 
    looper++;
}

  else if ((randint12=== 2)&&(circles !== 2))  {
    $('.card12').addClass('cardcircle-hidden');
    circles = circles+1;
    looper++;
}

  else if ((randint12 === 3)&&(hearts !== 2))  {
    $('.card12').addClass('cardheart-hidden');
    hearts=hearts+1;
    looper++;
}

  else if ((randint12 === 4)&&(moons !== 2))  {
    $('.card12').addClass('cardmoon-hidden');
    moons=moons+1;
    looper++;
}

  else if ((randint12 === 5)&&(happys !== 2))  {
    $('.card12').addClass('cardhappy-hidden');
    happys=happys+1;
    looper++;
}

  else if ((randint12 === 6)&&(xs !== 2))  {
    $('.card12').addClass('cardx-hidden');
    xs=xs+1;
    looper++;
}

  else if ((randint12 === 7)&&(cars !== 2))  {
    $('.card12').addClass('cardcar-hidden');
    cars = cars+1;
    looper++;
}

  else if ((randint12 === 8)&&(triangles !== 2))  {
    $('.card12').addClass('cardtriangle-hidden');
    triangles = triangles+1;
    looper++;
}

  else if ((randint12 === 9)&&(bams !== 2))  {
    $('.card12').addClass('cardbam-hidden');
    bams=bams+1;
    looper++;
}

  else if ((randint12 === 10)&&(unicorns !== 2))  {
    $('.card12').addClass('cardunicorn-hidden');
    unicorns=unicorns+1;
    looper++;
}
  else if ((randint12 === 11)&&(statues !== 2))  {
    $('.card12').addClass('cardstatue-hidden');
    statues=statues+1;
    looper++;
}

  else if ((randint12 === 12)&&(balloons !== 2))  {
    $('.card12').addClass('cardballoon-hidden');
    balloons=balloons+1;
    looper++;
}

  else if ((randint12 === 13)&&(flags !== 2))  {
    $('.card12').addClass('cardflag-hidden');
    flags=flags+1;
    looper++;
}

  else if ((randint12 === 14)&&(trees !== 2))  {
    $('.card12').addClass('cardtree-hidden');
    trees=trees+1;
    looper++;
}

  else {
      randint12 = Math.floor(Math.random() * 15);
}
} //card two
looper = 0;

while (looper === 0) {
  if ((randint13 === 0)&&(stars !== 2)) {
    $('.card13').addClass('cardstar-hidden');
    stars = stars +1;
    looper++;
}

  else if ((randint13 === 1)&&(squares !== 2))  {
    $('.card13').addClass('cardsquare-hidden');
    squares= squares+1; 
    looper++;
}

  else if ((randint13=== 2)&&(circles !== 2))  {
    $('.card13').addClass('cardcircle-hidden');
    circles = circles+1;
    looper++;
}

  else if ((randint13 === 3)&&(hearts !== 2))  {
    $('.card13').addClass('cardheart-hidden');
    hearts=hearts+1;
    looper++;
}

  else if ((randint13 === 4)&&(moons !== 2))  {
    $('.card13').addClass('cardmoon-hidden');
    moons=moons+1;
    looper++;
}

  else if ((randint13 === 5)&&(happys !== 2))  {
    $('.card13').addClass('cardhappy-hidden');
    happys=happys+1;
    looper++;
}

  else if ((randint13 === 6)&&(xs !== 2))  {
    $('.card13').addClass('cardx-hidden');
    xs=xs+1;
    looper++;
}

  else if ((randint13 === 7)&&(cars !== 2))  {
    $('.card13').addClass('cardcar-hidden');
    cars = cars+1;
    looper++;
}

  else if ((randint13 === 8)&&(triangles !== 2))  {
    $('.card13').addClass('cardtriangle-hidden');
    triangles = triangles+1;
    looper++;
}

  else if ((randint13 === 9)&&(bams !== 2))  {
    $('.card13').addClass('cardbam-hidden');
    bams=bams+1;
    looper++;
}

  else if ((randint13 === 10)&&(unicorns !== 2))  {
    $('.card13').addClass('cardunicorn-hidden');
    unicorns=unicorns+1;
    looper++;
}
  else if ((randint13 === 11)&&(statues !== 2))  {
    $('.card13').addClass('cardstatue-hidden');
    statues=statues+1;
    looper++;
}

  else if ((randint13 === 12)&&(balloons !== 2))  {
    $('.card13').addClass('cardballoon-hidden');
    balloons=balloons+1;
    looper++;
}

  else if ((randint13 === 13)&&(flags !== 2))  {
    $('.card13').addClass('cardflag-hidden');
    flags=flags+1;
    looper++;
}

  else if ((randint13 === 14)&&(trees !== 2))  {
    $('.card13').addClass('cardtree-hidden');
    trees=trees+1;
    looper++;
}

  else {
      randint13 = Math.floor(Math.random() * 15);
}
} //card two
looper = 0;

while (looper === 0) {
  if ((randint14 === 0)&&(stars !== 2)) {
    $('.card14').addClass('cardstar-hidden');
    stars = stars +1;
    looper++;
}

  else if ((randint14 === 1)&&(squares !== 2))  {
    $('.card14').addClass('cardsquare-hidden');
    squares= squares+1; 
    looper++;
}

  else if ((randint14=== 2)&&(circles !== 2))  {
    $('.card14').addClass('cardcircle-hidden');
    circles = circles+1;
    looper++;
}

  else if ((randint14 === 3)&&(hearts !== 2))  {
    $('.card14').addClass('cardheart-hidden');
    hearts=hearts+1;
    looper++;
}

  else if ((randint14 === 4)&&(moons !== 2))  {
    $('.card14').addClass('cardmoon-hidden');
    moons=moons+1;
    looper++;
}

  else if ((randint14 === 5)&&(happys !== 2))  {
    $('.card14').addClass('cardhappy-hidden');
    happys=happys+1;
    looper++;
}

  else if ((randint14 === 6)&&(xs !== 2))  {
    $('.card14').addClass('cardx-hidden');
    xs=xs+1;
    looper++;
}

  else if ((randint14 === 7)&&(cars !== 2))  {
    $('.card14').addClass('cardcar-hidden');
    cars = cars+1;
    looper++;
}

  else if ((randint14 === 8)&&(triangles !== 2))  {
    $('.card14').addClass('cardtriangle-hidden');
    triangles = triangles+1;
    looper++;
}

  else if ((randint14 === 9)&&(bams !== 2))  {
    $('.card14').addClass('cardbam-hidden');
    bams=bams+1;
    looper++;
}

  else if ((randint14 === 10)&&(unicorns !== 2))  {
    $('.card14').addClass('cardunicorn-hidden');
    unicorns=unicorns+1;
    looper++;
}
  else if ((randint14 === 11)&&(statues !== 2))  {
    $('.card14').addClass('cardstatue-hidden');
    statues=statues+1;
    looper++;
}

  else if ((randint14 === 12)&&(balloons !== 2))  {
    $('.card14').addClass('cardballoon-hidden');
    balloons=balloons+1;
    looper++;
}

  else if ((randint14 === 13)&&(flags !== 2))  {
    $('.card14').addClass('cardflag-hidden');
    flags=flags+1;
    looper++;
}

  else if ((randint14 === 14)&&(trees !== 2))  {
    $('.card14').addClass('cardtree-hidden');
    trees=trees+1;
    looper++;
}

  else {
      randint14 = Math.floor(Math.random() * 15);
}
} //card two
looper = 0;

while (looper === 0) {
  if ((randint15 === 0)&&(stars !== 2)) {
    $('.card15').addClass('cardstar-hidden');
    stars = stars +1;
    looper++;
}

  else if ((randint15 === 1)&&(squares !== 2))  {
    $('.card15').addClass('cardsquare-hidden');
    squares= squares+1; 
    looper++;
}

  else if ((randint15=== 2)&&(circles !== 2))  {
    $('.card15').addClass('cardcircle-hidden');
    circles = circles+1;
    looper++;
}

  else if ((randint15 === 3)&&(hearts !== 2))  {
    $('.card15').addClass('cardheart-hidden');
    hearts=hearts+1;
    looper++;
}

  else if ((randint15 === 4)&&(moons !== 2))  {
    $('.card15').addClass('cardmoon-hidden');
    moons=moons+1;
    looper++;
}

  else if ((randint15 === 5)&&(happys !== 2))  {
    $('.card15').addClass('cardhappy-hidden');
    happys=happys+1;
    looper++;
}

  else if ((randint15 === 6)&&(xs !== 2))  {
    $('.card15').addClass('cardx-hidden');
    xs=xs+1;
    looper++;
}

  else if ((randint15 === 7)&&(cars !== 2))  {
    $('.card15').addClass('cardcar-hidden');
    cars = cars+1;
    looper++;
}

  else if ((randint15 === 8)&&(triangles !== 2))  {
    $('.card15').addClass('cardtriangle-hidden');
    triangles = triangles+1;
    looper++;
}

  else if ((randint15 === 9)&&(bams !== 2))  {
    $('.card15').addClass('cardbam-hidden');
    bams=bams+1;
    looper++;
}

  else if ((randint15 === 10)&&(unicorns !== 2))  {
    $('.card15').addClass('cardunicorn-hidden');
    unicorns=unicorns+1;
    looper++;
}
  else if ((randint15 === 11)&&(statues !== 2))  {
    $('.card15').addClass('cardstatue-hidden');
    statues=statues+1;
    looper++;
}

  else if ((randint15 === 12)&&(balloons !== 2))  {
    $('.card15').addClass('cardballoon-hidden');
    balloons=balloons+1;
    looper++;
}

  else if ((randint15 === 13)&&(flags !== 2))  {
    $('.card15').addClass('cardflag-hidden');
    flags=flags+1;
    looper++;
}

  else if ((randint15 === 14)&&(trees !== 2))  {
    $('.card15').addClass('cardtree-hidden');
    trees=trees+1;
    looper++;
}

  else {
      randint15 = Math.floor(Math.random() * 15);
}
} //card two
looper = 0;

while (looper === 0) {
  if ((randint16 === 0)&&(stars !== 2)) {
    $('.card16').addClass('cardstar-hidden');
    stars = stars +1;
    looper++;
}

  else if ((randint16 === 1)&&(squares !== 2))  {
    $('.card16').addClass('cardsquare-hidden');
    squares= squares+1; 
    looper++;
}

  else if ((randint16=== 2)&&(circles !== 2))  {
    $('.card16').addClass('cardcircle-hidden');
    circles = circles+1;
    looper++;
}

  else if ((randint16 === 3)&&(hearts !== 2))  {
    $('.card16').addClass('cardheart-hidden');
    hearts=hearts+1;
    looper++;
}

  else if ((randint16 === 4)&&(moons !== 2))  {
    $('.card16').addClass('cardmoon-hidden');
    moons=moons+1;
    looper++;
}

  else if ((randint16 === 5)&&(happys !== 2))  {
    $('.card16').addClass('cardhappy-hidden');
    happys=happys+1;
    looper++;
}

  else if ((randint16 === 6)&&(xs !== 2))  {
    $('.card16').addClass('cardx-hidden');
    xs=xs+1;
    looper++;
}

  else if ((randint16 === 7)&&(cars !== 2))  {
    $('.card16').addClass('cardcar-hidden');
    cars = cars+1;
    looper++;
}

  else if ((randint16 === 8)&&(triangles !== 2))  {
    $('.card16').addClass('cardtriangle-hidden');
    triangles = triangles+1;
    looper++;
}

  else if ((randint16 === 9)&&(bams !== 2))  {
    $('.card16').addClass('cardbam-hidden');
    bams=bams+1;
    looper++;
}

  else if ((randint16 === 10)&&(unicorns !== 2))  {
    $('.card16').addClass('cardunicorn-hidden');
    unicorns=unicorns+1;
    looper++;
}
  else if ((randint16 === 11)&&(statues !== 2))  {
    $('.card16').addClass('cardstatue-hidden');
    statues=statues+1;
    looper++;
}

  else if ((randint16 === 12)&&(balloons !== 2))  {
    $('.card16').addClass('cardballoon-hidden');
    balloons=balloons+1;
    looper++;
}

  else if ((randint16 === 13)&&(flags !== 2))  {
    $('.card16').addClass('cardflag-hidden');
    flags=flags+1;
    looper++;
}

  else if ((randint16 === 14)&&(trees !== 2))  {
    $('.card16').addClass('cardtree-hidden');
    trees=trees+1;
    looper++;
}

  else {
      randint16 = Math.floor(Math.random() * 15);
}
} //card two
looper = 0;

while (looper === 0) {
  if ((randint17 === 0)&&(stars !== 2)) {
    $('.card17').addClass('cardstar-hidden');
    stars = stars +1;
    looper++;
}

  else if ((randint17 === 1)&&(squares !== 2))  {
    $('.card17').addClass('cardsquare-hidden');
    squares= squares+1; 
    looper++;
}

  else if ((randint17=== 2)&&(circles !== 2))  {
    $('.card17').addClass('cardcircle-hidden');
    circles = circles+1;
    looper++;
}

  else if ((randint17 === 3)&&(hearts !== 2))  {
    $('.card17').addClass('cardheart-hidden');
    hearts=hearts+1;
    looper++;
}

  else if ((randint17 === 4)&&(moons !== 2))  {
    $('.card17').addClass('cardmoon-hidden');
    moons=moons+1;
    looper++;
}

  else if ((randint17 === 5)&&(happys !== 2))  {
    $('.card17').addClass('cardhappy-hidden');
    happys=happys+1;
    looper++;
}

  else if ((randint17 === 6)&&(xs !== 2))  {
    $('.card17').addClass('cardx-hidden');
    xs=xs+1;
    looper++;
}

  else if ((randint17 === 7)&&(cars !== 2))  {
    $('.card17').addClass('cardcar-hidden');
    cars = cars+1;
    looper++;
}

  else if ((randint17 === 8)&&(triangles !== 2))  {
    $('.card17').addClass('cardtriangle-hidden');
    triangles = triangles+1;
    looper++;
}

  else if ((randint17 === 9)&&(bams !== 2))  {
    $('.card17').addClass('cardbam-hidden');
    bams=bams+1;
    looper++;
}

  else if ((randint17 === 10)&&(unicorns !== 2))  {
    $('.card17').addClass('cardunicorn-hidden');
    unicorns=unicorns+1;
    looper++;
}
  else if ((randint17 === 11)&&(statues !== 2))  {
    $('.card17').addClass('cardstatue-hidden');
    statues=statues+1;
    looper++;
}

  else if ((randint17 === 12)&&(balloons !== 2))  {
    $('.card17').addClass('cardballoon-hidden');
    balloons=balloons+1;
    looper++;
}

  else if ((randint17 === 13)&&(flags !== 2))  {
    $('.card17').addClass('cardflag-hidden');
    flags=flags+1;
    looper++;
}

  else if ((randint17 === 14)&&(trees !== 2))  {
    $('.card17').addClass('cardtree-hidden');
    trees=trees+1;
    looper++;
}

  else {
      randint17 = Math.floor(Math.random() * 15);
}
} //card two
looper = 0;

while (looper === 0) {
  if ((randint18 === 0)&&(stars !== 2)) {
    $('.card18').addClass('cardstar-hidden');
    stars = stars +1;
    looper++;
}

  else if ((randint18 === 1)&&(squares !== 2))  {
    $('.card18').addClass('cardsquare-hidden');
    squares= squares+1; 
    looper++;
}

  else if ((randint18=== 2)&&(circles !== 2))  {
    $('.card18').addClass('cardcircle-hidden');
    circles = circles+1;
    looper++;
}

  else if ((randint18 === 3)&&(hearts !== 2))  {
    $('.card18').addClass('cardheart-hidden');
    hearts=hearts+1;
    looper++;
}

  else if ((randint18 === 4)&&(moons !== 2))  {
    $('.card18').addClass('cardmoon-hidden');
    moons=moons+1;
    looper++;
}

  else if ((randint18 === 5)&&(happys !== 2))  {
    $('.card18').addClass('cardhappy-hidden');
    happys=happys+1;
    looper++;
}

  else if ((randint18 === 6)&&(xs !== 2))  {
    $('.card18').addClass('cardx-hidden');
    xs=xs+1;
    looper++;
}

  else if ((randint18 === 7)&&(cars !== 2))  {
    $('.card18').addClass('cardcar-hidden');
    cars = cars+1;
    looper++;
}

  else if ((randint18 === 8)&&(triangles !== 2))  {
    $('.card18').addClass('cardtriangle-hidden');
    triangles = triangles+1;
    looper++;
}

  else if ((randint18 === 9)&&(bams !== 2))  {
    $('.card18').addClass('cardbam-hidden');
    bams=bams+1;
    looper++;
}

  else if ((randint18 === 10)&&(unicorns !== 2))  {
    $('.card18').addClass('cardunicorn-hidden');
    unicorns=unicorns+1;
    looper++;
}
  else if ((randint18 === 11)&&(statues !== 2))  {
    $('.card18').addClass('cardstatue-hidden');
    statues=statues+1;
    looper++;
}

  else if ((randint18 === 12)&&(balloons !== 2))  {
    $('.card18').addClass('cardballoon-hidden');
    balloons=balloons+1;
    looper++;
}

  else if ((randint18 === 13)&&(flags !== 2))  {
    $('.card18').addClass('cardflag-hidden');
    flags=flags+1;
    looper++;
}

  else if ((randint18 === 14)&&(trees !== 2))  {
    $('.card18').addClass('cardtree-hidden');
    trees=trees+1;
    looper++;
}

  else {
      randint18 = Math.floor(Math.random() * 15);
}
} //card two
looper = 0;

while (looper === 0) {
  if ((randint19 === 0)&&(stars !== 2)) {
    $('.card19').addClass('cardstar-hidden');
    stars = stars +1;
    looper++;
}

  else if ((randint19 === 1)&&(squares !== 2))  {
    $('.card19').addClass('cardsquare-hidden');
    squares= squares+1; 
    looper++;
}

  else if ((randint19=== 2)&&(circles !== 2))  {
    $('.card19').addClass('cardcircle-hidden');
    circles = circles+1;
    looper++;
}

  else if ((randint19 === 3)&&(hearts !== 2))  {
    $('.card19').addClass('cardheart-hidden');
    hearts=hearts+1;
    looper++;
}

  else if ((randint19 === 4)&&(moons !== 2))  {
    $('.card19').addClass('cardmoon-hidden');
    moons=moons+1;
    looper++;
}

  else if ((randint19 === 5)&&(happys !== 2))  {
    $('.card19').addClass('cardhappy-hidden');
    happys=happys+1;
    looper++;
}

  else if ((randint19 === 6)&&(xs !== 2))  {
    $('.card19').addClass('cardx-hidden');
    xs=xs+1;
    looper++;
}

  else if ((randint19 === 7)&&(cars !== 2))  {
    $('.card19').addClass('cardcar-hidden');
    cars = cars+1;
    looper++;
}

  else if ((randint19 === 8)&&(triangles !== 2))  {
    $('.card19').addClass('cardtriangle-hidden');
    triangles = triangles+1;
    looper++;
}

  else if ((randint19 === 9)&&(bams !== 2))  {
    $('.card19').addClass('cardbam-hidden');
    bams=bams+1;
    looper++;
}

  else if ((randint19 === 10)&&(unicorns !== 2))  {
    $('.card19').addClass('cardunicorn-hidden');
    unicorns=unicorns+1;
    looper++;
}
  else if ((randint19 === 11)&&(statues !== 2))  {
    $('.card19').addClass('cardstatue-hidden');
    statues=statues+1;
    looper++;
}

  else if ((randint19 === 12)&&(balloons !== 2))  {
    $('.card19').addClass('cardballoon-hidden');
    balloons=balloons+1;
    looper++;
}

  else if ((randint19 === 13)&&(flags !== 2))  {
    $('.card19').addClass('cardflag-hidden');
    flags=flags+1;
    looper++;
}

  else if ((randint19 === 14)&&(trees !== 2))  {
    $('.card19').addClass('cardtree-hidden');
    trees=trees+1;
    looper++;
}

  else {
      randint19 = Math.floor(Math.random() * 15);
}
} //card two
looper = 0;

while (looper === 0) {
  if ((randint20 === 0)&&(stars !== 2)) {
    $('.card20').addClass('cardstar-hidden');
    stars = stars +1;
    looper++;
}

  else if ((randint20 === 1)&&(squares !== 2))  {
    $('.card20').addClass('cardsquare-hidden');
    squares= squares+1; 
    looper++;
}

  else if ((randint20=== 2)&&(circles !== 2))  {
    $('.card20').addClass('cardcircle-hidden');
    circles = circles+1;
    looper++;
}

  else if ((randint20 === 3)&&(hearts !== 2))  {
    $('.card20').addClass('cardheart-hidden');
    hearts=hearts+1;
    looper++;
}

  else if ((randint20 === 4)&&(moons !== 2))  {
    $('.card20').addClass('cardmoon-hidden');
    moons=moons+1;
    looper++;
}

  else if ((randint20 === 5)&&(happys !== 2))  {
    $('.card20').addClass('cardhappy-hidden');
    happys=happys+1;
    looper++;
}

  else if ((randint20 === 6)&&(xs !== 2))  {
    $('.card20').addClass('cardx-hidden');
    xs=xs+1;
    looper++;
}

  else if ((randint20 === 7)&&(cars !== 2))  {
    $('.card20').addClass('cardcar-hidden');
    cars = cars+1;
    looper++;
}

  else if ((randint20 === 8)&&(triangles !== 2))  {
    $('.card20').addClass('cardtriangle-hidden');
    triangles = triangles+1;
    looper++;
}

  else if ((randint20 === 9)&&(bams !== 2))  {
    $('.card20').addClass('cardbam-hidden');
    bams=bams+1;
    looper++;
}

  else if ((randint20 === 10)&&(unicorns !== 2))  {
    $('.card20').addClass('cardunicorn-hidden');
    unicorns=unicorns+1;
    looper++;
}
  else if ((randint20 === 11)&&(statues !== 2))  {
    $('.card20').addClass('cardstatue-hidden');
    statues=statues+1;
    looper++;
}

  else if ((randint20 === 12)&&(balloons !== 2))  {
    $('.card20').addClass('cardballoon-hidden');
    balloons=balloons+1;
    looper++;
}

  else if ((randint20 === 13)&&(flags !== 2))  {
    $('.card20').addClass('cardflag-hidden');
    flags=flags+1;
    looper++;
}

  else if ((randint20 === 14)&&(trees !== 2))  {
    $('.card20').addClass('cardtree-hidden');
    trees=trees+1;
    looper++;
}

  else {
      randint20 = Math.floor(Math.random() * 15);
}
} //card two
looper = 0;

while (looper === 0) {
  if ((randint21 === 0)&&(stars !== 2)) {
    $('.card21').addClass('cardstar-hidden');
    stars = stars +1;
    looper++;
}

  else if ((randint21 === 1)&&(squares !== 2))  {
    $('.card21').addClass('cardsquare-hidden');
    squares= squares+1; 
    looper++;
}

  else if ((randint21=== 2)&&(circles !== 2))  {
    $('.card21').addClass('cardcircle-hidden');
    circles = circles+1;
    looper++;
}

  else if ((randint21 === 3)&&(hearts !== 2))  {
    $('.card21').addClass('cardheart-hidden');
    hearts=hearts+1;
    looper++;
}

  else if ((randint21 === 4)&&(moons !== 2))  {
    $('.card21').addClass('cardmoon-hidden');
    moons=moons+1;
    looper++;
}

  else if ((randint21 === 5)&&(happys !== 2))  {
    $('.card21').addClass('cardhappy-hidden');
    happys=happys+1;
    looper++;
}

  else if ((randint21 === 6)&&(xs !== 2))  {
    $('.card21').addClass('cardx-hidden');
    xs=xs+1;
    looper++;
}

  else if ((randint21 === 7)&&(cars !== 2))  {
    $('.card21').addClass('cardcar-hidden');
    cars = cars+1;
    looper++;
}

  else if ((randint21 === 8)&&(triangles !== 2))  {
    $('.card21').addClass('cardtriangle-hidden');
    triangles = triangles+1;
    looper++;
}

  else if ((randint21 === 9)&&(bams !== 2))  {
    $('.card21').addClass('cardbam-hidden');
    bams=bams+1;
    looper++;
}

  else if ((randint21 === 10)&&(unicorns !== 2))  {
    $('.card21').addClass('cardunicorn-hidden');
    unicorns=unicorns+1;
    looper++;
}
  else if ((randint21 === 11)&&(statues !== 2))  {
    $('.card21').addClass('cardstatue-hidden');
    statues=statues+1;
    looper++;
}

  else if ((randint21 === 12)&&(balloons !== 2))  {
    $('.card21').addClass('cardballoon-hidden');
    balloons=balloons+1;
    looper++;
}

  else if ((randint21 === 13)&&(flags !== 2))  {
    $('.card21').addClass('cardflag-hidden');
    flags=flags+1;
    looper++;
}

  else if ((randint21 === 14)&&(trees !== 2))  {
    $('.card21').addClass('cardtree-hidden');
    trees=trees+1;
    looper++;
}

  else {
      randint21 = Math.floor(Math.random() * 15);
}
} //card two
looper = 0;

while (looper === 0) {
  if ((randint22 === 0)&&(stars !== 2)) {
    $('.card22').addClass('cardstar-hidden');
    stars = stars +1;
    looper++;
}

  else if ((randint22 === 1)&&(squares !== 2))  {
    $('.card22').addClass('cardsquare-hidden');
    squares= squares+1; 
    looper++;
}

  else if ((randint22=== 2)&&(circles !== 2))  {
    $('.card22').addClass('cardcircle-hidden');
    circles = circles+1;
    looper++;
}

  else if ((randint22 === 3)&&(hearts !== 2))  {
    $('.card22').addClass('cardheart-hidden');
    hearts=hearts+1;
    looper++;
}

  else if ((randint22 === 4)&&(moons !== 2))  {
    $('.card22').addClass('cardmoon-hidden');
    moons=moons+1;
    looper++;
}

  else if ((randint22 === 5)&&(happys !== 2))  {
    $('.card22').addClass('cardhappy-hidden');
    happys=happys+1;
    looper++;
}

  else if ((randint22 === 6)&&(xs !== 2))  {
    $('.card22').addClass('cardx-hidden');
    xs=xs+1;
    looper++;
}

  else if ((randint22 === 7)&&(cars !== 2))  {
    $('.card22').addClass('cardcar-hidden');
    cars = cars+1;
    looper++;
}

  else if ((randint22 === 8)&&(triangles !== 2))  {
    $('.card22').addClass('cardtriangle-hidden');
    triangles = triangles+1;
    looper++;
}

  else if ((randint22 === 9)&&(bams !== 2))  {
    $('.card22').addClass('cardbam-hidden');
    bams=bams+1;
    looper++;
}

  else if ((randint22 === 10)&&(unicorns !== 2))  {
    $('.card22').addClass('cardunicorn-hidden');
    unicorns=unicorns+1;
    looper++;
}
  else if ((randint22 === 11)&&(statues !== 2))  {
    $('.card22').addClass('cardstatue-hidden');
    statues=statues+1;
    looper++;
}

  else if ((randint22 === 12)&&(balloons !== 2))  {
    $('.card22').addClass('cardballoon-hidden');
    balloons=balloons+1;
    looper++;
}

  else if ((randint22 === 13)&&(flags !== 2))  {
    $('.card22').addClass('cardflag-hidden');
    flags=flags+1;
    looper++;
}

  else if ((randint22 === 14)&&(trees !== 2))  {
    $('.card22').addClass('cardtree-hidden');
    trees=trees+1;
    looper++;
}

  else {
      randint22 = Math.floor(Math.random() * 15);
}
} //card two
looper = 0;

while (looper === 0) {
  if ((randint23 === 0)&&(stars !== 2)) {
    $('.card23').addClass('cardstar-hidden');
    stars = stars +1;
    looper++;
}

  else if ((randint23 === 1)&&(squares !== 2))  {
    $('.card23').addClass('cardsquare-hidden');
    squares= squares+1; 
    looper++;
}

  else if ((randint23=== 2)&&(circles !== 2))  {
    $('.card23').addClass('cardcircle-hidden');
    circles = circles+1;
    looper++;
}

  else if ((randint23 === 3)&&(hearts !== 2))  {
    $('.card23').addClass('cardheart-hidden');
    hearts=hearts+1;
    looper++;
}

  else if ((randint23 === 4)&&(moons !== 2))  {
    $('.card23').addClass('cardmoon-hidden');
    moons=moons+1;
    looper++;
}

  else if ((randint23 === 5)&&(happys !== 2))  {
    $('.card23').addClass('cardhappy-hidden');
    happys=happys+1;
    looper++;
}

  else if ((randint23 === 6)&&(xs !== 2))  {
    $('.card23').addClass('cardx-hidden');
    xs=xs+1;
    looper++;
}

  else if ((randint23 === 7)&&(cars !== 2))  {
    $('.card23').addClass('cardcar-hidden');
    cars = cars+1;
    looper++;
}

  else if ((randint23 === 8)&&(triangles !== 2))  {
    $('.card23').addClass('cardtriangle-hidden');
    triangles = triangles+1;
    looper++;
}

  else if ((randint23 === 9)&&(bams !== 2))  {
    $('.card23').addClass('cardbam-hidden');
    bams=bams+1;
    looper++;
}

  else if ((randint23 === 10)&&(unicorns !== 2))  {
    $('.card23').addClass('cardunicorn-hidden');
    unicorns=unicorns+1;
    looper++;
}
  else if ((randint23 === 11)&&(statues !== 2))  {
    $('.card23').addClass('cardstatue-hidden');
    statues=statues+1;
    looper++;
}

  else if ((randint23 === 12)&&(balloons !== 2))  {
    $('.card23').addClass('cardballoon-hidden');
    balloons=balloons+1;
    looper++;
}

  else if ((randint23 === 13)&&(flags !== 2))  {
    $('.card23').addClass('cardflag-hidden');
    flags=flags+1;
    looper++;
}

  else if ((randint23 === 14)&&(trees !== 2))  {
    $('.card23').addClass('cardtree-hidden');
    trees=trees+1;
    looper++;
}

  else {
      randint23 = Math.floor(Math.random() * 15);
}
} //card two
looper = 0;

while (looper === 0) {
  if ((randint24 === 0)&&(stars !== 2)) {
    $('.card24').addClass('cardstar-hidden');
    stars = stars +1;
    looper++;
}

  else if ((randint24 === 1)&&(squares !== 2))  {
    $('.card24').addClass('cardsquare-hidden');
    squares= squares+1; 
    looper++;
}

  else if ((randint24=== 2)&&(circles !== 2))  {
    $('.card24').addClass('cardcircle-hidden');
    circles = circles+1;
    looper++;
}

  else if ((randint24 === 3)&&(hearts !== 2))  {
    $('.card24').addClass('cardheart-hidden');
    hearts=hearts+1;
    looper++;
}

  else if ((randint24 === 4)&&(moons !== 2))  {
    $('.card24').addClass('cardmoon-hidden');
    moons=moons+1;
    looper++;
}

  else if ((randint24 === 5)&&(happys !== 2))  {
    $('.card24').addClass('cardhappy-hidden');
    happys=happys+1;
    looper++;
}

  else if ((randint24 === 6)&&(xs !== 2))  {
    $('.card24').addClass('cardx-hidden');
    xs=xs+1;
    looper++;
}

  else if ((randint24 === 7)&&(cars !== 2))  {
    $('.card24').addClass('cardcar-hidden');
    cars = cars+1;
    looper++;
}

  else if ((randint24 === 8)&&(triangles !== 2))  {
    $('.card24').addClass('cardtriangle-hidden');
    triangles = triangles+1;
    looper++;
}

  else if ((randint24 === 9)&&(bams !== 2))  {
    $('.card24').addClass('cardbam-hidden');
    bams=bams+1;
    looper++;
}

  else if ((randint24 === 10)&&(unicorns !== 2))  {
    $('.card24').addClass('cardunicorn-hidden');
    unicorns=unicorns+1;
    looper++;
}
  else if ((randint24 === 11)&&(statues !== 2))  {
    $('.card24').addClass('cardstatue-hidden');
    statues=statues+1;
    looper++;
}

  else if ((randint24 === 12)&&(balloons !== 2))  {
    $('.card24').addClass('cardballoon-hidden');
    balloons=balloons+1;
    looper++;
}

  else if ((randint24 === 13)&&(flags !== 2))  {
    $('.card24').addClass('cardflag-hidden');
    flags=flags+1;
    looper++;
}

  else if ((randint24 === 14)&&(trees !== 2))  {
    $('.card24').addClass('cardtree-hidden');
    trees=trees+1;
    looper++;
}

  else {
      randint24 = Math.floor(Math.random() * 15);
}
} //card two
looper = 0;

while (looper === 0) {
  if ((randint25 === 0)&&(stars !== 2)) {
    $('.card25').addClass('cardstar-hidden');
    stars = stars +1;
    looper++;
}

  else if ((randint25 === 1)&&(squares !== 2))  {
    $('.card25').addClass('cardsquare-hidden');
    squares= squares+1; 
    looper++;
}

  else if ((randint25=== 2)&&(circles !== 2))  {
    $('.card25').addClass('cardcircle-hidden');
    circles = circles+1;
    looper++;
}

  else if ((randint25 === 3)&&(hearts !== 2))  {
    $('.card25').addClass('cardheart-hidden');
    hearts=hearts+1;
    looper++;
}

  else if ((randint25 === 4)&&(moons !== 2))  {
    $('.card25').addClass('cardmoon-hidden');
    moons=moons+1;
    looper++;
}

  else if ((randint25 === 5)&&(happys !== 2))  {
    $('.card25').addClass('cardhappy-hidden');
    happys=happys+1;
    looper++;
}

  else if ((randint25 === 6)&&(xs !== 2))  {
    $('.card25').addClass('cardx-hidden');
    xs=xs+1;
    looper++;
}

  else if ((randint25 === 7)&&(cars !== 2))  {
    $('.card25').addClass('cardcar-hidden');
    cars = cars+1;
    looper++;
}

  else if ((randint25 === 8)&&(triangles !== 2))  {
    $('.card25').addClass('cardtriangle-hidden');
    triangles = triangles+1;
    looper++;
}

  else if ((randint25 === 9)&&(bams !== 2))  {
    $('.card25').addClass('cardbam-hidden');
    bams=bams+1;
    looper++;
}

  else if ((randint25 === 10)&&(unicorns !== 2))  {
    $('.card25').addClass('cardunicorn-hidden');
    unicorns=unicorns+1;
    looper++;
}
  else if ((randint25 === 11)&&(statues !== 2))  {
    $('.card25').addClass('cardstatue-hidden');
    statues=statues+1;
    looper++;
}

  else if ((randint25 === 12)&&(balloons !== 2))  {
    $('.card25').addClass('cardballoon-hidden');
    balloons=balloons+1;
    looper++;
}

  else if ((randint25 === 13)&&(flags !== 2))  {
    $('.card25').addClass('cardflag-hidden');
    flags=flags+1;
    looper++;
}

  else if ((randint25 === 14)&&(trees !== 2))  {
    $('.card25').addClass('cardtree-hidden');
    trees=trees+1;
    looper++;
}

  else {
      randint25 = Math.floor(Math.random() * 15);
}
} //card two
looper = 0;

while (looper === 0) {
  if ((randint26 === 0)&&(stars !== 2)) {
    $('.card26').addClass('cardstar-hidden');
    stars = stars +1;
    looper++;
}

  else if ((randint26 === 1)&&(squares !== 2))  {
    $('.card26').addClass('cardsquare-hidden');
    squares= squares+1; 
    looper++;
}

  else if ((randint26=== 2)&&(circles !== 2))  {
    $('.card26').addClass('cardcircle-hidden');
    circles = circles+1;
    looper++;
}

  else if ((randint26 === 3)&&(hearts !== 2))  {
    $('.card26').addClass('cardheart-hidden');
    hearts=hearts+1;
    looper++;
}

  else if ((randint26 === 4)&&(moons !== 2))  {
    $('.card26').addClass('cardmoon-hidden');
    moons=moons+1;
    looper++;
}

  else if ((randint26 === 5)&&(happys !== 2))  {
    $('.card26').addClass('cardhappy-hidden');
    happys=happys+1;
    looper++;
}

  else if ((randint26 === 6)&&(xs !== 2))  {
    $('.card26').addClass('cardx-hidden');
    xs=xs+1;
    looper++;
}

  else if ((randint26 === 7)&&(cars !== 2))  {
    $('.card26').addClass('cardcar-hidden');
    cars = cars+1;
    looper++;
}

  else if ((randint26 === 8)&&(triangles !== 2))  {
    $('.card26').addClass('cardtriangle-hidden');
    triangles = triangles+1;
    looper++;
}

  else if ((randint26 === 9)&&(bams !== 2))  {
    $('.card26').addClass('cardbam-hidden');
    bams=bams+1;
    looper++;
}

  else if ((randint26 === 10)&&(unicorns !== 2))  {
    $('.card26').addClass('cardunicorn-hidden');
    unicorns=unicorns+1;
    looper++;
}
  else if ((randint26 === 11)&&(statues !== 2))  {
    $('.card26').addClass('cardstatue-hidden');
    statues=statues+1;
    looper++;
}

  else if ((randint26 === 12)&&(balloons !== 2))  {
    $('.card26').addClass('cardballoon-hidden');
    balloons=balloons+1;
    looper++;
}

  else if ((randint26 === 13)&&(flags !== 2))  {
    $('.card26').addClass('cardflag-hidden');
    flags=flags+1;
    looper++;
}

  else if ((randint26 === 14)&&(trees !== 2))  {
    $('.card26').addClass('cardtree-hidden');
    trees=trees+1;
    looper++;
}

  else {
      randint26 = Math.floor(Math.random() * 15);
}
} //card two
looper = 0;

while (looper === 0) {
  if ((randint27 === 0)&&(stars !== 2)) {
    $('.card27').addClass('cardstar-hidden');
    stars = stars +1;
    looper++;
}

  else if ((randint27 === 1)&&(squares !== 2))  {
    $('.card27').addClass('cardsquare-hidden');
    squares= squares+1; 
    looper++;
}

  else if ((randint27=== 2)&&(circles !== 2))  {
    $('.card27').addClass('cardcircle-hidden');
    circles = circles+1;
    looper++;
}

  else if ((randint27 === 3)&&(hearts !== 2))  {
    $('.card27').addClass('cardheart-hidden');
    hearts=hearts+1;
    looper++;
}

  else if ((randint27 === 4)&&(moons !== 2))  {
    $('.card27').addClass('cardmoon-hidden');
    moons=moons+1;
    looper++;
}

  else if ((randint27 === 5)&&(happys !== 2))  {
    $('.card27').addClass('cardhappy-hidden');
    happys=happys+1;
    looper++;
}

  else if ((randint27 === 6)&&(xs !== 2))  {
    $('.card27').addClass('cardx-hidden');
    xs=xs+1;
    looper++;
}

  else if ((randint27 === 7)&&(cars !== 2))  {
    $('.card27').addClass('cardcar-hidden');
    cars = cars+1;
    looper++;
}

  else if ((randint27 === 8)&&(triangles !== 2))  {
    $('.card27').addClass('cardtriangle-hidden');
    triangles = triangles+1;
    looper++;
}

  else if ((randint27 === 9)&&(bams !== 2))  {
    $('.card27').addClass('cardbam-hidden');
    bams=bams+1;
    looper++;
}

  else if ((randint27 === 10)&&(unicorns !== 2))  {
    $('.card27').addClass('cardunicorn-hidden');
    unicorns=unicorns+1;
    looper++;
}
  else if ((randint27 === 11)&&(statues !== 2))  {
    $('.card27').addClass('cardstatue-hidden');
    statues=statues+1;
    looper++;
}

  else if ((randint27 === 12)&&(balloons !== 2))  {
    $('.card27').addClass('cardballoon-hidden');
    balloons=balloons+1;
    looper++;
}

  else if ((randint27 === 13)&&(flags !== 2))  {
    $('.card27').addClass('cardflag-hidden');
    flags=flags+1;
    looper++;
}

  else if ((randint27 === 14)&&(trees !== 2))  {
    $('.card27').addClass('cardtree-hidden');
    trees=trees+1;
    looper++;
}

  else {
      randint27 = Math.floor(Math.random() * 15);
}
} //card two
looper = 0;

while (looper === 0) {
  if ((randint28 === 0)&&(stars !== 2)) {
    $('.card28').addClass('cardstar-hidden');
    stars = stars +1;
    looper++;
}

  else if ((randint28 === 1)&&(squares !== 2))  {
    $('.card28').addClass('cardsquare-hidden');
    squares= squares+1; 
    looper++;
}

  else if ((randint28=== 2)&&(circles !== 2))  {
    $('.card28').addClass('cardcircle-hidden');
    circles = circles+1;
    looper++;
}

  else if ((randint28 === 3)&&(hearts !== 2))  {
    $('.card28').addClass('cardheart-hidden');
    hearts=hearts+1;
    looper++;
}

  else if ((randint28 === 4)&&(moons !== 2))  {
    $('.card28').addClass('cardmoon-hidden');
    moons=moons+1;
    looper++;
}

  else if ((randint28 === 5)&&(happys !== 2))  {
    $('.card28').addClass('cardhappy-hidden');
    happys=happys+1;
    looper++;
}

  else if ((randint28 === 6)&&(xs !== 2))  {
    $('.card28').addClass('cardx-hidden');
    xs=xs+1;
    looper++;
}

  else if ((randint28 === 7)&&(cars !== 2))  {
    $('.card28').addClass('cardcar-hidden');
    cars = cars+1;
    looper++;
}

  else if ((randint28 === 8)&&(triangles !== 2))  {
    $('.card28').addClass('cardtriangle-hidden');
    triangles = triangles+1;
    looper++;
}

  else if ((randint28 === 9)&&(bams !== 2))  {
    $('.card28').addClass('cardbam-hidden');
    bams=bams+1;
    looper++;
}

  else if ((randint28 === 10)&&(unicorns !== 2))  {
    $('.card28').addClass('cardunicorn-hidden');
    unicorns=unicorns+1;
    looper++;
}
  else if ((randint28 === 11)&&(statues !== 2))  {
    $('.card28').addClass('cardstatue-hidden');
    statues=statues+1;
    looper++;
}

  else if ((randint28 === 12)&&(balloons !== 2))  {
    $('.card28').addClass('cardballoon-hidden');
    balloons=balloons+1;
    looper++;
}

  else if ((randint28 === 13)&&(flags !== 2))  {
    $('.card28').addClass('cardflag-hidden');
    flags=flags+1;
    looper++;
}

  else if ((randint28 === 14)&&(trees !== 2))  {
    $('.card28').addClass('cardtree-hidden');
    trees=trees+1;
    looper++;
}

  else {
      randint28 = Math.floor(Math.random() * 15);
}
} //card two
looper = 0;

while (looper === 0) {
  if ((randint29 === 0)&&(stars !== 2)) {
    $('.card29').addClass('cardstar-hidden');
    stars = stars +1;
    looper++;
}

  else if ((randint29 === 1)&&(squares !== 2))  {
    $('.card29').addClass('cardsquare-hidden');
    squares= squares+1; 
    looper++;
}

  else if ((randint29=== 2)&&(circles !== 2))  {
    $('.card29').addClass('cardcircle-hidden');
    circles = circles+1;
    looper++;
}

  else if ((randint29 === 3)&&(hearts !== 2))  {
    $('.card29').addClass('cardheart-hidden');
    hearts=hearts+1;
    looper++;
}

  else if ((randint29 === 4)&&(moons !== 2))  {
    $('.card29').addClass('cardmoon-hidden');
    moons=moons+1;
    looper++;
}

  else if ((randint29 === 5)&&(happys !== 2))  {
    $('.card29').addClass('cardhappy-hidden');
    happys=happys+1;
    looper++;
}

  else if ((randint29 === 6)&&(xs !== 2))  {
    $('.card29').addClass('cardx-hidden');
    xs=xs+1;
    looper++;
}

  else if ((randint29 === 7)&&(cars !== 2))  {
    $('.card29').addClass('cardcar-hidden');
    cars = cars+1;
    looper++;
}

  else if ((randint29 === 8)&&(triangles !== 2))  {
    $('.card29').addClass('cardtriangle-hidden');
    triangles = triangles+1;
    looper++;
}

  else if ((randint29 === 9)&&(bams !== 2))  {
    $('.card29').addClass('cardbam-hidden');
    bams=bams+1;
    looper++;
}

  else if ((randint29 === 10)&&(unicorns !== 2))  {
    $('.card29').addClass('cardunicorn-hidden');
    unicorns=unicorns+1;
    looper++;
}
  else if ((randint29 === 11)&&(statues !== 2))  {
    $('.card29').addClass('cardstatue-hidden');
    statues=statues+1;
    looper++;
}

  else if ((randint29 === 12)&&(balloons !== 2))  {
    $('.card29').addClass('cardballoon-hidden');
    balloons=balloons+1;
    looper++;
}

  else if ((randint29 === 13)&&(flags !== 2))  {
    $('.card29').addClass('cardflag-hidden');
    flags=flags+1;
    looper++;
}

  else if ((randint29 === 14)&&(trees !== 2))  {
    $('.card29').addClass('cardtree-hidden');
    trees=trees+1;
    looper++;
}

  else {
      randint29 = Math.floor(Math.random() * 15);
}
} //card two
looper = 0;

while (looper === 0) {
  if ((randint30 === 0)&&(stars !== 2)) {
    $('.card30').addClass('cardstar-hidden');
    stars = stars +1;
    looper++;
}

  else if ((randint30 === 1)&&(squares !== 2))  {
    $('.card30').addClass('cardsquare-hidden');
    squares= squares+1; 
    looper++;
}

  else if ((randint30=== 2)&&(circles !== 2))  {
    $('.card30').addClass('cardcircle-hidden');
    circles = circles+1;
    looper++;
}

  else if ((randint30 === 3)&&(hearts !== 2))  {
    $('.card30').addClass('cardheart-hidden');
    hearts=hearts+1;
    looper++;
}

  else if ((randint30 === 4)&&(moons !== 2))  {
    $('.card30').addClass('cardmoon-hidden');
    moons=moons+1;
    looper++;
}

  else if ((randint30 === 5)&&(happys !== 2))  {
    $('.card30').addClass('cardhappy-hidden');
    happys=happys+1;
    looper++;
}

  else if ((randint30 === 6)&&(xs !== 2))  {
    $('.card30').addClass('cardx-hidden');
    xs=xs+1;
    looper++;
}

  else if ((randint30 === 7)&&(cars !== 2))  {
    $('.card30').addClass('cardcar-hidden');
    cars = cars+1;
    looper++;
}

  else if ((randint30 === 8)&&(triangles !== 2))  {
    $('.card30').addClass('cardtriangle-hidden');
    triangles = triangles+1;
    looper++;
}

  else if ((randint30 === 9)&&(bams !== 2))  {
    $('.card30').addClass('cardbam-hidden');
    bams=bams+1;
    looper++;
}

  else if ((randint30 === 10)&&(unicorns !== 2))  {
    $('.card30').addClass('cardunicorn-hidden');
    unicorns=unicorns+1;
    looper++;
}
  else if ((randint30 === 11)&&(statues !== 2))  {
    $('.card30').addClass('cardstatue-hidden');
    statues=statues+1;
    looper++;
}

  else if ((randint30 === 12)&&(balloons !== 2))  {
    $('.card30').addClass('cardballoon-hidden');
    balloons=balloons+1;
    looper++;
}

  else if ((randint30 === 13)&&(flags !== 2))  {
    $('.card30').addClass('cardflag-hidden');
    flags=flags+1;
    looper++;
}

  else if ((randint30 === 14)&&(trees !== 2))  {
    $('.card30').addClass('cardtree-hidden');
    trees=trees+1;
    looper++;
}

  else {
      randint30 = Math.floor(Math.random() * 15);
}
} //card two
looper = 0;

}
// gets random cards. This chages regulat cards from their .card class to a card___-hidden class. Then the classes can be "flipped" by changing their class to the card____.

function reset() {
star = 0;
square = 0;
circle = 0;
heart = 0;
moon = 0;
happy = 0;
x = 0; 
car = 0;
triangle = 0;
bam = 0;
unicorn = 0;
statue = 0;
balloon = 0;
flag = 0;
tree = 0;
counter=0;
} // reset is called in unFlipCards

function unFlipCards() {
    $('.cardstar').removeClass('cardstar').addClass('cardstar-hidden');
    $('.cardsquare').removeClass('cardsquare').addClass('cardsquare-hidden');
    $('.cardcircle').removeClass('cardcircle').addClass('cardcircle-hidden');
    $('.cardheart').removeClass('cardheart').addClass('cardheart-hidden');
    $('.cardmoon').removeClass('cardmoon').addClass('cardmoon-hidden');
    $('.cardhappy').removeClass('cardhappy').addClass('cardhappy-hidden');
    $('.cardx').removeClass('cardx').addClass('cardx-hidden');
    $('.cardcar').removeClass('cardcar').addClass('cardcar-hidden');
    $('.cardtriangle').removeClass('cardtriangle').addClass('cardtriangle-hidden');
    $('.cardbam').removeClass('cardbam').addClass('cardbam-hidden');
    $('.cardunicorn').removeClass('cardunicorn').addClass('cardunicorn-hidden');
    $('.cardflag').removeClass('cardflag').addClass('cardflag-hidden');
    $('.cardtree').removeClass('cardtree').addClass('cardtree-hidden');
    $('.cardstatue').removeClass('cardstatue').addClass('cardstatue-hidden');
    $('.cardballoon').removeClass('cardballoon').addClass('cardballoon-hidden');
    reset(); 
    turnCount++;
    if (turnCount%2 === 0) {
            $('.turn').text('It is Player 1\'s Turn');
        }
        
    else if (turnCount%2 !== 0) {
            $('.turn').text('It is Player 2\'s Turn');
        }
} 
// unFlip is called in flip. It resets all the cards to their hidden class. It also resets them (using reset()) and changes the turn display.

function flipCard() {

$('.cardstar-hidden').on('click', function() {
    $(this).removeClass('cardstar-hidden').addClass('cardstar'); 
    counter++;
    star++;
    if (counter > 2) {
        unFlipCards();
        counter=0;
        alert('please do not cheat');
    }
    else if (counter === 2) {
        if (star === 2) {
            turnCount=turnCount+2; 
            matches++;
            counter = 0;
            $('.cardstar').removeClass('cardstar').addClass('cardstar-matched');
            $('.cardstar-hidden').removeClass('cardstar-hidden').addClass('cardstar-matched');
            
            if (turnCount%2 === 0) {
                player1score++;
               $('#Player-1').text('Player 1\'s Score: ' + player1score);
            }
        
            else if (turnCount%2 !== 0) {
                player2score++; 
               $('#Player-2').text('Player 2\'s Score: ' + player2score);
            }
            
            if (matches === end) {
                if (player1score > player2score) {
                    setTimeout(alert('player 1 has won the game'), 500);
                }
                else if (player2score > player1score) {
                    setTimeout(alert('player 2 has won the game'), 500);
                }
            }
        }
        
        else {
            setTimeout(function() {unFlipCards()}, 500);
            counter = 0;
        }
        
        if (turnCount%2 === 0) {
            $('.turn').text('It is Player 1\'s Turn');
        }
        
        else if (turnCount%2 !== 0) {
            $('.turn').text('It is Player 2\'s Turn');
        }
    }
    });
    
$('.cardsquare-hidden').on('click', function() {
    $(this).removeClass('cardsquare-hidden').addClass('cardsquare');
    counter++;
    square++;
    if (counter > 2) {
        unFlipCards();
        counter=0;
        alert('please do not cheat');
    }
    else if (counter === 2) {
        if (square === 2) {
            turnCount=turnCount+2;
            matches++;
            counter = 0;
            $('.cardsquare').removeClass('cardsquare').addClass('cardsquare-matched');
            $('.cardsquare-hidden').removeClass('cardsquare-hidden').addClass('cardsquare-matched');
            
            if (turnCount%2 === 0) {
                player1score++;
               $('#Player-1').text('Player 1\'s Score: ' + player1score);
            }
        
            else if (turnCount%2 !== 0) {
                player2score++; 
               $('#Player-2').text('Player 2\'s Score: ' + player2score);
            }
            
            if (matches === end) {
                if (player1score > player2score) {
                    setTimeout(alert('player 1 has won the game'), 500);
                }
                else if (player2score > player1score) {
                    setTimeout(alert('player 2 has won the game'), 500);
                }
            }
        }
        
        else {
            setTimeout(function() {unFlipCards()}, 500);
            counter = 0;
        }
        
        if (turnCount%2 === 0) {
            $('.turn').text('It is Player 1\'s Turn');
        }
        
        else if (turnCount%2 !== 0) {
            $('.turn').text('It is Player 2\'s Turn');
        }
    }
    }); 
    
$('.cardcircle-hidden').on('click', function() {
    $(this).removeClass('cardcircle-hidden').addClass('cardcircle');
    counter++;
    circle++;
    if (counter > 2) {
        unFlipCards();
        counter=0;
        alert('please do not cheat');
    }
    else if (counter === 2) {
        if (circle === 2) {
            turnCount=turnCount+2;
            matches++;
            counter = 0;
            $('.cardcircle').removeClass('cardcircle').addClass('cardcircle-matched');
            $('.cardcircle-hidden').removeClass('cardcircle-hidden').addClass('cardcircle-matched');
            
            if (turnCount%2 === 0) {
                player1score++;
               $('#Player-1').text('Player 1\'s Score: ' + player1score);
            }
        
            else if (turnCount%2 !== 0) {
                player2score++; 
               $('#Player-2').text('Player 2\'s Score: ' + player2score);
            }
            
            if (matches === end) {
                if (player1score > player2score) {
                    setTimeout(alert('player 1 has won the game'), 500);
                }
                else if (player2score > player1score) {
                    setTimeout(alert('player 2 has won the game'), 500);
                }
            }
        }
        
        else {
            setTimeout(function() {unFlipCards()}, 500);
            counter = 0;
        }
        
        if (turnCount%2 === 0) {
            $('.turn').text('It is Player 1\'s Turn');
        }
        
        else if (turnCount%2 !== 0) {
            $('.turn').text('It is Player 2\'s Turn');
        }
    }
    }); 
    
$('.cardheart-hidden').on('click', function() {
    $(this).removeClass('cardheart-hidden').addClass('cardheart');
    counter++;
    heart++;
    if (counter > 2) {
        unFlipCards();
        counter=0;
        alert('please do not cheat');
    }
    else if (counter === 2) {
        if (heart === 2) {
            turnCount=turnCount+2;
            matches++;
            counter = 0;
            $('.cardheart').removeClass('cardheart').addClass('cardheart-matched');
            $('.cardheart-hidden').removeClass('cardheart-hidden').addClass('cardheart-matched');
            
            if (turnCount%2 === 0) {
                player1score++;
               $('#Player-1').text('Player 1\'s Score: ' + player1score);
            }
        
            else if (turnCount%2 !== 0) {
                player2score++; 
               $('#Player-2').text('Player 2\'s Score: ' + player2score);
            }
            
            if (matches === end) {
                if (player1score > player2score) {
                    setTimeout(alert('player 1 has won the game'), 500);
                }
                else if (player2score > player1score) {
                    setTimeout(alert('player 2 has won the game'), 500);
                }
            }
        }
        
        else {
            setTimeout(function() {unFlipCards()}, 500);
            counter = 0;
        }
        
        if (turnCount%2 === 0) {
            $('.turn').text('It is Player 1\'s Turn');
        }
        
        else if (turnCount%2 !== 0) {
            $('.turn').text('It is Player 2\'s Turn');
        }
    }
    }); 
    
$('.cardmoon-hidden').on('click', function() {
    $(this).removeClass('cardmoon-hidden').addClass('cardmoon');
    counter++;
    moon++;
    if (counter > 2) {
        unFlipCards();
        counter=0;
        alert('please do not cheat');
    }
    else if (counter === 2) {
        if (moon === 2) {
            turnCount=turnCount+2;
            matches++;
            counter = 0;
            $('.cardmoon').removeClass('cardmoon').addClass('cardmoon-matched');
            $('.cardmoon-hidden').removeClass('cardmoon-hidden').addClass('cardmoon-matched');
            
            if (turnCount%2 === 0) {
                player1score++;
               $('#Player-1').text('Player 1\'s Score: ' + player1score);
            }
        
            else if (turnCount%2 !== 0) {
                player2score++; 
               $('#Player-2').text('Player 2\'s Score: ' + player2score);
            }
            
            if (matches === end) {
                if (player1score > player2score) {
                    setTimeout(alert('player 1 has won the game'), 500);
                }
                else if (player2score > player1score) {
                    setTimeout(alert('player 2 has won the game'), 500);
                }
            }
        }
        
        else {
            setTimeout(function() {unFlipCards()}, 500);
            counter = 0;
        }
        
        if (turnCount%2 === 0) {
            $('.turn').text('It is Player 1\'s Turn');
        }
        
        else if (turnCount%2 !== 0) {
            $('.turn').text('It is Player 2\'s Turn');
        }
    }
    }); 
    
$('.cardhappy-hidden').on('click', function() {
    $(this).removeClass('cardhappy-hidden').addClass('cardhappy');
    counter++;
    happy++;
    if (counter > 2) {
        unFlipCards();
        counter=0;
        alert('please do not cheat');
    }
    else if (counter === 2) {
        if (happy === 2) {
            turnCount=turnCount+2;
            matches++;
            counter = 0;
            $('.cardhappy').removeClass('cardhappy').addClass('cardhappy-matched');
            $('.cardhappy-hidden').removeClass('cardhappy-hidden').addClass('cardhappy-matched');
            
            if (turnCount%2 === 0) {
                player1score++;
               $('#Player-1').text('Player 1\'s Score: ' + player1score);
            }
        
            else if (turnCount%2 !== 0) {
                player2score++; 
               $('#Player-2').text('Player 2\'s Score: ' + player2score);
            }
            
            if (matches === end) {
                if (player1score > player2score) {
                    setTimeout(alert('player 1 has won the game'), 500);
                }
                else if (player2score > player1score) {
                    setTimeout(alert('player 2 has won the game'), 500);
                }
            }
        }
        
        else {
            setTimeout(function() {unFlipCards()}, 500);
            counter = 0;
        }
        
        if (turnCount%2 === 0) {
            $('.turn').text('It is Player 1\'s Turn');
        }
        
        else if (turnCount%2 !== 0) {
            $('.turn').text('It is Player 2\'s Turn');
        }
    }
    });
    
$('.cardx-hidden').on('click', function() {
    $(this).removeClass('cardx-hidden').addClass('cardx');
    counter++;
    x++;
    if (counter > 2) {
        unFlipCards();
        counter=0;
        alert('please do not cheat');
    }
    else if (counter === 2) {
        if (x === 2) {
            turnCount=turnCount+2;
            matches++;
            counter = 0;
            $('.cardx').removeClass('cardx').addClass('cardx-matched');
            $('.cardx-hidden').removeClass('cardx-hidden').addClass('cardx-matched');
            
            if (turnCount%2 === 0) {
                player1score++;
               $('#Player-1').text('Player 1\'s Score: ' + player1score);
            }
        
            else if (turnCount%2 !== 0) {
                player2score++; 
               $('#Player-2').text('Player 2\'s Score: ' + player2score);
            }
            
            if (matches === end) {
                if (player1score > player2score) {
                    setTimeout(alert('player 1 has won the game'), 500);
                }
                else if (player2score > player1score) {
                    setTimeout(alert('player 2 has won the game'), 500);
                }
            }
        }
        
        else {
            setTimeout(function() {unFlipCards()}, 500);
            counter = 0;
        }
        
        if (turnCount%2 === 0) {
            $('.turn').text('It is Player 1\'s Turn');
        }
        
        else if (turnCount%2 !== 0) {
            $('.turn').text('It is Player 2\'s Turn');
        }
    }
    });

$('.cardcar-hidden').on('click', function() {
    $(this).removeClass('cardcar-hidden').addClass('cardcar'); 
    counter++;
    car++;
    if (counter > 2) {
        unFlipCards();
        counter=0;
        alert('please do not cheat');
    }
    else if (counter === 2) {
        if (car === 2) {
            turnCount=turnCount+2;
            matches++;
            counter = 0;
            $('.cardcar').removeClass('cardcar').addClass('cardcar-matched');
            $('.cardcar-hidden').removeClass('cardcar-hidden').addClass('cardcar-matched');
            
            if (turnCount%2 === 0) {
                player1score++;
               $('#Player-1').text('Player 1\'s Score: ' + player1score);
            }
        
            else if (turnCount%2 !== 0) {
                player2score++; 
               $('#Player-2').text('Player 2\'s Score: ' + player2score);
            }
            
            if (matches === end) {
                if (player1score > player2score) {
                    setTimeout(alert('player 1 has won the game'), 500);
                }
                else if (player2score > player1score) {
                    setTimeout(alert('player 2 has won the game'), 500);
                }
            }
        }
        
        else {
            setTimeout(function() {unFlipCards()}, 500);
            counter = 0;
        }
        
        if (turnCount%2 === 0) {
            $('.turn').text('It is Player 1\'s Turn');
        }
        
        else if (turnCount%2 !== 0) {
            $('.turn').text('It is Player 2\'s Turn');
        }
    }
    });
    
$('.cardtriangle-hidden').on('click', function() {
    $(this).removeClass('cardtriangle-hidden').addClass('cardtriangle');
    counter++;
    triangle++;
    if (counter > 2) {
        unFlipCards();
        counter=0;
        alert('please do not cheat'); 
    }
    else if (counter === 2) {
        if (triangle === 2) {
            turnCount=turnCount+2;
            matches++;
            counter = 0;
            $('.cardtriangle').removeClass('cardtriangle').addClass('cardtriangle-matched');
            $('.cardtriangle-hidden').removeClass('cardtriangle-hidden').addClass('cardtriangle-matched');
            
            if (turnCount%2 === 0) {
                player1score++;
               $('#Player-1').text('Player 1\'s Score: ' + player1score);
            }
        
            else if (turnCount%2 !== 0) {
                player2score++; 
               $('#Player-2').text('Player 2\'s Score: ' + player2score);
            }
            
            if (matches === end) {
                if (player1score > player2score) {
                    setTimeout(alert('player 1 has won the game'), 500);
                }
                else if (player2score > player1score) {
                    setTimeout(alert('player 2 has won the game'), 500);
                }
            }
        }
        
        else {
            setTimeout(function() {unFlipCards()}, 500);
            counter = 0;
        }
        
        if (turnCount%2 === 0) {
            $('.turn').text('It is Player 1\'s Turn');
        }
        
        else if (turnCount%2 !== 0) {
            $('.turn').text('It is Player 2\'s Turn');
        }
    }
    });
    
$('.cardbam-hidden').on('click', function() {
    $(this).removeClass('cardbam-hidden').addClass('cardbam'); 
    counter++;
    bam++;
    if (counter > 2) {
        unFlipCards();
        counter=0;
        alert('please do not cheat');
    }
    else if (counter === 2) {
        if (bam === 2) {
            turnCount=turnCount+2;
            matches++;
            counter = 0;
            $('.cardbam').removeClass('cardbam').addClass('cardbam-matched');
            $('.cardbam-hidden').removeClass('cardbam-hidden').addClass('cardbam-matched');
            
            if (turnCount%2 === 0) {
                player1score++;
               $('#Player-1').text('Player 1\'s Score: ' + player1score);
            }
        
            else if (turnCount%2 !== 0) {
                player2score++; 
               $('#Player-2').text('Player 2\'s Score: ' + player2score);
            }
            
            if (matches === end) {
                if (player1score > player2score) {
                    setTimeout(alert('player 1 has won the game'), 500);
                }
                else if (player2score > player1score) {
                    setTimeout(alert('player 2 has won the game'), 500);
                }
            }
        }
        
        else {
            setTimeout(function() {unFlipCards()}, 500);
            counter = 0;
        }
        
        if (turnCount%2 === 0) {
            $('.turn').text('It is Player 1\'s Turn');
        }
        
        else if (turnCount%2 !== 0) {
            $('.turn').text('It is Player 2\'s Turn');
        }
    }
    });
    
$('.cardunicorn-hidden').on('click', function() {
    $(this).removeClass('cardunicorn-hidden').addClass('cardunicorn'); 
    counter++;
    unicorn++;
    if (counter > 2) {
        unFlipCards();
        counter=0;
        alert('please do not cheat');
    }
    else if (counter === 2) {
        if (unicorn === 2) {
            turnCount=turnCount+2;
            matches++;
            counter = 0;
            $('.cardunicorn').removeClass('cardunicorn').addClass('cardunicorn-matched');
            $('.cardunicorn-hidden').removeClass('cardunicorn-hidden').addClass('cardunicorn-matched');
            
            if (turnCount%2 === 0) {
                player1score++;
               $('#Player-1').text('Player 1\'s Score: ' + player1score);
            }
        
            else if (turnCount%2 !== 0) {
                player2score++; 
               $('#Player-2').text('Player 2\'s Score: ' + player2score);
            }
            
            if (matches === end) {
                if (player1score > player2score) {
                    setTimeout(alert('player 1 has won the game'), 500);
                }
                else if (player2score > player1score) {
                    setTimeout(alert('player 2 has won the game'), 500);
                }
            }
        }
        
        else {
            setTimeout(function() {unFlipCards()}, 500);
            counter = 0;
        }
        
        if (turnCount%2 === 0) {
            $('.turn').text('It is Player 1\'s Turn');
        }
        
        else if (turnCount%2 !== 0) {
            $('.turn').text('It is Player 2\'s Turn');
        }
    }
    });
    
$('.cardstatue-hidden').on('click', function() {
    $(this).removeClass('cardstatue-hidden').addClass('cardstatue'); 
    counter++;
    statue++;
    if (counter > 2) {
        unFlipCards();
        counter=0;
        alert('please do not cheat');
    }
    else if (counter === 2) {
        if (statue === 2) {
            turnCount=turnCount+2;
            matches++;
            counter = 0;
            $('.cardstatue').removeClass('cardstatue').addClass('cardstatue-matched');
            $('.cardstatue-hidden').removeClass('cardstatue-hidden').addClass('cardstatue-matched');
            
            if (turnCount%2 === 0) {
                player1score++;
               $('#Player-1').text('Player 1\'s Score: ' + player1score);
            }
        
            else if (turnCount%2 !== 0) {
                player2score++; 
               $('#Player-2').text('Player 2\'s Score: ' + player2score);
            }
            
            if (matches === end) {
                if (player1score > player2score) {
                    setTimeout(alert('player 1 has won the game'), 500);
                }
                else if (player2score > player1score) {
                    setTimeout(alert('player 2 has won the game'), 500);
                }
            }
        }
        
        else {
            setTimeout(function() {unFlipCards()}, 500);
            counter = 0;
        }
        
        if (turnCount%2 === 0) {
            $('.turn').text('It is Player 1\'s Turn');
        }
        
        else if (turnCount%2 !== 0) {
            $('.turn').text('It is Player 2\'s Turn');
        }
    }
    });

$('.cardballoon-hidden').on('click', function() {
    $(this).removeClass('cardballoon-hidden').addClass('cardballoon'); 
    counter++;
    balloon++;
    if (counter > 2) {
        unFlipCards();
        counter=0;
        alert('please do not cheat');
    }
    else if (counter === 2) {
        if (balloon === 2) {
            turnCount=turnCount+2;
            matches++;
            counter = 0;
            $('.cardballoon').removeClass('cardballoon').addClass('cardballoon-matched');
            $('.cardballoon-hidden').removeClass('cardballoon-hidden').addClass('cardballoon-matched');
            
            if (turnCount%2 === 0) {
                player1score++;
               $('#Player-1').text('Player 1\'s Score: ' + player1score);
            }
        
            else if (turnCount%2 !== 0) {
                player2score++; 
               $('#Player-2').text('Player 2\'s Score: ' + player2score);
            }
            
            if (matches === end) {
                if (player1score > player2score) {
                    setTimeout(alert('player 1 has won the game'), 500);
                }
                else if (player2score > player1score) {
                    setTimeout(alert('player 2 has won the game'), 500);
                }
            }
        }
        
        else {
            setTimeout(function() {unFlipCards()}, 500);
            counter = 0;
        }
        
        if (turnCount%2 === 0) {
            $('.turn').text('It is Player 1\'s Turn');
        }
        
        else if (turnCount%2 !== 0) {
            $('.turn').text('It is Player 2\'s Turn');
        }
    }
    });
    
$('.cardflag-hidden').on('click', function() {
    $(this).removeClass('cardflag-hidden').addClass('cardflag'); 
    counter++;
    flag++;
    if (counter > 2) {
        unFlipCards();
        counter=0;
        alert('please do not cheat');
    }
    else if (counter === 2) {
        if (flag === 2) {
            turnCount=turnCount+2;
            matches++;
            counter = 0;
            $('.cardflag').removeClass('cardflag').addClass('cardflag-matched');
            $('.cardflag-hidden').removeClass('cardflag-hidden').addClass('cardflag-matched');
            
            if (turnCount%2 === 0) {
                player1score++;
               $('#Player-1').text('Player 1\'s Score: ' + player1score);
            }
        
            else if (turnCount%2 !== 0) {
                player2score++; 
               $('#Player-2').text('Player 2\'s Score: ' + player2score);
            }
            
            if (matches === end) {
                if (player1score > player2score) {
                    setTimeout(alert('player 1 has won the game'), 500);
                }
                else if (player2score > player1score) {
                    setTimeout(alert('player 2 has won the game'), 500);
                }
            }
        }
        
        else {
            setTimeout(function() {unFlipCards()}, 500);
            counter = 0;
        }
        
        if (turnCount%2 === 0) {
            $('.turn').text('It is Player 1\'s Turn');
        }
        
        else if (turnCount%2 !== 0) {
            $('.turn').text('It is Player 2\'s Turn');
        }
    }
    });
    
$('.cardtree-hidden').on('click', function() {
    $(this).removeClass('cardtree-hidden').addClass('cardtree'); 
    counter++;
    tree++;
    if (counter > 2) {
        unFlipCards();
        counter=0;
        alert('please do not cheat');
    }
    else if (counter === 2) {
        if (tree === 2) {
            turnCount=turnCount+2;
            matches++;
            counter = 0;
            $('.cardtree').removeClass('cardtree').addClass('cardtree-matched');
            $('.cardtree-hidden').removeClass('cardtree-hidden').addClass('cardtree-matched');
            
            if (turnCount%2 === 0) {
                player1score++;
               $('#Player-1').text('Player 1\'s Score: ' + player1score);
            }
        
            else if (turnCount%2 !== 0) {
                player2score++; 
               $('#Player-2').text('Player 2\'s Score: ' + player2score);
            }
            
            if (matches === end) {
                if (player1score > player2score) {
                    setTimeout(alert('player 1 has won the game'), 500);
                }
                else if (player2score > player1score) {
                    setTimeout(alert('player 2 has won the game'), 500);
                }
            }
        }
        
        else {
            setTimeout(function() {unFlipCards()}, 500);
            counter = 0;
        }
        
        if (turnCount%2 === 0) {
            $('.turn').text('It is Player 1\'s Turn');
        }
        
        else if (turnCount%2 !== 0) {
            $('.turn').text('It is Player 2\'s Turn');
        }
    }
    });

}   
// this shows the cards. It also changes the score, checks for matches, and pretty much does everything. Everything runs through this because the game all changes whenever a card is flipped, which happens in this   function.
 
function main () { 
start();
flipCard();
$('.restart').on('click', function() {
      location.reload();
}); 
$('.easy').on('click',function(){
    if (button === 0 ) {
    getRandom14(); 
    flipCard();
    counter = 0;
    button = 14;
    }
}); 
$('.normal').on('click', function() { 
    if (button === 0 ) {
    getRandom22(); 
    flipCard();
    counter = 0;
    button = 22;
    }
}); 

$('.hard').on('click', function() { 
    if (button === 0) {
       getRandom30(); 
        flipCard();
        counter = 0;
        button = 30;
    }
});  
}
$(document).ready(main);