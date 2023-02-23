
# Infrared Crafty

Infrared's Crafty is Infrared Interactive's expansion to the [CraftyJS engine](https://github.com/craftyjs/Crafty). The engine makes making games with CraftyJS easy, at an expedious rate. We have made game programming look so easy. Become a game developer now, and check out our YouTube channel for tutorials. The wiki also includes useful information like a getting started template and all the functions you need to get started writing your game!
## Usage
Simple Platformer Using Infrared Crafty
```javascript
createPlayer(30, 0, 30, 30, "red", 200, 300);
createFloor(0, 240, 600, 10, "black");
createDeathBarrier(-10, 0, 10, 1200);
createDeathBarrier(500, 0, 10, 1200);
// The barriers only work on the default resolution the engine sets, tweak their X and Y positions for your desired resolution
```
That's right! Coding is almost not a problem in this engine, even when you need more complex things like collisions, the engine has that built in too!


## Installation

Use/install Infrared Crafty\
Just copy this and put it in your game HTML5 file:
  ```javascript
  <div id="game">
  <script type="text/javascript" src="https://raw.githubusercontent.com/InfraRodney/Infrared-Crafty/main/crafty-min.js"></script>
  <script src="https://raw.githubusercontent.com/InfraRodney/Infrared-Crafty/main/core.js"></script>
  <!-- Or reference the files locally if you installed them -->
  ```
  There are more advanced tutorials coming soon!
## Authors

- [@InfraRodney](https://www.github.com/InfraRodney)
- [@craftyjs](https://github.com/craftyjs)
## License

[MIT](https://choosealicense.com/licenses/mit/)

