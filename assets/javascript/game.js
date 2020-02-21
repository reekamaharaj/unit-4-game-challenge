
// Game Setup
// - [x] 4 unique characters
// - [x] player chooses a character to play
// - [x] Character attribues: health points, attack power, counter attack power, different values for each
// - [x] No healing or recovery for characters

//Win situation
// - [ ] player beats the other three characters without losing all their HP

// After fighter is picked...
// - [ ] move the enemies to the other side of screen
// - [ ] player will choose which enemy to fight
// - [ ] enemy will start 'defending' and will have HP displayed
// - [ ] Enemy only has counter attack power - value never changes

//During fight
// - [ ] player attacks with an attack button
// - [ ] attack will damage enemy, enemy will lose HP
// - [ ] Enemy will counter after the player, player will lose HP
// - [ ] Enemy hp goes to 0 then the enemy is taken off the screen and the player chooses another enemy
// - [ ] when player attacks their attack power will increase by its "base attack power"



// variables
var resetButton;
var fighter = undefined;
var enemy1 = undefined;
var enemy2 = undefined;
var enemy3 = undefined;

var pink = {
    name: 'Blob',
    health: 100,
    attack: 3,
    counter: 1,
};
var red = {
    name: 'Roude',
    health: 120,
    attack: 8,
    counter: 5,
};
var blue = {
    name: 'Squarebob',
    health: 50,
    attack: 5,
    counter: 3,
};
var green = {
    name: 'Mr. Angle',
    health: 200,
    attack: 9,
    counter: 6,
};

// for sounds added later
// var audioElementWin = document.createElement("audio");
// audioElementWin.setAttribute("src", "assets/sounds/#");

//calling functions for game play

$(document).ready(function(){
    gameStart();
    $("#reset").click(reset);
});

//functions

function gameStart(){
    $('#choose').text("Who do you want to fight first?");
    $("#blob").click(blob);
    $("#roude").click(roude);
    $("#squarebob").click(squarebob);
    $("#mrangle").click(mrangle);
    console.log("game started");
}

function blob(){
    fighter = pink;
    console.log(fighter.name);

}

function roude(){
    fighter = red;
    console.log(fighter.name);

}

function squarebob(){
    fighter = blue;
    console.log(fighter.name);
}

function mrangle(){
    fighter = green;
    console.log(fighter.name);
}

function gameWin() {
    //player wins if they beat all the opponents (3)
    console.log('game won');
}

function reset(){
    fighter = undefined;
    console.log('rest game');

}