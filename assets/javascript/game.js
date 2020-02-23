// for sounds added later
// var audioElementWin = document.createElement("audio");
// audioElementWin.setAttribute("src", "assets/sounds/#");

// variables
var player = undefined;
var playerPicked = false;
var enemy = undefined;
var enemyPicked = false;

var blobAtt = {
    name: 'Blob',
    health: 100,
    attack: 3,
    counter: 1,
    containerId: '#blobContainer'
};
var roudeAtt = {
    name: 'Roude',
    health: 120,
    attack: 8,
    counter: 5,
    containerId: '#roudeContainer'
};
var bobAtt = {
    name: 'Squarebob',
    health: 50,
    attack: 5,
    counter: 3,
    containerId: '#bobContainer'
};
var mrAngleAtt = {
    name: 'Mr. Angle',
    health: 200,
    attack: 9,
    counter: 6,
    containerId: '#mrAngleContainer'
};
var fighters = [blobAtt, roudeAtt, bobAtt, mrAngleAtt];

// calling functions for game play
$(document).ready(function(){
    pageLoad();
    $("#reset").click(reset);
});

//functions

function pageLoad(){
    $(blobAtt.containerId).click(() => clickSwitch(blobAtt));
    $(roudeAtt.containerId).click(() => clickSwitch(roudeAtt));
    $(bobAtt.containerId).click(() => clickSwitch(bobAtt));
    $(mrAngleAtt.containerId).click(() => clickSwitch(mrAngleAtt));
}

//player chooses fighter, fighter will be moved to the fight area
function clickSwitch(attributes){
    if (playerPicked === false){
        fighter(attributes);
    }
    else if (enemyPicked === false){
        opponent(attributes);
    }
    
}

function fighter(attributes){
    player = attributes;
    $(player.containerId).appendTo($('#player'));
    playerPicked = true;
    $('#choose').text("Who do you want to fight?");
    fighters.splice($.inArray(attributes, fighters),1);
    $(player.containerId).off('click');
}

//player chooses enemy to fight, enemy will be moved to the fight area
function opponent(attributes){

    if (fighters.length > 0){
        enemy = attributes;
        $(enemy.containerId).appendTo($('#enemy'));
        enemyPicked = true;
        fighters.splice($.inArray(attributes, fighters),1);
        theFight();
        $(enemy.containerId).off('click');
    }

}

// player vs enemy function
function theFight(){
    //attack button 
    $("#attack").click(
        function(){
            if (enemy.health > 0){
                if (player.health >0){
                enemy.health = (enemy.health - player.attack);

                player.health = (player.health - enemy.counter);

                $('#results').text(player.name + " damaged " + enemy.name + " for " + player.attack + " damage.   " + enemy.name + " damaged " + player.name + " for " + enemy.attack + " damage. " + player.name + " Health: " + player.health + '   ' + enemy.name + " Health: " + enemy.health);
                //innerHTML if want to add HTML tags
                player.attack++;
                }
                else {
                    gameLost();
                }
            }

            if (enemy.health <= 0){
                enemyPicked = false;
                $('#choose').text("Who do you want to fight next?");
                $(enemy.containerId).appendTo($('#defeated'));
                $('#results').text(enemy.name + " was defeated! Fight someone else!");
                $('#attack').off('click');

                if (fighters.length === 0){
                    gameWin();
                }
            }
        }
    )
}

//player wins if they beat all the opponents (3)
function gameWin() {
    $('#choose').text("YOU WON!");
    alert('You win!');
}

//player losses
function gameLost() {
    $('#choose').text("YOU LOST! :C");
    alert('You Lose!');
}

// #reset - reset button
function reset() {
    window.location.reload();
}

//unbind event listeners or 
//Arrow function expression

// Game Setup
// - [x] 4 unique characters
// - [x] player chooses a character to play
// - [x] Character attribues: health points, attack power, counter attack power, different values for each
// - [x] No healing or recovery for characters

//Win situation
// - [x] player beats the other three characters without losing all their HP

// After fighter is picked...
// - [x] move the enemies to the other side of screen
// - [x] player will choose which enemy to fight
// - [x] enemy will start 'defending' and will have HP displayed
// - [x] Enemy only has counter attack power - value never changes

//During fight
// - [x] player attacks with an attack button
// - [x] attack will damage enemy, enemy will lose HP
// - [x] Enemy will counter after the player, player will lose HP
// - [x] Enemy hp goes to 0 then the enemy is taken off the screen and the player chooses another enemy
// - [x] when player attacks their attack power will increase by its "base attack power"

// Extra
// - [ ] Sound effects
// - [ ] Dynamic health bar