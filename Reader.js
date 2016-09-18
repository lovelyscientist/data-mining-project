const fs = require('fs');
const readline = require('readline');

class InputReader {
  constructor (fileName) {
    this.fileName = fileName;
    this.generatedInfo = {
    	width: 0,
    	height: 0,
    	codes: []
    };
  }

  read () {
  	return new Promise((resolve, reject) => {
	  	let counter = 0,
	  		lineInfo;

		const rl = readline.createInterface({
		   input: fs.createReadStream(this.fileName)
		});

		rl.on('line', (line) =>  {
			counter++;
			lineInfo = line.split(' ')
			if (counter === 1) {
				this.generatedInfo.width = Number(lineInfo[0]);
				this.generatedInfo.height = Number(lineInfo[1]);
			} else {
				this.generatedInfo.codes.push({code: lineInfo[0], symbol: lineInfo[1], numberOfSamples: Number(lineInfo[2])});
			}
		});

		rl.on('close', (line) =>  {
			resolve(this.generatedInfo);
		});
	});
  }

  getInfo () {
  	return this.generatedInfo;
  }
}

module.exports = InputReader;