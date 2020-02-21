
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

// Extra
// - [ ] Sound effects
// - [ ] Dynamic health bar

// for sounds added later
// var audioElementWin = document.createElement("audio");
// audioElementWin.setAttribute("src", "assets/sounds/#");

// HTML ids
// #blobContainer - Containers blob picture, name, health
//     #blob - Blob picture
//     #health - health value 

// #roudeContainer - Containers roude picture, name, health
//     #roude - Roude picture
//     #health - health value 

// #bobContainer - Containers Bob picture, name, health
//     #bob - bob picture
//     #health - health value 
//      
// #mrAngleContainer - Containers Mr Angle picture, name, health
//     #mrAngle - Mr. Angle picture
//     #health - health value 

// #reset - reset button
// #player - where the player goes
// #results - there the results go
// #defeated - defeated will go here

// variables
var resetButton;
var player = undefined;
var enemy = [ ];
var playerPicked = false;

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

//calling functions for game play

$(document).ready(function(){
    pageLoad();
    $("#reset").click(reset);

});

//functions

function pageLoad(){
    $("#blob").click(blob);
    $("#roude").click(roude);
    $("#bob").click(bob);
    $("#mrAngle").click(mrAngle);
}

function blob(){
    if (playerPicked === false){
        player = blobAtt;
        $('#blobContainer').appendTo($('#player'));
        playerPicked = true;
        $('#choose').text("Who do you want to fight first?");
    }
    else {
        enemy.push(blobAtt);
    }
}

function roude(){
    if (playerPicked === false){
        player = roudeAtt;
        $('#roudeContainer').appendTo($('#player'));
        playerPicked = true;
    }
    else {
        enemy.push(roudeAtt);
    }
}

function bob(){
    if (playerPicked === false){
        player = bobAtt;
        $('#bobContainer').appendTo($('#player'));
        playerPicked = true;
    }
    else {
        enemy.push(bobAtt);
    }
}

function mrAngle(){
    if (playerPicked === false){
        player = mrAngleAtt;
        $('#mrAngleContainer').appendTo($('#player'));
        playerPicked = true;
    }
    else {
        enemy.push(mrAngleAtt);
    }
}

function gameWin() {
    //player wins if they beat all the opponents (3)
    alert('You win!');
    console.log('game won');
}

function reset(){
    player = undefined;
    location.reload(true);
}