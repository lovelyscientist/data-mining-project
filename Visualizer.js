class Visualizer {
  constructor (generator) {
    this.width = generator.width;
    this.height = generator.height;
    this.print('10101');
  }

  print (code) {
  	console.log(code);
  }
}

module.exports = Visualizer;