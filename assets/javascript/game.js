
// Game Setup
// - [x] 4 unique characters
// - [x] player chooses a character to play
// - [x] Character attribues: health points, attack power, counter attack power, different values for each
// - [x] No healing or recovery for characters

//Win situation
// - [ ] player beats the other three characters without losing all their HP

// After fighter is picked...
// - [x] move the enemies to the other side of screen
// - [x] player will choose which enemy to fight
// - [x] enemy will start 'defending' and will have HP displayed
// - [ ] Enemy only has counter attack power - value never changes

//During fight
// - [ ] player attacks with an attack button
// - [ ] attack will damage enemy, enemy will lose HP
// - [ ] Enemy will counter after the player, player will lose HP
// - [ ] Enemy hp goes to 0 then the enemy is taken off the screen and the player chooses another enemy
// - [ ] when player attacks their attack power will increase by its "base attack power"

// Extra
// - [ ] Sound effects
// - [ ] Dynamic health bar

// for sounds added later
// var audioElementWin = document.createElement("audio");
// audioElementWin.setAttribute("src", "assets/sounds/#");

// variables
var player = undefined;
var playerPicked = false;
var enemy = undefined;
var enemyPicked = false;
var defeated= [ ];

var blobAtt = {
    name: 'Blob',
    health: 100,
    attack: 3,
    counter: 1,
};
var roudeAtt = {
    name: 'Roude',
    health: 120,
    attack: 8,
    counter: 5,
};
var bobAtt = {
    name: 'Squarebob',
    health: 50,
    attack: 5,
    counter: 3,
};
var mrAngleAtt = {
    name: 'Mr. Angle',
    health: 200,
    attack: 9,
    counter: 6,
};
var fighters = [blobAtt, roudeAtt, bobAtt, mrAngleAtt];

// calling functions for game play
$(document).ready(function(){
    pageLoad();
    $("#reset").click(reset);
});

//functions

function pageLoad(){
    $("#blob").click(() => fighter(blobAtt, '#blobContainer'));
    $("#roude").click(() => fighter(roudeAtt, '#roudeContainer'));
    $("#bob").click(() => fighter(bobAtt, '#bobContainer'));
    $("#mrAngle").click(() => fighter(mrAngleAtt, '#mrAngleContainer'));
}

//Arrow function expression notes - [MDN]
// 
//ex1: The {} around the statement means that if something needs to be returned then it needs to be stated
//(one,two,three...,five) => {statements} --Return not implied {}--
//ex2:
//(one,two,three...,five) => expression --Return implied--
//ex3:
//(onething) => {statements}
//ex4:
//onething => {statements}
//ex5: No parameters needed to initiate the statement
//() => {statements}


//player chooses fighter, fighter will be moved to the fight area

function fighter(attributes, containerId){
    if (playerPicked === false){
        player = attributes;
        $(containerId).appendTo($('#player'));
        playerPicked = true;
        $('#choose').text("Who do you want to fight?");
        fighters.splice($.inArray(attributes, fighters),1);

        $("#blob").click(() => opponent(blobAtt, '#blobContainer'));
        $("#roude").click(() => opponent(roudeAtt, '#roudeContainer'));
        $("#bob").click(() => opponent(bobAtt, '#bobContainer'));
        $("#mrAngle").click(() => opponent(mrAngleAtt, '#mrAngleContainer'));
    }
}

//player chooses enemy to fight, enemy will be moved to the fight area
function opponent(attributes, containerId){
    if (enemyPicked === false){
        enemy = attributes;
        $(containerId).appendTo($('#enemy'));
        enemyPicked = true;
        fighters.splice($.inArray(attributes, fighters),1);
    }

}

//player wins if they beat all the opponents (3)
function gameWin() {
    alert('You win!');
    console.log('game won');
}

// #results - there the results go
function damage() {

}

// #defeated - defeated will go here

function defeated() {
    fighter = undefined;

}

// #reset - reset button
function reset() {
    window.location.reload();
}