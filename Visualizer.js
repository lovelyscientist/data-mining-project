const colors = require('colors/safe');

class Visualizer {
  constructor (generator) {
    //this.width = generator.width;
    //this.height = generator.height;
    this.width = 10;
    this.height = 10;
    this.print('1000100000010001110001001000101000100010001000111001101000101000101000000010001110011000110000100011');
  }

  print (code) {
  	code = code
	  	.split('')

  	for (let j = 0; j < this.height; j++) {
  		code
  			.splice(0, this.width)
  			.map((symbol) => {
  				symbol === '1' ? process.stdout.write(colors.bgBlack('  ')) : process.stdout.write(colors.bgWhite('  '));
  			});

  		process.stdout.write('\n');
  	}
  }
}

module.exports = Visualizer;