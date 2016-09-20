const colors = require('colors/safe');

class Visualizer {
  constructor (generator) {
    this.width = generator.width;
    this.height = generator.height;
    this.print(generator.samples[0].original);
    this.print(generator.samples[0].code);
    this.print(generator.samples[1].code);
    this.print(generator.samples[2].code);
    this.print(generator.samples[3].code);
  }

  print (code) {
  	code = code
	  	.split('')

  	for (let j = 0; j < this.height; j++) {
  		code
  			.splice(0, this.width)
  			.map((symbol) => {
  				symbol === '1' ? process.stdout.write(colors.bgBlack(' ')) : process.stdout.write(colors.bgWhite(' '));
  			});

  		process.stdout.write('\n');
  	}

  	process.stdout.write('\n');
  }
}

module.exports = Visualizer;