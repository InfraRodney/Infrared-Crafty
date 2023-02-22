Crafty.init(500, 350, document.getElementById('game'));

function createPlayer(playx, playy, playw, playh, playcolor, playspeed, playjump) {
  Crafty.e('2D, Canvas, Color, Twoway, Gravity, Collision, Player').attr({ x: playx, y: playy, w: playw, h: playh }).color(playcolor).twoway(playspeed, playjump).gravity('Floor');
};
function createFloor(floorx, floory, floorwidth, floorheight, floorcolor) {
  Crafty.e('Floor, 2D, Canvas, Color').attr({ x: floorx, y: floory, w: floorwidth, h: floorheight }).color(floorcolor);
};
function createEntity(entx, enty, entwidth, entheight, entcolor, entgrav) {
  Crafty.e('2D, Canvas, Color, Collision, Gravity').attr({ x: entx, y: enty, w: entwidth, h: entheight }).color(entcolor).gravity(entgrav);
};
function createTPlayer(playtx, playty, playtw, playth, playtcolor, playtspeed) {
  Crafty.e('2D, Canvas, Color, Fourway, Collision').attr({ x: playtx, y: playty, w: playtw, h: playth }).color(playtcolor).fourway(playtspeed);
};
function createDeathBarrier(deathx, deathy, deathw, deathh) {
  Crafty.e('2D, Canvas, Color, Collision').attr({x: deathx, y: deathy, w: deathw, h: deathh}).color('black').checkHits('Player').bind("HitOn", function(hitData){window.location.replace("./death.html")});
};
