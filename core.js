Crafty.init(500,350, document.getElementById('game'));

function createPlayer(playx, playy, playw, playh, playcolor, playspeed, playjump) {
  Crafty.e('2D, Canvas, Color, Twoway, Gravity, Collision').attr({x: playx, y: playy, w:playw, h: playh}) .color(playcolor).twoway(playspeed, playjump).gravity('Floor');
};
function createFloor(floorx, floory, floorwidth, floorheight, floorcolor){
  Crafty.e('Floor, 2D, Canvas, Color').attr({x: floorx, y: floory, w: floorwidth, h: floorheight}).color(floorcolor);
};
function createEntity(entx, enty, entwidth, entheight, entcolor){
  Crafty.e('2D, Canvas, Color').attr({x: entx, y: enty, w: entwidth, h: entheight}).color(entcolor);
};
