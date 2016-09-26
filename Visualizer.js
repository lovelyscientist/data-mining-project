const colors = require('colors/safe');

class Visualizer {
  constructor (generator) {
    this.width = generator.width;
    this.height = generator.height;
    this.samples = generator.samples;
    this.originals = generator.codes;
    this.printAll();
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

  printAll () {
  	process.stdout.write(colors.bold(`Originals: \n`));
  	this.originals.map(el => {
  		this.print(el.code);
  	});

  	process.stdout.write(colors.bold(`Samples: \n`));
  	this.samples.map(el => {
  		this.print(el.code);
  	});
  }
}

module.exports = Visualizer;