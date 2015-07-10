// start slingin' some d3 here.
// get the height and width of the screen and take up most of it. 
var gameHeight = window.innerHeight * 0.8;
var gameWidth = window.innerHeight * 0.8;

var enemyPositions = [];
var numEnemies = gameHeight * gameWidth / 10000;
console.log('numEnemies:', numEnemies);

var generateNewPositions = function() {
  // we have to overwrite the existing enemy positions. otherwise we're just endlessly appending onto the end. 
  enemyPositions = [];
  for (var i = 0; i < numEnemies; i++ ) {
    enemyPositions.push([Math.random() * gameWidth, Math.random() * gameHeight]);
  }  
};
generateNewPositions();


// attach an svg to the screen that will be our gameBoard container object
var gameBoard = d3.select('body').append('svg')
  .attr('height', gameHeight + 'px')
  .attr('width', gameWidth + 'px')
  .attr('class', 'gameBoard');


// add enemies to the screen!
var createEnemies = function() {
  generateNewPositions();
  gameBoard.selectAll('image')
    .data(enemyPositions)
    .enter()
    .append("image")
    .attr('x', function(d) {
      return d[0];
    })
    .attr('y', function(d) {
      return d[1];
    })
    .attr('height','20px')
    .attr('width', '20px')
    .attr('xlink:href', 'http://www.clipartbest.com/cliparts/bRT/dxj/bRTdxjxi9.png');
}
createEnemies();

var updatePositions = function() {
  generateNewPositions();
  console.log('positions are:',enemyPositions)
  gameBoard.selectAll('image')
    .data(enemyPositions)
    .transition()
    .duration(1000)
    .attr('x', function(d) {
      return d[0];
    })
    .attr('y', function(d) {
      return d[1];
    })
    .attr('height','50px')
    .attr('width', '50px')
    .attr('xlink:href', 'http://www.clipartbest.com/cliparts/bRT/dxj/bRTdxjxi9.png');

}

setInterval(updatePositions, 1000);
