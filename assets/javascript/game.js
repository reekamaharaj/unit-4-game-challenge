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
    $("#blob").click(() => clickSwitch(blobAtt));
    $("#roude").click(() => clickSwitch(roudeAtt));
    $("#bob").click(() => clickSwitch(bobAtt));
    $("#mrAngle").click(() => clickSwitch(mrAngleAtt));
}

//player chooses fighter, fighter will be moved to the fight area
function clickSwitch(attributes){
    if (playerPicked === false){
        console.log('if clickSwitch' + fighters);
        fighter(attributes);
    }
    else if (enemyPicked === true){
        opponent(attributes);
    }
    else {
        console.log('if opponent', fighters);
        opponent(attributes);
    }
}

function fighter(attributes){
    console.log('message');
    player = attributes;
    $(player.containerId).appendTo($('#player'));
    playerPicked = true;
    $('#choose').text("Who do you want to fight?");
    fighters.splice($.inArray(attributes, fighters),1);
    console.log('fighter function',fighters);
}

//player chooses enemy to fight, enemy will be moved to the fight area
function opponent(attributes){
//if (enemyPicked === false){
if (fighters.length > 0){
    enemy = attributes;
    $(enemy.containerId).appendTo($('#enemy'));
    enemyPicked = true;
    fighters.splice($.inArray(attributes, fighters),1);
    theFight();
    console.log('oppenent function', enemy);
}
//}
    console.log(fighters);

}

// player vs enemy function
function theFight(){
    //attack button 
    $("#attack").click(
        function(){
            if (enemy.health > 0){
                enemy.health = (enemy.health - player.attack);
                player.health = (player.health - enemy.counter);
                player.attack++;
                console.log(enemy.health);
            }

            if (enemy.health <= 0){
                $('#choose').text("Who do you want to fight next?");
                $(enemy.containerId).appendTo($('#defeated'));
            }
        }
    )
}

//player wins if they beat all the opponents (3)
function gameWin() {
    alert('You win!');
    console.log('game won');
}

// #reset - reset button
function reset() {
    window.location.reload();
}

// TODO: What happens if player.health=0... gameover
// TODO: Add text to the display for damage done
// TODO:  Need to update the health when hit
// TODO: Change up the HTML
// TODO: unbind click events after a figher is clicked
// TODO: Win conditions


//unbind event listeners or 
//Arrow function expression

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