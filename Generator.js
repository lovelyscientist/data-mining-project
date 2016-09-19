class Generator {
  constructor (info) {
    this.width = info.width;
    this.height = info.height;
    this.codes = info.codes;
    this.symbolsFrequencyStorage = {};
    this.totalSamplesCount = 0;
    this
    	.defineFrequency()
    	.generate();
  }

  defineFrequency () {
  	this.codes.map((el) => {
  		this.totalSamplesCount += el.numberOfSamples;
  		this.symbolsFrequencyStorage[el.symbol] = {quantity: el.numberOfSamples};
  	});

  	for (let symbol in this.symbolsFrequencyStorage) {
  		this.symbolsFrequencyStorage[symbol].frequency = (this.symbolsFrequencyStorage[symbol].quantity/this.totalSamplesCount).toFixed(2);
  	}

  	return this;
  }

  generate () {
  	let i, randomNumber;

  	for (i = 0; i < this.totalSamplesCount; i++) {
  		randomNumber = Math.random().toFixed(2);
  	}
  }

}

module.exports = Generator;