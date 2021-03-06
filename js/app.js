// Enemies our player must avoid
var Enemy = function(x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += (125 * dt);
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x , y) {
    this.x = x;
    this.y= y;
    this.sprite; 
}

Player.prototype.update = function(dt) {
}

Player.prototype.render = function() {
     ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Player.prototype.handleInput = function(input) {
     if(input === "up") {
          move.play();
          player.y -= 100;
     }
     else if(input === "down") {
          move.play();
          player.y += 100;
     }
     else if(input === "right") {
          move.play();
          player.x += 100;
     }
     else if(input == "left") {
          move.play();
          player.x -= 100;
     }
}

//function to render stars and gems
var Star = function(x, y) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/Star.png';
}

Star.prototype.render = function() {
     ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

var Rock = function(x, y) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/Rock.png';
}

Rock.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

var Gem = function(x, y) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/gem-blue.png';
}

Gem.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var player = new Player(100, 400);

var allEnemies = [new Enemy(-10 * Math.random(), 50),
                  new Enemy(-10 * Math.random(), 130),
                  new Enemy(-10 * Math.random(), 220)];

var allStars = [new Star(400, 50),
                new Star(300, 130),
                new Star(200, 130),
                new Star(225, 300),
                new Star(100, 70),
                new Star(100, 225)];

var allRocks = [new Rock(100, 125),
                new Rock(400, 300)];

var allGems = [new Gem(410, 130),
               new Gem(210, 40)];

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keydown', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});


