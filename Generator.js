class Generator {
  constructor (info) {
    this.width = info.width;
    this.height = info.height;
    this.codes = info.codes;
    this.EPSILON = info.EPSILON;
    this.totalSamplesCount = 0;
    this.samples = [];
    this
    	.defineFrequency()
    	.generate();
  }

  defineFrequency () {
  	this.codes.map((el) => {
  		this.totalSamplesCount += el.numberOfSamples;
    });

  	return this;
  }

  generate () {
  	let i,counter = 0,
  	 	randomNumber;

  	while (counter !== this.totalSamplesCount) {
  		for (i = 0; i < this.codes.length; i++) {
  			randomNumber = Math.round(Math.random() * (this.codes.length-1));

  			if (this.codes[randomNumber].numberOfSamples > 0) {
  				--this.codes[randomNumber].numberOfSamples;
  				++counter;
  				
  				this.createSample(this.codes[randomNumber]);
  			}
  		}
  	}

  	return this;
  }

  createSample (object) {
  	let code = object.code
  		.split('')
  		.map(symbol => (Math.random() >= this.EPSILON ? symbol : Number(!symbol)))
  		.join('');

  	this.samples.push({code: code, symbol: object.symbol});
  }
}

module.exports = Generator;




