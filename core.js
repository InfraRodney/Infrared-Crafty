Crafty.init(500, 350, document.getElementById('game'));

function createPlayer(playx, playy, playw, playh, playcolor, playspeed, playjump) {
  var player = Crafty.e('2D, DOM, Color, Twoway, Gravity, Collision, Player').attr({ x: playx, y: playy, w: playw, h: playh }).color(playcolor).twoway(playspeed, playjump).gravity('Floor');
};
function createFloor(floorx, floory, floorwidth, floorheight, floorcolor) {
  Crafty.e('Floor, 2D, DOM, Color').attr({ x: floorx, y: floory, w: floorwidth, h: floorheight }).color(floorcolor);
};
function createEntity(entx, enty, entwidth, entheight, entcolor, entgrav) {
  Crafty.e('2D, DOM, Color, Collision, Gravity').attr({ x: entx, y: enty, w: entwidth, h: entheight }).color(entcolor).gravity(entgrav);
};
function createTPlayer(playtx, playty, playtw, playth, playtcolor, playtspeed) {
  var player = Crafty.e('2D, DOM, Color, Fourway, Collision').attr({ x: playtx, y: playty, w: playtw, h: playth }).color(playtcolor).fourway(playtspeed);
};
function createDeathBarrier(deathx, deathy, deathw, deathh) {
  Crafty.e('2D, DOM, Color, Collision').attr({ x: deathx, y: deathy, w: deathw, h: deathh }).color('black').checkHits('Player').bind("HitOn", function(hitData) { window.location.replace("./death.html") });
};
function createText(textx, texty, textinput, colortext, textsize, textweight, textfamily) {
  Crafty.e('2D, DOM, Text').attr({x: textx, y: texty}).text(textinput).textColor(colortext).textFont({size: textsize, weight: textweight, family: textfamily});
};
function createGraphics(graphicx, graphicy, graphicw, graphich, graphiccolor) {
  Crafty.e('2D, DOM, Color').attr({x: graphicx, y: graphicy, w: graphicw, h: graphich}).color(graphiccolor);
};
function pauseGame() {
  Crafty.pause();
};
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
};
